import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import "./header.css";
import { Button } from "@chakra-ui/react";

function Header() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3124/3124925.png"
            alt="logo"
            width="40px"
          />
          <p>Color-App</p>
        </div>
        <div className="menu">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/my-groups">
              <li>My Groups</li>
            </Link>
          </ul>
          <Link to="/create" role={"button"}>
            <Button colorScheme="teal" variant="outline">
              Create Group 
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
