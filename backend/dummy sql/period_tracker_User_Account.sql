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
  `Password_Hash` varchar(257) NOT NULL,
  PRIMARY KEY (`Username`),
  UNIQUE KEY `Email_id_UNIQUE` (`Email_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User_Account`
--

LOCK TABLES `User_Account` WRITE;
/*!40000 ALTER TABLE `User_Account` DISABLE KEYS */;
INSERT INTO `User_Account` VALUES ('2021-01-01','arne','arnr','arne','ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb'),('2021-01-01','dm','Drishti','dj','cde0e753dc250f2c57e27a5815e9eaf3a64df85acf8a3311aab066ba7c90643c'),('2021-01-01','d.maharjan@jacobs-university.de','Drishti Maharjan','dj10','801a62fb1f46582ae6c7a32b63f6f7353d683d18563e53321132cc5e101ca1e5'),('1999-11-07','d.mah@gmail.com','drishti','drish',''),('2021-01-01','djx','r','f','ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb'),('2021-01-01','patte','pratima','patte','131243a1a3f3f4197eaafbd083dde2936e98228e3d946ceb88e1a425e824808d'),('2021-01-01','dj','raju','redy','2d711642b726b04401627ca9fbac32f5c8530fb1903cc4db02258717921a4881');
/*!40000 ALTER TABLE `User_Account` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-17 19:08:43
