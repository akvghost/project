import React from "react";

function Navbar() {
  return (
    <div>
      <nav>
        {" "}
        <ul>
          <li>
            <a href='default.asp'>Home</a>
          </li>
          <li>
            <a href='news.asp'>News</a>
          </li>
          <li>
            <a href='contact.asp'>Contact</a>
          </li>
          <li>
            <a href='about.asp'>About</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
