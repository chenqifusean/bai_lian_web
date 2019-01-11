/*
Navicat MySQL Data Transfer

Source Server         : chenqifu
Source Server Version : 50508
Source Host           : localhost:3306
Source Database       : bai_lian_shop_city

Target Server Type    : MYSQL
Target Server Version : 50508
File Encoding         : 65001

Date: 2018-12-16 19:48:12
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `bailian_user`
-- ----------------------------
DROP TABLE IF EXISTS `bailian_user`;
CREATE TABLE `bailian_user` (
  `user_id` int(1) unsigned NOT NULL AUTO_INCREMENT,
  `user_name` varchar(25) NOT NULL,
  `password` varchar(25) NOT NULL,
  `phone_num` varchar(13) NOT NULL,
  `email` varchar(50) NOT NULL,
  `time` datetime NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of bailian_user
-- ----------------------------
INSERT INTO `bailian_user` VALUES ('3', 'chenqifu1111', 'a642a77abd7d4f51bf9226cea', '15685165227', '2371400356@qq.com', '2018-12-13 10:41:16');
INSERT INTO `bailian_user` VALUES ('4', 'chenqifu1111', 'a642a77abd7d4f51bf9226cea', '15685165227', '2371400356@qq.com', '2018-12-13 10:43:34');
INSERT INTO `bailian_user` VALUES ('5', 'liuhuan', 'f7c3bc1d808e04732adf67996', '15685165227', '2371400356@qq.com', '2018-12-13 10:45:31');
INSERT INTO `bailian_user` VALUES ('7', 'tonymike', 'f7c3bc1d808e04732adf67996', '15685165227', '54568558@sina.con', '2018-12-13 11:00:01');
INSERT INTO `bailian_user` VALUES ('8', 'chenqifu', 'c4c3be5ee2b80ed28f3c2f085', '15685165227', '2371400356@qq.com', '2018-12-13 13:29:26');

-- ----------------------------
-- Table structure for `bai_lian_love_shop`
-- ----------------------------
DROP TABLE IF EXISTS `bai_lian_love_shop`;
CREATE TABLE `bai_lian_love_shop` (
  `s_id` int(1) unsigned NOT NULL AUTO_INCREMENT,
  `s_img_url` varchar(999) NOT NULL,
  `s_title` varchar(500) NOT NULL,
  `s_price` double(10,2) unsigned NOT NULL,
  `s_bimg_url` varchar(999) NOT NULL,
  `s_index_img` varchar(300) NOT NULL,
  PRIMARY KEY (`s_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of bai_lian_love_shop
-- ----------------------------
INSERT INTO `bai_lian_love_shop` VALUES ('1', 'http://Img.iblimg.com/photo-42//200061240_360x360.JPG;http://img.iblimg.com/photo-42//1886990737_360x360.JPG', '超能离子去油柠檬护手洗洁精1.5kg', '10.90', 'http://Img.iblimg.com/photo-42//200061240_800x800.JPG;http://Img.iblimg.com/photo-42//1886990737_800x800.JPG', 'http://img.iblimg.com/photo-42//200061240_220x220.JPG');
INSERT INTO `bai_lian_love_shop` VALUES ('2', 'http://img35.iblimg.com/goods-210/2000/2016/11/SP_2000_20000412282001_01_10007.jpg;http://img35.iblimg.com/goods-210/2000/2016/11/SP_2000_20000412282001_02_10007.jpg', '天喔俏话梅55g蜜饯零食', '3.90', 'http://Img31.iblimg.com/goods-210/2000/2016/11/SP_2000_20000412282001_01_10008.jpg;http://Img31.iblimg.com/goods-210/2000/2016/11/SP_2000_20000412282001_02_10008.jpg', 'http://img32.iblimg.com/goods-210/2000/2016/11/SP_2000_20000412282001_01_10009.jpg');
INSERT INTO `bai_lian_love_shop` VALUES ('3', 'http://img.iblimg.com/photo-42/1000/1411549027_360x360.jpg;http://img.iblimg.com/photo-42/1000/279973038_360x360.jpg', '童涵春堂枸杞子125g', '35.90', 'http://Img.iblimg.com/photo-42/1000/1411549027_800x800.jpg;http://Img.iblimg.com/photo-42/1000/279973038_800x800.jpg', 'http://img.iblimg.com/photo-42/1000/1411549027_220x220.jpg');
INSERT INTO `bai_lian_love_shop` VALUES ('4', 'http://img33.iblimg.com/goods-29/3020/2016/11/SP_3020_302001525818_01_10007.jpg;http://img.iblimg.com/photo-42/3020/753113935_360x360.jpg', '【个护优选】飞利浦（PHILIPS）HX9352/04', '1199.00', 'http://Img34.iblimg.com/goods-29/3020/2016/11/SP_3020_302001525818_01_10008.jpg;http://Img.iblimg.com/photo-42/3020/753113935_800x800.jpg', 'http://img35.iblimg.com/goods-29/3020/2016/11/SP_3020_302001525818_01_10009.jpg');
INSERT INTO `bai_lian_love_shop` VALUES ('5', 'http://img.iblimg.com/photo-42/1000/683944908_360x360.jpg;http://img.iblimg.com/photo-42/1000/778353998_360x360.jpg', '雪绒华女式收腰抽绳修身纯色套装羊绒衫', '564.00', 'http://Img.iblimg.com/photo-42/1000/683944908_800x800.jpg;http://Img.iblimg.com/photo-42/1000/778353998_800x800.jpg', 'http://img.iblimg.com/photo-42/1000/683944908_220x220.jpg');
INSERT INTO `bai_lian_love_shop` VALUES ('6', 'http://img33.iblimg.com/photo-4/3020/1119792545_360x360.jpg;http://img33.iblimg.com/photo-4/3020/1395149393_360x360.jpg', '能率（NORITZ）GQ-13E4AFEX 13升 豪华型', '2698.00', 'http://Img32.iblimg.com/photo-4/3020/1119792545_800x800.jpg;http://Img32.iblimg.com/photo-4/3020/1395149393_800x800.jpg', 'http://img31.iblimg.com/photo-4/3020/1119792545_220x220.jpg');
INSERT INTO `bai_lian_love_shop` VALUES ('7', 'http://img.iblimg.com/photo-42/1000/784870330_360x360.jpg;http://img.iblimg.com/photo-42/1000/408928125_360x360.jpg', 'SKII护肤精华露330ml ', '1584.00', 'http://Img.iblimg.com/photo-42/1000/784870330_800x800.jpg;http://Img.iblimg.com/photo-42/1000/408928125_800x800.jpg', 'http://img13.iblimg.com/goods-132/1000/2017/02/SP_1000_100027054557_01_10009.jpg');
