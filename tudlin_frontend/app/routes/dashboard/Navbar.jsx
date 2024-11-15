import React from "react";
import * as Ariakit from "@ariakit/react";
import "./NavStyle.css";
import { FaUserCircle } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
  const HandleSchool = () => {
    window.location.href = "/school";
  };

  return (
    <div className="app-nav">
      <div className="app-navigation-bar">
        <div className="breadcrumb">
          <div className="schl-profile flex items-center font-bold text-white">
            <MdOutlineMenu className="text-white" color="#fff" size={26} />
            <div className="schl-name">
              Morgan International Community School
            </div>
          </div>
        </div>
        <div className="header-controls">
          <div className="control-buttons text-white">
            <div className="dropmenu">
              <Ariakit.MenuProvider>
                <Ariakit.MenuButton className="button">
                  <IoIosAddCircle size={25} />
                </Ariakit.MenuButton>
                <Ariakit.Menu gutter={8} className="menu">
                  <Ariakit.MenuItem
                    className="menu-item"
                    onClick={HandleSchool}
                  >
                    Manage School
                  </Ariakit.MenuItem>
                  <Ariakit.MenuSeparator className="separator" />
                  <Ariakit.MenuItem className="menu-item">
                    Manage Classes
                  </Ariakit.MenuItem>
                  {/* <Ariakit.MenuSeparator className="separator" /> */}
                  <Ariakit.MenuItem className="menu-item">
                    Manage Subjects
                  </Ariakit.MenuItem>
                  <Ariakit.MenuSeparator className="separator" />
                  <Ariakit.MenuItem className="menu-item">
                    Manage Students
                  </Ariakit.MenuItem>
                </Ariakit.Menu>
              </Ariakit.MenuProvider>
            </div>

            <button>
              <MdNotifications size={25} />
            </button>
            <button>
              <FaUserCircle size={25} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
