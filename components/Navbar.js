import React from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavbarMain() {
  return (
    <Navbar bg="info" expand="lg">
      <Container fluid>
        <Link href={"/"}>
          <Navbar.Brand className={`${styles.logo}  me-2`}>
            Andro BLOG<span>HUB</span>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 align-items-center"
            style={{ minHeight: "100px" }}
          >
            <Link href={"/"}>
              <a className="nav-link">Home</a>
            </Link>
            <Link href={"/about"}>
              <a className="nav-link">About</a>
            </Link>
            <Link href={"/Createblog"}>
              <a className="nav-link">Create Blog</a>
            </Link>
            <Link href={"/blog"}>
              <a className="nav-link">All blogs</a>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMain;
