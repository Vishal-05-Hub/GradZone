import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Add Student',
    path: '/adminpage/addstudent',
    icon: <FaIcons.FaUser />,
    cName: 'nav-text'
  },
  {
    title: 'Students List',
    path: '/adminpage/studentlist',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
];