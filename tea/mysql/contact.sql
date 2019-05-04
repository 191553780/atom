/*
 Navicat MySQL Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 50720
 Source Host           : localhost:3306
 Source Schema         : tea

 Target Server Type    : MySQL
 Target Server Version : 50720
 File Encoding         : 65001

 Date: 24/03/2019 19:11:01
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for contact
-- ----------------------------
DROP TABLE IF EXISTS `contact`;
CREATE TABLE `contact`  (
  `cname` varchar(120) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `yname` varchar(120) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `eadd` varchar(120) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `content` varchar(250) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`yname`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of contact
-- ----------------------------
INSERT INTO `contact` VALUES ('745', '74', '46', 'binnkmbinnkm');
INSERT INTO `contact` VALUES ('745', '78465', '', '');
INSERT INTO `contact` VALUES ('qwe', 'aaa', '12356@360.com', 'ASDFDG');
INSERT INTO `contact` VALUES ('qwe', 'qwe', 'qwe', 'qwe');
INSERT INTO `contact` VALUES ('xiaosi', 'qwerfg', 'qwerfgzfz', 'qwerfgzfzadf');
INSERT INTO `contact` VALUES ('xiaosi', 'wds', '12356@360.com', 'wdsfdgfd');
INSERT INTO `contact` VALUES ('qwe', 'we', '13312@360.com', 'dstgsd');
INSERT INTO `contact` VALUES ('赤脚', '赤脚大仙儿', '12356@360.com', 'qwsedfscdfcqwsedfscdfc');

SET FOREIGN_KEY_CHECKS = 1;
