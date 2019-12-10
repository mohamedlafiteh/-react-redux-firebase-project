import React from "react";
import SignedInLinks from "./SignedInLinks";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className='nav-wrapper grey darken-3 '>
      <div className='container'>
        <Link className='brand-logo' to='/'>
          React-Redux
        </Link>
        <SignedInLinks />
      </div>
    </nav>
  );
}
