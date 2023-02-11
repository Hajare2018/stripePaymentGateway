-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 10, 2023 at 12:14 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hotel_booking`
--

-- --------------------------------------------------------

--
-- Table structure for table `hotelbooking`
--

CREATE TABLE `hotelbooking` (
  `id` int(11) NOT NULL,
  `room_type` varchar(20) NOT NULL,
  `amount` varchar(6) NOT NULL,
  `booking_date` varchar(20) NOT NULL,
  `email` varchar(20) NOT NULL,
  `address` varchar(100) NOT NULL,
  `country` varchar(20) NOT NULL,
  `state` varchar(20) DEFAULT NULL,
  `city` varchar(20) NOT NULL,
  `pin` varchar(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hotelbooking`
--

INSERT INTO `hotelbooking` (`id`, `room_type`, `amount`, `booking_date`, `email`, `address`, `country`, `state`, `city`, `pin`) VALUES
(1, 'deilux room', '2000', '12-12-2022', 'rp@gmail.com', 'bpl', 'india', 'mp', 'bpl', '123456'),
(2, 'deilux room', '2000', '12-12-2022', 'rp@gmail.com', 'bpl', 'india', 'mp', 'bpl', '123456'),
(3, 'deilux room', '2000', '12-05-2022', 'r@gmail.com', 'bpl', 'india', 'mp', 'bpl', '123456'),
(4, '', '1000', '2022-12-30T18:30:00.', 'test@gmail.com', 'bpl', 'IN', 'BR', 'Bagaha', '847595'),
(5, 'Delux Room', '1000', '2022-12-30T18:30:00.', 'testing@gmail.com', 'sehore', 'IN', 'HP', 'Chaupal', '847585');

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `session_id` varchar(100) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `ref_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `payment`
--

INSERT INTO `payment` (`session_id`, `status`, `ref_id`) VALUES
('cs_test_a1y7RNnD117gNJHLJi9oWTQy49CsQ3MaUhHmw05GQRI1ZKY8FMYoW3DWPX', 'pending', 1),
('cs_test_a1yNTst8FZchz6yKIBKJ4ley40gNXN63Z61bpUYP0mKdebPt91GekvHLhf', 'pending', NULL),
('cs_test_a1Iuv5XOv3vxflwJEtY00JI0Lqh1nraylIrhinkLHintRcoa95ta48Hph6', 'pending', NULL),
('cs_test_a1BpLkF5Ct8nPPDJ68Ix3RcIln0IDls5fj5p2gXz9eymgAFSMPoA56E8sB', 'pending', NULL),
('cs_test_a1WfhQdAdpPi14TER9SIr8SvBDANdzwAgKaoQGM2y8P5D1ED7y4aJkyir8', 'pending', NULL),
('cs_test_a15zVrFtDf9BWe694OPptA7XiGLAJaP7659UGLaiPHpEqf1CKZqKar4SMt', 'pending', NULL),
('cs_test_a1o94uHLEji42rm8ZIr1kj8VJ22hjqrz8KiEvnJiUXTdNXfPdtYHs8GPOW', 'complete', 1),
('cs_test_a1i5cQKCmtu1QjP0DCJ1SRKiz6m8k2RNmGl8gL78mnFZRXnmNPkOBhGv7N', 'complete', 1),
('cs_test_a1yoO861JtLzDVOKwTXoaTzfZy8e9ER7iAHoj8Jkfkl3ue7BP9ljFOqSX5', 'complete', 1),
('cs_test_a1TYWbRTjKBO0eeOooeyd9IrlgZyplQkx3RWwbHjBjSkm23xXnBPJl2vr8', 'complete', 1),
('cs_test_a1u7nGXc17g4rAE7ebZ5D7glrDBkGU962m4cHBlU3pLoPOTAucS7INkliB', 'complete', 1),
('cs_test_a15CIfCklGiRh58hABMWw3KCv91xnyq6u0LjcojG94dYxA1pOsG11XgJTi', 'complete', 1),
('cs_test_a1rquZ1G6e4iikQviEaypuO51TUMoA37TykXTlfOFhXMIqofM3ks9FBFNC', 'complete', 1),
('cs_test_a1ze1qdAGIHffcbRTWhvAFhkZtNC1aY0U3HfhZMIJHl9currdY2u8K6Pfm', 'complete', 1),
('cs_test_a16xueiLYjRCkH4LgnMK3lf7xwoLOLkjSMfKHxENUToLPp66CJK17O0zMT', 'complete', 1),
('cs_test_a1HhxDIGg4wDrWopsGKkvV91RFeUl5ENwk7DfPvtzpBgzZt04Bhj3KnsUG', 'complete', 1),
('cs_test_a1lBXhTtgzoHFv2uKkNrM006ia2R5gEYlPrcAAZyVWjx8VGMkfGX7WQUSd', 'complete', 1);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `booking_no` int(11) NOT NULL,
  `room_type` varchar(20) DEFAULT NULL,
  `booking_date` varchar(20) DEFAULT NULL,
  `email` varchar(20) DEFAULT NULL,
  `address` varchar(20) DEFAULT NULL,
  `country` varchar(20) DEFAULT NULL,
  `state` varchar(20) DEFAULT NULL,
  `city` varchar(20) DEFAULT NULL,
  `pin` int(6) DEFAULT NULL,
  `staus` varchar(20) DEFAULT NULL,
  `total` int(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`booking_no`, `room_type`, `booking_date`, `email`, `address`, `country`, `state`, `city`, `pin`, `staus`, `total`) VALUES
(1, 'delux', '12-12-2022', 'rp@gmail.com', 'bpl', 'india', 'mp', 'bpl', 123456, 'active', 2000);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `hotelbooking`
--
ALTER TABLE `hotelbooking`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD KEY `ref_id` (`ref_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`booking_no`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `hotelbooking`
--
ALTER TABLE `hotelbooking`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `booking_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `payment`
--
ALTER TABLE `payment`
  ADD CONSTRAINT `payment_ibfk_1` FOREIGN KEY (`ref_id`) REFERENCES `hotelbooking` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
