import React from "react";
import "./HeadStyle.css"; // Import your CSS file for styling
import { VscChromeClose } from "react-icons/vsc";
import { VscChromeMinimize } from "react-icons/vsc";
import { VscChromeMaximize } from "react-icons/vsc";
import { CgMoreVerticalAlt } from "react-icons/cg";

const Header = () => {
  const handleMinimize = () => {
    window.electronAPI.minimizeWindow();
  };

  const handleMaximize = () => {
    window.electronAPI.maximizeWindow();
  };

  const handleClose = () => {
    window.electronAPI.closeWindow();
  };

  return (
    <header className="app-header">
      <div className="logo">
        <img
          className="l-mark"
          src="images/hd-logo-mark.png"
          alt="Tudlin_logo"
        />
        <img className="l-txt" src="images/hd-logo-txt.png" alt="Tudlin_logo" />
      </div>

      <div className="header-controls">
        <div className="control-buttons">
          <button onClick={handleMinimize}>
            <VscChromeMinimize />
          </button>
          <button onClick={handleMaximize}>
            <VscChromeMaximize />
          </button>
          <button onClick={handleClose}>
            <VscChromeClose />
          </button>
        </div>
        {/* <!-- Profile dropdown --> */}
        {/* <div class="relative ml-3">
          <div>
            <CgMoreVerticalAlt className="more text-lg" />
          </div>

          <div
            class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu-button"
            tabindex="-1"
          >
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700"
              role="menuitem"
              tabindex="-1"
              id="user-menu-item-0"
            >
              Your Profile
            </a>
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700"
              role="menuitem"
              tabindex="-1"
              id="user-menu-item-1"
            >
              Settings
            </a>
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700"
              role="menuitem"
              tabindex="-1"
              id="user-menu-item-2"
            >
              Sign out
            </a>
          </div>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
