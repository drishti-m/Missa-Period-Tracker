-- MySQL dump 10.13  Distrib 5.7.32, for Linux (x86_64)
--
-- Host: localhost    Database: period_tracker
-- ------------------------------------------------------
-- Server version	5.7.32-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Period_Dates`
--


DROP TABLE IF EXISTS `Period_Dates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Period_Dates` (
  `Period_ID` int(11) NOT NULL,
  `Start_period_date` date NOT NULL,
  `End_period_date` date NOT NULL,
  PRIMARY KEY (`Period_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Period_Dates`
--

LOCK TABLES `Period_Dates` WRITE;
/*!40000 ALTER TABLE `Period_Dates` DISABLE KEYS */;
INSERT INTO `Period_Dates` VALUES (1,'2020-01-01','2020-01-12'),(2,'2020-01-10','2020-01-16');
/*!40000 ALTER TABLE `Period_Dates` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User_Account`
--

DROP TABLE IF EXISTS `User_Account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `User_Account` (
  `Date_of_Birth` date NOT NULL,
  `Email_id` varchar(50) NOT NULL,
  `Name` varchar(70) NOT NULL,
  `Username` varchar(45) NOT NULL,
  `Password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`Username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User_Account`
--

LOCK TABLES `User_Account` WRITE;
/*!40000 ALTER TABLE `User_Account` DISABLE KEYS */;
INSERT INTO `User_Account` VALUES ('2000-01-26','a.aaa@gmail.com','aayush','aayu','aa'),('2000-01-26','a.achar@gmail.com','aayush','ayu','bb'),('1999-11-07','d.mah@gmail.com','drishti','drish','cc'),('2021-01-01','d.maharjan@jacobs-university.de','dj malik','lovelyji','rest'),('2021-01-01','d.maharjan@jacobs-university.de','d','reeeee','red'),('1999-01-01','test@gmail.com','test','testi','aa');
/*!40000 ALTER TABLE `User_Account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_period`
--

DROP TABLE IF EXISTS `user_period`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_period` (
  `Period_ID` int(11) NOT NULL,
  `Username` varchar(45) NOT NULL,
  PRIMARY KEY (`Period_ID`,`Username`),
  KEY `fk_user_name_idx` (`Username`),
  CONSTRAINT `fk_period_id` FOREIGN KEY (`Period_ID`) REFERENCES `Period_Dates` (`Period_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_name` FOREIGN KEY (`Username`) REFERENCES `User_Account` (`Username`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_period`
--

LOCK TABLES `user_period` WRITE;
/*!40000 ALTER TABLE `user_period` DISABLE KEYS */;
INSERT INTO `user_period` VALUES (1,'drish');
/*!40000 ALTER TABLE `user_period` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-14  0:07:41
