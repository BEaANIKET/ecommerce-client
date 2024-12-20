import { useState } from 'react';
import { Drawer, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Link from 'next/link';
import "./DrawerEl.css";

const CustomDrawer = ({ toggleDrawer, isDrawerOpen }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const navigationLinks = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    
    { label: 'Book Pandit', href: '/book-pandit' },
    { label: 'Offers', href: '/offers' },
    { label: 'Cart', href: '/cart' },

  
    { label: 'Account', href: '/account' },
    { label: 'Logout', href: '/logout' },
  ];

  return (
    <Drawer
      className="cd-custom-drawer"
      placement="left"
      onClose={toggleDrawer}
      open={isDrawerOpen}
      width={280}
      closeIcon={<span className="cd-close-icon">&times;</span>}
      aria-label="Navigation Drawer"
    >
      <div className="cd-drawer-content">
        <div className="cd-search-container">
          <SearchOutlined className="cd-search-icon" />
          <Input
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="cd-search-input"
            aria-label="Search products"
          />
        </div>
        <ul className="cd-drawer-menu">
          {navigationLinks.map((item) => (
            <li key={item.label} className="cd-menu-item">
              <Link href={item.href} onClick={toggleDrawer} className="cd-menu-link">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Drawer>
  );
};

export default CustomDrawer;
