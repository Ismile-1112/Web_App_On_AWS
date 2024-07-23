import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { FaUserAlt } from "react-icons/fa";

function UserDropdown() {
  return (
    <Menu>
      <MenuButton>
          <span className="border p-2 border-gray-300 text-zomato-400 rounded-full">
            <FaUserAlt />
          </span></MenuButton>
      <MenuItems>
        <MenuItem>
          <button>Sign In</button>
        </MenuItem>
        <MenuItem>
          <button>Sign Up</button>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
};

export default UserDropdown;