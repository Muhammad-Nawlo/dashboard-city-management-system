import { Link } from 'react-router-dom';

import {
  AppstoreAddOutlined,
  CustomerServiceOutlined,
  DashboardOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const AppNav = ({ translate }) => [
  // {
  //   key: 'dashboard',
  //   icon: <DashboardOutlined />,
  //   label: <Link to={'/'}>{translate('dashboard')}</Link>,
  // },
  {
    key: 'user',
    icon: <UserOutlined />,
    label: <Link to={'/user'}>{translate('user')}</Link>,
  },
  {
    key: 'service',
    icon: <CustomerServiceOutlined />,
    label: <Link to={'/service'}>{translate('service')}</Link>,
  },
  {
    label: translate('Restaurant Management'),
    key: 'restaurant-management',
    icon: <AppstoreAddOutlined />,
    children: [
      {
        key: 'restaurant',
        label: <Link to={'/restaurant'}>{translate('restaurant')}</Link>,
      },
      {
        key: 'category',
        label: <Link to={'/category'}>{translate('category')}</Link>,
      },
      {
        key: 'item',
        label: <Link to={'/item'}>{translate('item')}</Link>,
      },
      {
        key: 'order',
        label: <Link to={'/order'}>{translate('order')}</Link>,
      },
    ],
  },
];

export default AppNav;
