-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 30, 2021 at 03:15 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nsd`
--

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `first_name` varchar(40) COLLATE latin7_general_cs NOT NULL,
  `middle_name` varchar(40) COLLATE latin7_general_cs NOT NULL,
  `last_name` varchar(40) COLLATE latin7_general_cs NOT NULL,
  `father_name` varchar(40) COLLATE latin7_general_cs NOT NULL,
  `mother_name` varchar(40) COLLATE latin7_general_cs NOT NULL,
  `dob` date NOT NULL,
  `emp_id` varchar(40) COLLATE latin7_general_cs NOT NULL,
  `aadhar_no` varchar(40) COLLATE latin7_general_cs NOT NULL,
  `pan_no` varchar(40) COLLATE latin7_general_cs NOT NULL,
  `gender` varchar(20) COLLATE latin7_general_cs NOT NULL,
  `lang` varchar(30) COLLATE latin7_general_cs NOT NULL,
  `phone_no` varchar(40) COLLATE latin7_general_cs NOT NULL,
  `address` varchar(100) COLLATE latin7_general_cs NOT NULL,
  `email` varchar(40) COLLATE latin7_general_cs NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin7 COLLATE=latin7_general_cs;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`first_name`, `middle_name`, `last_name`, `father_name`, `mother_name`, `dob`, `emp_id`, `aadhar_no`, `pan_no`, `gender`, `lang`, `phone_no`, `address`, `email`) VALUES
('Samim', '', 'Aktar', 'mrx', 'msy', '2021-12-29', '01', '234567890987', '345678987654323456', 'Male', 'Indian', '2345678934', 'Kolkata', 'samimaktar29@gmail.com'),
('Tejas', 'k', 'Gowda', 'mrx', 'msy', '2021-12-28', '02', '123456789000', '1234567890', 'Male', 'Indian', '8765432109', 'Mysuru', 'tejas@gmail.com'),
('Muthanna', '', 'Ne', 'mrx', 'msy', '2021-12-28', '03', '123456789000', '1234567890', 'Male', 'Indian', '7654323456', 'Mysuru', 'muthanna@gmail.com'),
('Varshini', '', 'r', 'mrx', 'msy', '2021-12-28', '04', '123456789000', '1234567890', 'Female', 'Indian', '6543234567', 'Mysuru', 'varshini@gmail.com'),
('Ram', '', 'Rahim', 'Mrx', 'Msy', '2021-12-29', '06', '123456789000', '1234567890', 'Male', 'Indian', '5678985432', 'Kolkata', 'ram06@gamil.com'),
('Ram', '', 'Rahim', 'Mrx', 'Msy', '2021-12-29', '07', '123456789000', '1234567890', 'Male', 'Indian', '8765434567', 'Kolkata', 'ram@gamil.com'),
('Nandini', 'fghj', 'S', 'mrx', 'msy', '2021-12-28', '34567', '123456789000', '1234567890', 'Male', 'Indian', '8907654321', 'Bangalore', 'nandini@gmail.com'),
('Nowshad', 'fghj', 'Sk', 'mrx', 'msy', '2021-12-28', '5786', '123456789012', '1234567890', 'Male', 'Indian', '8907654321', 'Kolkata', 'nowshad.sk@arisglobal.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`emp_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
