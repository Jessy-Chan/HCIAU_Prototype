import React from 'react';
import { Outlet } from 'react-router-dom';

const AboutLayout = () => {
  return (
    <div className="about-section">
      <Outlet />
    </div>
  );
};

export default AboutLayout;
