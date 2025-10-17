import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";
import NavIcon from "../../assets/logo.png";

const Navigate = () => {
  const { isAuthenticated, hasPurchasedCoursed, logout } =
    useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

const onLogout = () => {
if(window.confirm("Are you sure you want to logout?")) {
  logout();
alret("You have been logged out successfully.");
  navigate("/Login");
};

export default Navigate;
