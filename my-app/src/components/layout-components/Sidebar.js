import React from 'react'
import NavItem from './NavItem';
import { HiUserAdd } from "react-icons/hi";
import { FaMoneyCheck } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaListAlt } from "react-icons/fa";
import { PiSealWarningFill } from "react-icons/pi";
import { FaRegAddressCard } from "react-icons/fa6";
import useAuth from '../../hooks.js/useAuth';

const ROLES = {
  user: 2001,
  manager: 1984,
  admin: 5150
}

const Sidebar = () => {

  const { auth } = useAuth();

  console.log(auth.roles.find(role => [ROLES.admin].includes(role)));
  return (
    <div className='side-bar'>

      <NavItem
        icon={<FaMoneyCheck className='sidebar-icon' color='white' />}
        name={'Çek Okuma'}
        link={'checkscan'}
        roles={auth.roles}
        allowedRoles={[ROLES.admin, ROLES.manager, ROLES.user]}
      />

      <NavItem
        icon={<HiUserAdd className='sidebar-icon' color='white' />}
        name={'Kullanıcı Ekle'}
        link={'add-user'}
        roles={auth.roles}
        allowedRoles={[ROLES.admin, ROLES.manager]}
      />

      <NavItem
        icon={<FaRegAddressCard className='sidebar-icon' color='white' />}
        name={'Müşteri Ekle'}
        link={'add-customer'}
        roles={auth.roles}
        allowedRoles={[ROLES.admin, ROLES.manager]}
      />

      <NavItem
        icon={<FaDatabase className='sidebar-icon' color='white' />}
        name={'Veri Yönetimi'}
        link={'data-management'}
        roles={auth.roles}
        allowedRoles={[ROLES.admin, ROLES.user, ROLES.manager]}
      />

      <NavItem
        icon={<FaListAlt className='sidebar-icon' color='white' />}
        name={'Personel Listesi'}
        link={'user-list'}
        roles={auth.roles}
        allowedRoles={[ROLES.admin, ROLES.manager]}
      />

    </div>
  )
}

export default Sidebar
