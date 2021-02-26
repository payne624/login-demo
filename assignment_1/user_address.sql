-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 24, 2021 at 11:54 AM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `user_address`
--

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `name` varchar(25) NOT NULL,
  `user_id` varchar(25) NOT NULL,
  `password` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `name`, `user_id`, `password`, `address`) VALUES
(1, 'Richard J. Huff', 'RichardJHuff@rhyta.com', '12345678', '307 Hillside Drive\r\nLafayette, LA 70506'),
(3, 'Melody K. Thompson', 'MelodyKThompson@rhyta.com', '12345678', '2208 Woodbridge Lane\r\nDearborn, MI 48124'),
(4, 'Katherine L. Lee', 'KatherineLLee@teleworm.us', '12345678', '3266 Marie Street\r\nHurlock, MD 21643'),
(5, 'will smith', 'wswill26@gmail.com', '12345', ''),
(12, 'MaxPayne', 'paynemax624@gmail.com', 'admin', 'Rockstar+Headquarters'),
(13, 'MaxPayne', 'paynemax624@gmail.com', '12345', 'Rockstar+Headquarters'),
(14, 'MaxPayne', 'paynemax624@gmail.com', '12345', 'Rockstar+Headquarters'),
(15, 'NavneetMurmu', 'paynemax624@gmail.com', '12345', 'Rockstar+Headquarters'),
(16, 'Max+Payne', 'paynemax624@gmail.com', '12345', 'Rockstar+Headquarters'),
(19, 'Navneet+Murmu', 'paynemax624@gmail.com', '12345', 'Rockstar+Headquarters'),
(20, 'Navneet+Murmu', 'paynemax624@gmail.com', 'admin', 'RockstarHeadquarters');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
