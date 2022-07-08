import React from 'react';
import * as FaIcons from 'react-icons/fa';

export const SidebarData = [
  {
    title: 'DASHBOARD',
    path: '/studentpage/dashboard',
    icon: <FaIcons.FaUser />,
    cName: 'nav-text'
  },
  {
    title: 'MY TASKS',
    path: '/studentpage/mytasks',
    icon: <FaIcons.FaOutdent />,
    cName: 'nav-text'
  },
  {
    title: 'COURSES',
    path: '/studentpage/courses',
    icon: <FaIcons.FaClipboardList />,
    cName: 'nav-text'
  },
  {
    title: 'BOOKS',
    path: '/studentpage/books',
    icon: <FaIcons.FaBookOpen />,
    cName: 'nav-text'
  },
  {
    title: 'TIME TABLE',
    path: '/studentpage/timetable',
    icon: <FaIcons.FaBorderAll />,
    cName: 'nav-text'
  },
  {
    title: 'SYLLABUS',
    path: '/studentpage/syllabus',
    icon: <FaIcons.FaListAlt />,
    cName: 'nav-text'
  },
  {
    title: 'QUIZ',
    path: '/studentpage/quiz',
    icon: <FaIcons.FaListOl />,
    cName: 'nav-text'
  },
  {
    title: 'BUILD RESUME',
    path: '/studentpage/buildresume',
    icon: <FaIcons.FaFileInvoice />,
    cName: 'nav-text'
  },
];