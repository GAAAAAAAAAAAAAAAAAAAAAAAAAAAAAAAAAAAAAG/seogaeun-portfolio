import React from 'react';

export default function Header() {
  return (
    <header className="header fade-in">
      <div className="container header-container">
        <div className="logo">
          SEO GAEUN
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </header>
  );
}
