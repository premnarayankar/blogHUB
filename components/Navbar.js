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
            <Link href={"/createblog"}>
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

// import React from "react";
// import Link from "next/link";
// import styles from "../styles/Navbar.module.css";

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-info">
//       <div className="container">

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNavAltMarkup"
//           aria-controls="navbarNavAltMarkup"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link href={"/"}>
//                 <a className="nav-link" aria-current="page">
//                   Home
//                 </a>
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link href={"/about"}>
//                 <a className="nav-link" aria-current="page">
//                   About
//                 </a>
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link href={"/createblog"}>
//                 <a className="nav-link" aria-current="page">
//                   Create Blog
//                 </a>
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link href={"/blog"}>
//                 <a className="nav-link" aria-current="page">
//                   All Blogs
//                 </a>
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
