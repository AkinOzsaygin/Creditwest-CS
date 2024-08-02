import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom';

const NavItem = ({ name, icon, link, roles, allowedRoles }) => {

  const allowed = useRef(roles.find(role => allowedRoles.includes(role)));

  console.log(allowed.current);

  return (
    <>
      {allowed.current &&
        <NavLink
          className='nav-item'
          to={link}>
          {icon}
          <span className='nav-item-text'>{name}</span>
        </NavLink>}
    </>
  )
}

export default NavItem
