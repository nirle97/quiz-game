-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: orm
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `country_quiz`
--

DROP TABLE IF EXISTS `country_quiz`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `country_quiz` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Country` varchar(40) NOT NULL,
  `Capital` varchar(19) NOT NULL,
  `Continent` varchar(15) NOT NULL,
  `Restaurant_Price_Index` float DEFAULT NULL,
  `Cost_of_Living_Index` float DEFAULT NULL,
  `Phones_per_1000` float DEFAULT NULL,
  `Crime_Index` float DEFAULT NULL,
  `Safety_Index` float DEFAULT NULL,
  `Health_Care_Index` float DEFAULT NULL,
  `Area_km2` int DEFAULT NULL,
  `Population` int DEFAULT NULL,
  `Density_popkm2` int DEFAULT NULL,
  `Price_To_Income_Ratio` float DEFAULT NULL,
  `Quality_of_Life_Index` float DEFAULT NULL,
  PRIMARY KEY (`id`,`Country`)
) ENGINE=InnoDB AUTO_INCREMENT=245 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `country_quiz`
--

LOCK TABLES `country_quiz` WRITE;
/*!40000 ALTER TABLE `country_quiz` DISABLE KEYS */;
INSERT INTO `country_quiz` VALUES (1,'Aland Islands','Mariehamn','Europe',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2,'Albania','Tirana','Europe',26.75,36.39,71.2,39.52,60.48,53.05,28703,2862427,100,15.49,NULL),(3,'Algeria','Algiers','Africa',15.89,30.1,78.1,49.81,50.19,54.86,2381741,43000000,18,17.81,NULL),(4,'American Samoa','Pago Pago','Australia',NULL,NULL,259.5,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(5,'Andorra','Andorra la Vella','Europe',NULL,NULL,497.2,NULL,NULL,NULL,464,76177,164,NULL,NULL),(6,'Angola','Luanda','Africa',NULL,NULL,7.8,64.97,35.03,NULL,1246700,29250009,23,NULL,NULL),(7,'Anguilla','The Valley','North America',NULL,NULL,460,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(8,'Antarctica','N/A','Antarctica',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(9,'Antigua and Barbuda','Saint John\'s','North America',NULL,NULL,NULL,NULL,NULL,NULL,442,104084,235,NULL,NULL),(10,'Argentina','Buenos Aires','South America',30.52,32.95,220.4,61.77,38.23,69.25,2780400,44938712,16,24.53,115.31),(11,'Armenia','Yerevan','Europe',30.43,32.84,195.7,21.6,78.4,NULL,29743,2957500,99,16.62,NULL),(12,'Aruba','Oranjestad','North America',NULL,NULL,516.1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(13,'Australia','Canberra','Australia',70.32,73.54,565.5,41.36,58.64,77.38,7692024,25649909,3,7.52,186.21),(14,'Austria','Vienna','Europe',68.09,70.38,452.2,23.73,76.27,78.73,83879,8902600,106,10.88,182.5),(15,'Azerbaijan','Baku','Europe',30.36,29.92,137.1,31.61,68.39,43.18,86600,10067108,116,16.24,NULL),(16,'Bahamas','Nassau','North America',83.66,82.51,NULL,62.86,37.14,NULL,13940,386870,28,NULL,NULL),(17,'Bahrain','Manama','Asia',54.55,58.94,281.3,29.29,70.71,NULL,778,1543300,1983,8.63,NULL),(18,'Bangladesh','Dhaka','Asia',19.21,32.25,7.3,63.94,36.06,42.8,143998,168287530,1169,13.1,70.03),(19,'Barbados','Bridgetown','North America',68.14,76.02,481.9,NULL,NULL,NULL,430,287025,668,NULL,NULL),(20,'Belarus','Minsk','Europe',38.94,34.7,319.1,24.99,75.01,59.04,207600,9465300,46,14.65,134.83),(21,'Belgium','Brussels','Europe',80.14,71.78,462.6,43.98,56.02,74.34,30689,11524454,376,6.91,153.47),(22,'Belize','Belmopan','Central America',37.05,49.23,115.7,NULL,NULL,NULL,22965,398050,17,NULL,NULL),(23,'Benin','Porto-Novo','Africa',NULL,NULL,9.7,NULL,NULL,NULL,112622,11733059,104,NULL,NULL),(24,'Bermuda','Hamilton','North America',NULL,NULL,851.4,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(25,'Bhutan','Thimphu','Asia',NULL,NULL,14.3,NULL,NULL,NULL,38394,824148,21,NULL,NULL),(26,'Bolivia','La Paz','South America',25.11,34.56,71.9,52.93,47.07,NULL,1098581,11307314,10,9.69,NULL),(27,'Bosnia and Herzegovina','Sarajevo','Europe',25.1,35.97,NULL,43.03,56.97,52.26,51209,3511372,69,12.58,121.89),(28,'Botswana','Gaborone','Africa',39.98,39.13,80.5,53.49,46.51,NULL,581730,2302878,4,NULL,NULL),(29,'Brazil','Brasilia','South America',30.78,40.22,225.3,68.88,31.12,56.29,8515767,211270518,25,16.41,105.65),(30,'British Indian Ocean Territory','Diego Garcia','Africa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(31,'British Virgin Islands','Road Town','North America',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(32,'Brunei Darussalam','Bandar Seri Begawan','Asia',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(33,'Bulgaria','Sofia','Europe',29.14,36.7,336.3,38.5,61.5,55.4,111002,7000039,63,8.52,129.8),(34,'Burkina Faso','Ouagadougou','Africa',NULL,NULL,7,NULL,NULL,NULL,270764,20244080,75,NULL,NULL),(35,'Burundi','Bujumbura','Africa',NULL,NULL,3.4,NULL,NULL,NULL,27816,11215578,403,NULL,NULL),(36,'Cambodia','Phnom Penh','Asia',25.19,47.49,2.6,50.66,49.34,NULL,181035,16289270,90,42.33,NULL),(37,'Cameroon','Yaounde','Africa',NULL,NULL,5.7,NULL,NULL,NULL,466050,24348251,52,NULL,NULL),(38,'Canada','Ottawa','Central America',63.53,67.62,552.2,39.67,60.33,71.58,9984670,37961548,4,7.97,163.47),(39,'Cape Verde','Praia','Africa',NULL,NULL,169.6,NULL,NULL,NULL,4033,550483,136,NULL,NULL),(40,'Cayman Islands','George Town','North America',NULL,NULL,836.3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(41,'Central African Republic','Bangui','Africa',NULL,NULL,NULL,NULL,NULL,NULL,622436,4737423,8,NULL,NULL),(42,'Chad','N\'Djamena','Africa',NULL,NULL,1.3,NULL,NULL,NULL,1284000,15353184,12,NULL,NULL),(43,'Chile','Santiago','South America',41.57,43.62,213,45.23,54.77,65.44,756096,17373831,23,14.93,119.76),(44,'China','Beijing','Asia',29.16,40.04,266.7,31.83,68.17,64.48,9640821,1401812360,145,29.06,102.81),(45,'Christmas Island','The Settlement','Australia',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(46,'Cocos Islands','West Island','Australia',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(47,'Colombia','Bogota','South America',22.44,30.66,176.2,54.79,45.21,67.24,1141748,46202800,40,19.65,105.83),(48,'Comoros','Moroni','Africa',NULL,NULL,24.5,NULL,NULL,NULL,1861,873724,469,NULL,NULL),(49,'Cook Islands','Avarua','Australia',NULL,NULL,289.9,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(50,'Costa Rica','San Jose','Central America',43.51,53.98,340.7,56.33,43.67,62.42,51100,5058007,99,10.31,NULL),(51,'Cote d\'Ivoire','Yamoussoukro','Africa',NULL,NULL,14.6,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(52,'Croatia','Zagreb','Europe',42.44,49.7,420.4,24.71,75.29,62.68,56542,4087843,72,13.73,159.01),(53,'Cuba','Havana','North America',30.95,43.46,74.7,27.45,72.55,NULL,109884,11209628,102,NULL,NULL),(54,'Curaçao','Willemstad','North America',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(55,'Cyprus','Nicosia','Europe',63.11,57.93,NULL,30.01,69.99,51.75,5896,875900,149,8.2,147.93),(56,'Czech Republic','Prague','Europe',34.1,46.15,314.3,25.52,74.48,74.62,78867,10681161,135,15.42,156.24),(57,'Democratic Republic of the Congo','Kinshasa','Africa',NULL,NULL,NULL,NULL,NULL,NULL,2345095,86790567,37,NULL,NULL),(58,'Denmark','Copenhagen','Europe',100.75,83,614.6,25.1,74.9,80,43098,5814461,135,7.45,192.67),(59,'Djibouti','Djibouti','Africa',NULL,NULL,22.8,NULL,NULL,NULL,23000,1078373,47,NULL,NULL),(60,'Dominica','Roseau','North America',NULL,NULL,304.8,NULL,NULL,NULL,739,71808,97,NULL,NULL),(61,'Dominican Republic','Santo Domingo','North America',38.27,44.06,97.4,61.16,38.84,54.67,47875,10358320,216,13.48,NULL),(62,'Ecuador','Quito','South America',30.66,40.98,125.6,50.9,49.1,70.59,276841,17446584,63,12.7,125.14),(63,'Egypt','Cairo','Africa',23.53,29.54,131.8,46.92,53.08,45.84,1002450,100138465,100,13.01,86.54),(64,'El Salvador','San Salvador','Central America',34.8,45.57,142.4,67.96,32.04,NULL,21040,6704864,319,NULL,NULL),(65,'Equatorial Guinea','Malabo','Africa',NULL,NULL,18.5,NULL,NULL,NULL,28051,1358276,48,NULL,NULL),(66,'Eritrea','Asmara','Africa',NULL,NULL,7.9,NULL,NULL,NULL,121100,3497117,29,NULL,NULL),(67,'Estonia','Tallinn','Europe',52.94,50.93,333.8,23.14,76.86,72.67,45339,1324820,29,9.06,177.82),(68,'Ethiopia','Addis Ababa','Africa',19.37,54.39,8.2,49.21,50.79,NULL,1063652,107534882,101,NULL,NULL),(69,'Falkland Islands','Stanley','South America',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(70,'Faroe Islands','Torshavn','Europe',NULL,NULL,503.8,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(71,'Federated States of Micronesia','Palikir','Australia',NULL,NULL,NULL,NULL,NULL,NULL,701,105600,151,NULL,NULL),(72,'Fiji','Suva','Australia',35.87,47.48,112.6,58.92,41.08,NULL,18333,884887,48,NULL,NULL),(73,'Finland','Helsinki','Europe',76.81,70.29,405.3,23.32,76.68,75.79,338424,5527405,16,8.35,190.22),(74,'France','Paris','Europe',72.54,74.14,586.4,46.79,53.21,79.99,543965,67060000,123,13.04,153.95),(75,'French Polynesia','Papeete','Australia',NULL,NULL,194.5,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(76,'French Southern and Antarctic Lands','Port-aux-Français','Antarctica',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(77,'Gabon','Libreville','Africa',NULL,NULL,27.4,NULL,NULL,NULL,267667,2067561,8,NULL,NULL),(78,'Georgia','Tbilisi','Europe',26.66,28.48,146.6,20.21,79.79,51.24,69700,3729600,54,14.21,115.95),(79,'Germany','Berlin','Europe',61.58,65.26,667.9,34.81,65.19,73.32,357168,83149300,233,9.38,179.78),(80,'Ghana','Accra','Africa',26.59,37.65,14.4,48.97,51.03,NULL,238533,30280811,127,NULL,NULL),(81,'Gibraltar','Gibraltar','Europe',NULL,NULL,877.7,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(82,'Greece','Athens','Europe',53.74,55.67,589.7,40.32,59.68,56.21,131957,10724599,81,10.6,133.07),(83,'Greenland','Nuuk','Central America',NULL,NULL,448.9,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(84,'Grenada','Saint George\'s','North America',NULL,NULL,364.5,NULL,NULL,NULL,344,108825,316,NULL,NULL),(85,'Guam','Hagatna','Australia',NULL,NULL,492,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(86,'Guatemala','Guatemala City','Central America',33,42.7,92.1,57.83,42.17,67.75,108889,17679735,162,10.08,NULL),(87,'Guernsey','Saint Peter Port','Europe',NULL,NULL,842.4,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(88,'Guinea','Conakry','Africa',NULL,NULL,2.7,NULL,NULL,NULL,245857,12218357,50,NULL,NULL),(89,'Guinea-Bissau','Bissau','Africa',NULL,NULL,7.4,NULL,NULL,NULL,36125,1604528,44,NULL,NULL),(90,'Guyana','Georgetown','South America',NULL,NULL,143.5,67.66,32.34,NULL,214999,782225,4,NULL,NULL),(91,'Haiti','Port-au-Prince','North America',NULL,NULL,16.9,NULL,NULL,NULL,27065,11263077,416,NULL,NULL),(92,'Heard Island and McDonald Islands','N/A','Antarctica',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(93,'Honduras','Tegucigalpa','Central America',30.55,42.17,67.5,76.11,23.89,NULL,112492,9158345,81,10.77,NULL),(94,'Hong Kong','N/A','Asia',54.36,77.22,546.7,20.7,79.3,66.08,1106,7500700,6782,47.46,99.05),(95,'Hungary','Budapest','Europe',34.46,40.85,336.2,35.08,64.92,47.8,93029,9764000,105,14.77,128.16),(96,'Iceland','Reykjavik','Europe',113.74,100.48,647.7,23.36,76.64,65.92,102775,360390,4,6.74,181.75),(97,'India','New Delhi','Asia',17.17,24.58,45.4,43.32,56.68,67.13,3287240,1359933123,414,11.38,108.63),(98,'Indonesia','Jakarta','Asia',18.25,37.27,52,45.84,54.16,60.48,1904569,268074600,141,18.88,97.47),(99,'Iran','Tehran','Asia',25.12,39.01,276.4,49.25,50.75,51.7,1648195,83290141,51,25.11,74.14),(100,'Iraq','Baghdad','Asia',32.72,39.04,38.6,47.78,52.22,41.36,438317,39309783,90,9.12,NULL),(101,'Ireland','Dublin','Europe',81.24,75.91,500.5,45.43,54.57,51.89,70273,4921500,70,7.49,153.53),(102,'Isle of Man','Douglas','Europe',NULL,NULL,676,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(103,'Israel','Jerusalem','Asia',88.65,81.15,462.3,29.6,70.4,73.29,22072,9173250,416,12.83,149.94),(104,'Italy','Rome','Europe',72.32,67.26,430.9,44.26,55.74,66.59,301308,60252824,200,9.71,140.76),(105,'Jamaica','Kingston','North America',38.12,57.82,124,66.04,33.96,NULL,10991,2726667,248,NULL,NULL),(106,'Japan','Tokyo','Asia',48.95,83.35,461.2,20.66,79.34,81.14,377975,126010000,333,13,167.99),(107,'Jersey','Saint Helier','Europe',NULL,NULL,811.3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(108,'Jordan','Amman','Asia',47.12,53.67,104.5,40.83,59.17,64.6,89342,10638536,119,8.42,112.4),(109,'Kazakhstan','Astana','Asia',29.87,30.64,164.1,62.02,37.98,50.7,2724900,18592700,7,10.86,88.31),(110,'Kenya','Nairobi','Africa',35.06,40.21,8.1,61.66,38.34,55.59,581834,47564296,82,31.63,70.56),(111,'Kiribati','Tarawa','Australia',NULL,NULL,42.7,NULL,NULL,NULL,811,125000,154,NULL,NULL),(112,'Kosovo','Pristina','Europe',NULL,NULL,NULL,NULL,NULL,NULL,10910,1795666,165,NULL,NULL),(113,'Kuwait','Kuwait City','Asia',47.08,50.37,211,34.75,65.25,56.21,17818,4420110,248,12.28,115.75),(114,'Kyrgyzstan','Bishkek','Asia',21.45,26.97,84,NULL,NULL,NULL,199945,6309300,32,NULL,NULL),(115,'Laos','Vientiane','Asia',NULL,NULL,14.1,NULL,NULL,NULL,236800,6492400,27,NULL,NULL),(116,'Latvia','Riga','Europe',42.88,47.94,321.4,36.95,63.05,62.91,64562,1910400,30,8.85,150),(117,'Lebanon','Beirut','Asia',58.16,60.5,255.6,43.36,56.64,64.38,10452,6855713,672,13.23,106.56),(118,'Lesotho','Maseru','Africa',NULL,NULL,23.7,NULL,NULL,NULL,30355,2263010,75,NULL,NULL),(119,'Liberia','Monrovia','Africa',NULL,NULL,2.3,NULL,NULL,NULL,97036,4475353,46,NULL,NULL),(120,'Libya','Tripoli','Africa',NULL,NULL,127.1,62.19,37.81,NULL,1770060,6470956,4,NULL,NULL),(121,'Liechtenstein','Vaduz','Europe',NULL,NULL,585.5,NULL,NULL,NULL,160,38380,240,NULL,NULL),(122,'Lithuania','Vilnius','Europe',42.7,44.28,223.4,33.06,66.94,69.49,65300,2793466,43,10.9,159.42),(123,'Luxembourg','Luxembourg','Europe',89.85,81.89,515.4,33.39,66.61,NULL,2586,613894,237,11.61,NULL),(124,'Macau','N/A','Asia',NULL,NULL,384.9,NULL,NULL,NULL,33,676100,20550,NULL,NULL),(125,'Macedonia','Skopje','Europe',NULL,NULL,260,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(126,'Madagascar','Antananarivo','Africa',NULL,NULL,3.6,NULL,NULL,NULL,587041,25680342,44,NULL,NULL),(127,'Malawi','Lilongwe','Africa',NULL,NULL,7.9,NULL,NULL,NULL,118484,17563749,148,NULL,NULL),(128,'Malaysia','Kuala Lumpur','Asia',22.94,39.12,179,58.84,41.16,68.1,330803,32722760,99,9.94,118.44),(129,'Maldives','Male','Asia',NULL,NULL,90,53.21,46.79,NULL,298,374775,1258,NULL,NULL),(130,'Mali','Bamako','Africa',NULL,NULL,6.4,NULL,NULL,NULL,1248574,19107706,15,NULL,NULL),(131,'Malta','Valletta','Europe',75.94,67.46,505,39.04,60.96,68.81,315,493559,1510,12.32,NULL),(132,'Marshall Islands','Majuro','Australia',NULL,NULL,91.2,NULL,NULL,NULL,181,55900,309,NULL,NULL),(133,'Mauritania','Nouakchott','Africa',NULL,NULL,12.9,NULL,NULL,NULL,1030700,3984233,4,NULL,NULL),(134,'Mauritius','Port Louis','Africa',43.96,53.04,289.3,47.33,52.67,NULL,2040,1265577,620,NULL,NULL),(135,'Mexico','Mexico City','Central America',32.12,35.72,181.6,53.97,46.03,70.12,1967138,126577691,64,10.67,118.55),(136,'Moldova','Chisinau','Europe',27.79,33.7,208.1,44.98,55.02,NULL,33843,2681735,79,NULL,NULL),(137,'Monaco','Monaco','Europe',NULL,NULL,1035.6,NULL,NULL,NULL,2,38300,18960,NULL,NULL),(138,'Mongolia','Ulaanbaatar','Asia',NULL,NULL,55.1,57.97,42.03,NULL,1564100,3000000,2,NULL,NULL),(139,'Montenegro','Podgorica','Europe',33.16,38.23,NULL,41.18,58.82,NULL,13812,622182,45,13.23,NULL),(140,'Montserrat','Plymouth','North America',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(141,'Morocco','Rabat','Africa',24.5,34.32,40.4,48.69,51.31,45.72,446550,35842238,80,14.18,105.46),(142,'Mozambique','Maputo','Africa',NULL,NULL,3.5,NULL,NULL,NULL,799380,28571310,36,NULL,NULL),(143,'Myanmar','Rangoon','Asia',19.04,42.11,NULL,45.86,54.14,NULL,676577,54339766,80,NULL,NULL),(144,'Namibia','Windhoek','Africa',39.22,43.1,62.6,67.21,32.79,NULL,825118,2413643,3,5.15,NULL),(145,'Nauru','Yaren','Australia',NULL,NULL,143,NULL,NULL,NULL,21,11200,533,NULL,NULL),(146,'Nepal','Kathmandu','Asia',20.36,29.05,15.9,34.56,65.44,56.88,147181,29609623,201,24.74,NULL),(147,'Netherlands','Amsterdam','Europe',80.48,73.75,460.8,27.62,72.38,74.65,41526,17445781,420,7.51,183.67),(148,'New Caledonia','Noumea','Australia',NULL,NULL,252.2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(149,'New Zealand','Wellington','Australia',68.8,72.53,441.7,40.93,59.07,73.81,270467,4971205,18,8.52,181.02),(150,'Nicaragua','Managua','Central America',31.41,44.56,39.7,44.44,55.56,NULL,121428,6393824,53,NULL,NULL),(151,'Niger','Niamey','Africa',NULL,NULL,1.9,NULL,NULL,NULL,1186408,22314743,19,NULL,NULL),(152,'Nigeria','Abuja','Africa',17.71,31,9.3,63.77,36.23,51.59,923768,200962000,218,NULL,55.65),(153,'Niue','Alofi','Australia',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(154,'Norfolk Island','Kingston','Australia',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(155,'North Korea','Pyongyang','Asia',NULL,NULL,NULL,NULL,NULL,NULL,120540,25450000,211,NULL,NULL),(156,'Northern Cyprus','North Nicosia','Europe',NULL,NULL,NULL,NULL,NULL,NULL,3355,351965,105,NULL,NULL),(157,'Northern Mariana Islands','Saipan','Australia',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(158,'Norway','Oslo','Europe',109.28,101.43,461.7,35.43,64.57,74.36,323808,5367580,17,8.77,175.19),(159,'Oman','Muscat','Asia',44.26,49.28,85.5,20.79,79.21,58.15,309500,4183841,14,9.08,167.09),(160,'Pakistan','Islamabad','Asia',16.78,21.98,31.8,44.08,55.92,60.59,803940,218983520,272,11.98,105.44),(161,'Palau','Melekeok','Australia',NULL,NULL,325.6,NULL,NULL,NULL,444,17900,40,NULL,NULL),(162,'Palestine','Jerusalem','Asia',38.93,54.54,NULL,43.59,56.41,NULL,6020,4976684,827,4.38,NULL),(163,'Panama','Panama City','Central America',47.27,54.16,137.9,47.19,52.81,59.93,74177,4158783,56,12.6,108.36),(164,'Papua New Guinea','Port Moresby','Australia',NULL,NULL,10.9,81.93,18.07,NULL,462840,8935000,19,NULL,NULL),(165,'Paraguay','Asuncion','South America',25.01,31.1,49.2,49.6,50.4,NULL,406752,7052983,17,NULL,NULL),(166,'Peru','Lima','South America',24.69,38.65,79.5,68.15,31.85,56.15,1285216,32162184,25,14.95,85.46),(167,'Philippines','Manila','Asia',20.84,37.63,38.4,42.16,57.84,67.47,300000,108420484,361,24.6,85.37),(168,'Pitcairn Islands','Adamstown','Australia',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(169,'Poland','Warsaw','Europe',33.45,40.04,306.3,28.5,71.5,61.01,312685,38386000,123,11.38,141.83),(170,'Portugal','Lisbon','Europe',42.48,49.52,399.2,29.63,70.37,71.88,92090,10276617,112,12.7,162.91),(171,'Puerto Rico','San Juan','North America',58.68,67.54,283.1,65.63,34.37,55.73,NULL,NULL,NULL,3.53,NULL),(172,'Qatar','Doha','Asia',66.83,64.04,232,11.86,88.14,73.3,11571,2740479,237,5.82,162.29),(173,'Republic of Congo','Brazzaville','Africa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(174,'Romania','Bucharest','Europe',30.5,35.31,196.9,27.64,72.36,55.06,238391,19405156,81,11.33,132.44),(175,'Russia','Moscow','Europe',39.61,39.21,280.6,41.12,58.88,57.59,17125242,146877088,9,10.77,102.31),(176,'Rwanda','Kigali','Africa',29.17,33.35,2.7,NULL,NULL,NULL,26338,12374397,470,NULL,NULL),(177,'Saint Barthelemy','Gustavia','North America',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(178,'Saint Helena','Jamestown','Africa',NULL,NULL,293.3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(179,'Saint Kitts and Nevis','Basseterre','North America',NULL,NULL,NULL,NULL,NULL,NULL,270,56345,209,NULL,NULL),(180,'Saint Lucia','Castries','North America',NULL,NULL,303.3,NULL,NULL,NULL,617,180454,292,NULL,NULL),(181,'Saint Martin','Marigot','North America',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(182,'Saint Pierre and Miquelon','Saint-Pierre','Central America',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(183,'Saint Vincent and the Grenadines','Kingstown','Central America',NULL,NULL,190.9,NULL,NULL,NULL,389,110520,284,NULL,NULL),(184,'Samoa','Apia','Australia',NULL,NULL,75.2,NULL,NULL,NULL,2831,199300,70,NULL,NULL),(185,'San Marino','San Marino','Europe',NULL,NULL,704.3,NULL,NULL,NULL,61,34641,568,NULL,NULL),(186,'Sao Tome and Principe','Sao Tome','Africa',NULL,NULL,NULL,NULL,NULL,NULL,1001,201784,202,NULL,NULL),(187,'Saudi Arabia','Riyadh','Asia',33.51,48.34,140.6,26.18,73.82,59.11,2149690,34218169,16,2.79,150.56),(188,'Senegal','Dakar','Africa',NULL,NULL,22.2,NULL,NULL,NULL,196722,16209125,82,NULL,NULL),(189,'Serbia','Belgrade','Europe',28.63,35.72,285.8,37.41,62.59,51.27,77474,6901188,89,18.94,116.3),(190,'Seychelles','Victoria','Africa',84.86,71.59,262.4,NULL,NULL,NULL,455,96762,213,NULL,NULL),(191,'Sierra Leone','Freetown','Africa',NULL,NULL,4,NULL,NULL,NULL,71740,7901454,110,NULL,NULL),(192,'Singapore','Singapore','Asia',58.99,81.1,411.4,30.57,69.43,70.84,723,5703600,7894,22.31,144.39),(193,'Sint Maarten','Philipsburg','North America',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(194,'Slovakia','Bratislava','Europe',33.82,44.46,220.1,29.22,70.78,60.02,49036,5450421,111,10.25,152.53),(195,'Slovenia','Ljubljana','Europe',45.43,53.43,406.1,21.07,78.93,64.58,20273,2084301,103,10.49,172.15),(196,'Solomon Islands','Honiara','Australia',NULL,NULL,13.4,NULL,NULL,NULL,28370,682500,24,NULL,NULL),(197,'Somalia','Mogadishu','Africa',27.04,38.68,11.3,58.5,41.5,NULL,637657,15181925,24,NULL,NULL),(198,'Somaliland','Hargeisa','Africa',NULL,NULL,NULL,NULL,NULL,NULL,176120,3508180,20,NULL,NULL),(199,'South Africa','Pretoria','Africa',40.58,42.87,107,77.49,22.51,64.14,1220813,58775022,48,3.93,131.97),(200,'South Georgia and South Sandwich Islands','King Edward Point','Antarctica',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(201,'South Korea','Seoul','Asia',44.87,78.18,NULL,28.02,71.98,81.97,100210,51780579,517,17.37,139.02),(202,'South Sudan','Juba','Africa',NULL,NULL,NULL,NULL,NULL,NULL,644329,12778250,20,NULL,NULL),(203,'Spain','Madrid','Europe',52.07,53.77,453.5,31.96,68.04,78.88,505990,46934632,93,9.37,169.82),(204,'Sri Lanka','Colombo','Asia',18.76,31.61,61.5,40.22,59.78,72.53,65610,21803000,332,31.14,85.16),(205,'Sudan','Khartoum','Africa',NULL,NULL,16.3,NULL,NULL,NULL,1839542,40782742,22,NULL,NULL),(206,'Suriname','Paramaribo','South America',34.98,43.14,184.7,NULL,NULL,NULL,163820,568301,4,NULL,NULL),(207,'Svalbard','Longyearbyen','Europe',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(208,'Swaziland','Mbabane','Africa',NULL,NULL,30.8,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(209,'Sweden','Stockholm','Europe',72.35,69.85,715,47.07,52.93,69.23,450295,10365705,23,9.27,175.95),(210,'Switzerland','Bern','Europe',123.01,122.4,680.9,21.6,78.4,72.44,41285,8586550,208,8.68,192.01),(211,'Syria','Damascus','Asia',21.38,25.31,153.8,66.46,33.54,NULL,185180,17070135,92,60.83,NULL),(212,'Taiwan','Taipei','Asia',28.49,61.37,591,15.65,84.35,86.71,36197,23604265,652,23.69,143.23),(213,'Tajikistan','Dushanbe','Asia',NULL,NULL,33.5,NULL,NULL,NULL,143100,9127000,64,NULL,NULL),(214,'Tanzania','Dar es Salaam','Africa',22.57,35.25,4,58.95,41.05,NULL,945087,55890747,59,NULL,NULL),(215,'Thailand','Bangkok','Asia',24.9,49.77,108.9,40.48,59.52,77.95,513120,66482792,130,22.26,101.88),(216,'The Gambia','Banjul','Africa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(217,'Timor-Leste','Dili','Asia',NULL,NULL,NULL,NULL,NULL,NULL,14919,1167242,78,NULL,NULL),(218,'Togo','Lome','Africa',NULL,NULL,10.6,NULL,NULL,NULL,56600,7538000,133,NULL,NULL),(219,'Tokelau','Atafu','Australia',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(220,'Tonga','Nuku\'alofa','Australia',NULL,NULL,97.7,NULL,NULL,NULL,720,100000,139,NULL,NULL),(221,'Trinidad and Tobago','Port of Spain','North America',49.83,53.7,NULL,73.19,26.81,54.73,5155,1363985,265,6.1,NULL),(222,'Tunisia','Tunis','Africa',14.95,27.04,123.6,41.88,58.12,57.18,163610,11722038,72,10.63,NULL),(223,'Turkey','Ankara','Europe',24.16,34.69,269.5,39.49,60.51,69.8,783562,83154997,106,7.81,127.1),(224,'Turkmenistan','Ashgabat','Asia',NULL,NULL,74.6,NULL,NULL,NULL,491210,5851466,12,NULL,NULL),(225,'Turks and Caicos Islands','Grand Turk','North America',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(226,'Tuvalu','Funafuti','Australia',NULL,NULL,59.3,NULL,NULL,NULL,26,10300,396,NULL,NULL),(227,'Uganda','Kampala','Africa',22.14,30.18,3.6,59,41,NULL,241551,40006700,166,NULL,NULL),(228,'Ukraine','Kyiv','Europe',26.42,33.18,259.9,48.85,51.15,52.33,603000,41902416,69,12.23,104.77),(229,'United Arab Emirates','Abu Dhabi','Asia',61.32,61.98,475.3,15.7,84.3,67.04,83600,9770529,117,5.29,156.67),(230,'United Kingdom','London','Europe',74.13,67.28,543.5,43.71,56.29,74.46,242910,66435600,274,10.09,162.71),(231,'United States','Washington','Central America',70.74,71.05,898,47.2,52.8,69.27,9833517,329470935,34,3.52,172.11),(232,'Uruguay','Montevideo','South America',47.41,51.04,291.4,53.81,46.19,66.28,NULL,NULL,NULL,16.34,125.98),(233,'US Minor Outlying Islands','Washington','Australia',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(234,'US Virgin Islands','Charlotte Amalie','North America',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(235,'Uzbekistan','Tashkent','Asia',20.17,26.01,62.9,NULL,NULL,NULL,447400,32653900,73,15.31,NULL),(236,'Vanuatu','Port-Vila','Australia',NULL,NULL,32.6,NULL,NULL,NULL,12281,304500,25,NULL,NULL),(237,'Vatican City','Vatican City','Europe',NULL,NULL,NULL,NULL,NULL,NULL,0,1000,2273,NULL,NULL),(238,'Venezuela','Caracas','South America',24.41,27.17,140.1,84.49,15.51,39.66,916445,32219521,35,133.29,NULL),(239,'Vietnam','Hanoi','Asia',19.59,38.34,187.7,45.35,54.65,57.7,331212,96208984,290,21.36,87.48),(240,'Wallis and Futuna','Mata-Utu','Australia',NULL,NULL,118.6,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(241,'Western Sahara','El-Aaiún','Africa',NULL,NULL,NULL,NULL,NULL,NULL,252120,567421,2,NULL,NULL),(242,'Yemen','Sanaa','Asia',NULL,NULL,37.2,NULL,NULL,NULL,455000,28915284,64,NULL,NULL),(243,'Zambia','Lusaka','Africa',22.07,31.72,8.2,NULL,NULL,NULL,752612,16405229,22,NULL,NULL),(244,'Zimbabwe','Harare','Africa',40.79,55.3,26.8,57.47,42.53,NULL,390757,15159624,39,NULL,NULL);
/*!40000 ALTER TABLE `country_quiz` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `players`
--

DROP TABLE IF EXISTS `players`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `players` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `score` int NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `refreshToken` text,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=123 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `players`
--

LOCK TABLES `players` WRITE;
/*!40000 ALTER TABLE `players` DISABLE KEYS */;
/*!40000 ALTER TABLE `players` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questions`
--

DROP TABLE IF EXISTS `questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `questions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `question_template_id` int NOT NULL,
  `country_1` varchar(30) DEFAULT NULL,
  `country_2` varchar(30) DEFAULT NULL,
  `answer` varchar(30) NOT NULL,
  `option_1` varchar(30) NOT NULL,
  `option_2` varchar(30) DEFAULT NULL,
  `option_3` varchar(30) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT '2021-04-22 08:36:41',
  `updated_at` datetime NOT NULL DEFAULT '2021-04-22 08:36:41',
  `is_saved` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`question_template_id`,`answer`,`option_1`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions`
--

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
/*!40000 ALTER TABLE `questions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questions_templates`
--

DROP TABLE IF EXISTS `questions_templates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `questions_templates` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` int NOT NULL,
  `question` varchar(255) NOT NULL,
  `relevant_coloumn` varchar(255) NOT NULL,
  `desc` tinyint(1) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT '2021-04-21 15:52:10',
  `updated_at` datetime NOT NULL DEFAULT '2021-04-21 15:52:10',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions_templates`
--

LOCK TABLES `questions_templates` WRITE;
/*!40000 ALTER TABLE `questions_templates` DISABLE KEYS */;
INSERT INTO `questions_templates` VALUES (1,1,'Which country is most populous?','Population',1,'2021-04-21 15:52:10','2021-04-21 15:52:10'),(2,1,'Which country is least populous?','Population',0,'2021-04-21 15:52:10','2021-04-21 15:52:10'),(3,1,'Which country is the largest by total area?','Area_km2',1,'2021-04-21 15:52:10','2021-04-21 15:52:10'),(4,1,'Which country is the smallest  by total area?','Area_km2',0,'2021-04-21 15:52:10','2021-04-21 15:52:10'),(5,1,'Which country is the most densely populated?','Density_popkm2',1,'2021-04-21 15:52:10','2021-04-21 15:52:10'),(6,1,'Which country is the least  densely populated?','Density_popkm2',0,'2021-04-21 15:52:10','2021-04-21 15:52:10'),(7,1,'Which country has the most cell phones per person?','Phones_per_1000',1,'2021-04-21 15:52:10','2021-04-21 15:52:10'),(8,1,'Which country has the most Health Care rate?','Health_Care_Index',1,'2021-04-21 15:52:10','2021-04-21 15:52:10'),(9,1,'Which country is the most Safest?','Safety_Index',1,'2021-04-21 15:52:10','2021-04-21 15:52:10'),(10,1,'Which country has the least cost of living?','Cost_of_Living_Index',0,'2021-04-21 15:52:10','2021-04-21 15:52:10'),(11,2,'What is the capital of X?','Capital',0,'2021-04-21 15:52:10','2021-04-21 15:52:10'),(12,2,'How many people live in X?','Population',0,'2021-04-21 15:52:10','2021-04-21 15:52:10'),(13,2,'In what continent is X?','Continent',0,'2021-04-21 15:52:10','2021-04-21 15:52:10'),(14,3,'Are there more people in X than in Y?','Population',0,'2021-04-21 15:52:10','2021-04-21 15:52:10'),(15,3,'Is X larger than Y?','Area_km2',0,'2021-04-21 15:52:10','2021-04-21 15:52:10'),(16,3,'Does X have a higher population density than Y?','Density_popkm2',0,'2021-04-21 15:52:10','2021-04-21 15:52:10'),(17,3,'Is the quality of life in X higher than the quality of life in Y?','Quality_of_Life_Index',0,'2021-04-21 15:52:10','2021-04-21 15:52:10'),(18,3,'Is the crime rate of X higher than the crime rate in Y?','Crime_Index',0,'2021-04-21 15:52:10','2021-04-21 15:52:10'),(19,3,'Are restaurants in X more expensive than restaurants in Y?','Restaurant_Price_Index',0,'2021-04-21 15:52:10','2021-04-21 15:52:10'),(20,3,'Are Price To Income Ratio in X is more greater then in Y?','Price_To_Income_Ratio',0,'2021-04-21 15:52:10','2021-04-21 15:52:10');
/*!40000 ALTER TABLE `questions_templates` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ratings`
--

DROP TABLE IF EXISTS `ratings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ratings` (
  `id` int NOT NULL AUTO_INCREMENT,
  `question_id` int NOT NULL,
  `rating` int NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ratings`
--

LOCK TABLES `ratings` WRITE;
/*!40000 ALTER TABLE `ratings` DISABLE KEYS */;
/*!40000 ALTER TABLE `ratings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'orm'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-18 17:10:58
