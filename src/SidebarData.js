import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import StorefrontIcon from '@material-ui/icons/Storefront';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

export const SidebarData = [
  {
    title: 'GROUP TASK',
    path: '/overview',
    icon: <PeopleIcon />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'All',
        path: '/overview/users',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Management',
        path: '/overview/revenue',
      },
      {
        title: 'Sale',
        path: '/overview/revenue',
      },
      {
        title: 'Operations',
        path: '/overview/revenue',
      },
      {
        title: 'Marketing',
        path: '/overview/revenue',
      },
      {
        title: 'Human Resources',
        path: '/overview/revenue',
      },
      {
        title: 'Customer Servie',
        path: '/overview/revenue',
      },
      {
        title: 'New Category',
        path: '/overview/revenue',
        icon:< AddCircleOutlineIcon/>
      }
    ]
  },
  {
    title: 'MY TASKS',
    path: '/reports',
    icon: <DashboardIcon />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Reports',
        path: '/reports/reports1',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Reports 2',
        path: '/reports/reports2',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
    ]
  },
  {
    title: 'IN PROGRESS',
    path: '/products',
    icon: <RadioButtonCheckedIcon />
  },
  {
    title: 'DUE SOON',
    path: '/team',
    icon: <WhatshotIcon />
  },
  {
    title: 'COMPLETED',
    path: '/messages',
    icon: <CheckCircleIcon />,

  },
  {
    title: 'MARKET PLACE',
    path: '/support',
    icon: <StorefrontIcon  />
  },

  {
    title: 'NEW TASK',
    path: '/support',
    icon: <AddCircleOutlineIcon/>
  }
];
