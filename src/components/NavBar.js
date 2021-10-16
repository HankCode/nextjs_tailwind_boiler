import React from 'react';

function NavBar() {
  return (
    <nav className='bg-gray-200 py-6 w-full'>
      <div className='max-w-6xl flex items-center justify-between mx-auto'>
        <h3 className='uppercase tracking-wider font-bold'>Brand name</h3>
        <div className='sm:flex text-lg font-poppins sm:gap-x-4 uppercase tracking-wide'>
          <li>Home</li>
          <li>Services</li>
          <li>About</li>
          <li>Contact</li>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
