import React from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <ul className={styles.nav}>
        <li
          className={styles.nav_item}
          style={{ marginRight: "auto", fontSize: "24px" }}
        >
          blog<span style={{ color: "red" }}>HUB</span>
        </li>
        <Link href={"/"}>
          <a>
            <li className={styles.nav_item}>Home</li>
          </a>
        </Link>
        <Link href={"/about"}>
          <a>
            <li className={styles.nav_item}>About</li>
          </a>
        </Link>
        <Link href={"/contact"}>
          <a>
            <li className={styles.nav_item}>Contact</li>
          </a>
        </Link>
        <Link href={"/blog"}>
          <a>
            <li className={styles.nav_item}>Blog</li>
          </a>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
