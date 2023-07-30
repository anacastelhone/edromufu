#!/usr/bin/env python3

import os
import rospy
from dynamixel_sdk import *

from ros_msgs.msg import *
from ros_msgs.srv import *

PROTOCOL_VERSION = 1.0  
BAUDRATE = 1000000
DEVICENAME = '/dev/ttyUSB0'

ADDR_TORQUE_ENABLE = 24
ADDR_LED_ENABLE = 25
ADDR_GOAL_POSITION = 30
ADDR_PRESENT_POSITION = 36
ADDR_MOVING = 46

inverted_motors_id = [6, 14, 7, 11, 15]

class u2d2Control():

    def __init__(self):
        rospy.init_node('u2d2')
        
        rospy.Subscriber('u2d2_comm/data2motors', motors_data, self.data2motors)

        rospy.Service('u2d2_comm/enableTorque', enable_torque, self.enableTorque)
        self.enableTorqueRes = enable_torqueResponse()

        rospy.Service('u2d2_comm/feedbackMotors', position_feedback, self.feedbackMotors)
        self.feedbackRes = position_feedbackResponse()

        self.portHandler = PortHandler(DEVICENAME)
        self.packetHandler = PacketHandler(PROTOCOL_VERSION)
        self.startComm()

    def startComm(self):
        # Open port
        try:
            self.portHandler.openPort()
            print("Succeeded to open the port")
        except:
            print("Failed to open the port")
            quit()

        # Set port baudrate
        try:
            self.portHandler.setBaudRate(BAUDRATE)
            print("Succeeded to change the baudrate")
        except:
            print("Failed to change the baudrate")
            quit()
    
    def enableTorque(self, req):
        
        if req.motor_ids[0] == -1:
            motor_ids = range(20)
        else:
            motor_ids = req.motor_ids

        success_motors = []
        failure_motors = []

        for motor_id in motor_ids:
            self.packetHandler.write1ByteTxOnly(self.portHandler, motor_id, ADDR_TORQUE_ENABLE, req.data)
            self.packetHandler.write1ByteTxOnly(self.portHandler, motor_id, ADDR_LED_ENABLE, req.data)
            torque_status, _comm, _hard = self.packetHandler.read1ByteTxRx(self.portHandler, motor_id, ADDR_TORQUE_ENABLE)

            if torque_status != req.data:
                failure_motors.append(motor_id)
            else:
                success_motors.append(motor_id)

        self.enableTorqueRes.message = f'Sucesso: {success_motors}   |   Falha: {failure_motors}'
        if len(success_motors) == len(motor_ids):
            self.enableTorqueRes.success = True
        else:
            self.enableTorqueRes.success = False
        
        return self.enableTorqueRes

    def feedbackMotors(self, req):
        self.feedbackRes.pos_vector = [0]*20

        for motor_id in range(20):
            motor_position, comm, hard = self.packetHandler.read2ByteTxRx(self.portHandler, motor_id, ADDR_PRESENT_POSITION)

            if comm !=0 or hard != 0:
                self.feedbackRes.pos_vector[motor_id] = -1
            else:
                self.feedbackRes.pos_vector[motor_id] = pos2rad(motor_position)

        return self.feedbackRes

    def data2motors(self, msg):

        for motor_id in range(20):
            motor_position = msg.pos_vector[motor_id]

            if motor_id in inverted_motors_id:
                motor_position *= -1
            
            self.packetHandler.write2ByteTxOnly(self.portHandler, motor_id, ADDR_GOAL_POSITION, self.rad2pos(motor_position))  

    def rad2pos(self, pos_in_rad):
        
        motor_position = int(195.379*pos_in_rad + 512)
        motor_position = min(motor_position, 1023)
        motor_position = max(motor_position, 0)
        
        return motor_position

    def pos2rad(self, motor_position):
        pos_in_rad = (motor_position-512)/195.379
        
        if motor_id in inverted_motors_id:
            pos_in_rad = -pos_in_rad

        return pos_in_rad

    def run(self):
        rospy.spin()
        
        """ count = 0
        while not rospy.is_shutdown():
            if not count%100:
                self.checkMoving()
            count += 1 """
            
    def checkMoving(self):
        
        isMotorMoving = [0]*20

        for motor_id in range(20):
            isMotorMoving[motor_id], comm, hard = self.packetHandler.read2ByteTxRx(self.portHandler, motor_id, ADDR_MOVING)

        if any(isMotorMoving):
            print('Ao menos um motor está se movendo.')
        
if __name__ == '__main__':

    u2d2 = u2d2Control()
    u2d2.run()