import React from 'react'
import NavItem from './NavItem';
import { HiUserAdd } from "react-icons/hi";
import { FaMoneyCheck } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaListAlt } from "react-icons/fa";
import { PiSealWarningFill } from "react-icons/pi";
import useAuth from '../../hooks.js/useAuth';

const ROLES = {
  user: 2001,
  manager: 1984,
  admin: 5150
}

const Sidebar = () => {
  

  //SideBardaki navagation itemlerinin isimleri
  const navNames = ['Çek Okuma', 'Kullanici Ekle', 'Veri Yonetimi', 'Personel Listesi', 'Log Kontrol'];

  //NavItem router yollari(path) => App.js deki route complarininda verilen yollarla ayni olmai!
  const navLinks = ['checkscan', 'add-user', 'data-management', 'user-list', 'logs']

  //SideBardaki navagation itemlerinin iconlari
  const navIcons = [
    <FaMoneyCheck className='sidebar-icon' color='white' />,
    <HiUserAdd className='sidebar-icon' color='white' />,
    <FaDatabase className='sidebar-icon' color='white' />,
    <FaListAlt className='sidebar-icon' color='white' />,
    <PiSealWarningFill className='sidebar-icon' color='white' />
  ]

  //Dongu ile NavItem Componentlerinin olusturulmasi
  const navItems = navNames.map((name, index) => {

    return <NavItem
      key={index}
      name={name}
      icon={navIcons[index]}
      link={navLinks[index]}
    />
  });

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
        name={'Kullanici Ekle'}
        link={'add-user'}
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

      <NavItem
        icon={<PiSealWarningFill className='sidebar-icon' color='white' />}
        name={'Log Kontrol'}
        link={'logs'}
        roles={auth.roles}
        allowedRoles={[ROLES.admin]}
      />

    </div>
  )
}

export default Sidebar
