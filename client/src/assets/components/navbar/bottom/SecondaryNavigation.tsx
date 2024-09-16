// SecondaryNavigation.tsx
import React from 'react';
import './SecondaryNavigation.css';
import { FaTag, FaUser } from 'react-icons/fa';

const SecondaryNavigation: React.FC = () => {
  return (
    <nav className="secondary-nav">
      <ul>
        <li>Home</li>
        <li>Browse Coupons</li>
        <li>Stores</li>
        <li>Categories</li>
        <li>News</li>
        <li>Contact</li>
      </ul>
      <div className="icon-container">
        <FaTag />
        <FaUser />
      </div>
    </nav>
  );
};

export default SecondaryNavigation;
