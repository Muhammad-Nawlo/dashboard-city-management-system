import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Drawer, Layout, Menu } from 'antd';

import { useAppContext } from '@/context/appContext';

import useLanguage from '@/locale/useLanguage';
import logoIcon from '@/style/images/logo-icon.svg';

import useResponsive from '@/hooks/useResponsive';

import {
  BankOutlined,
  BarsOutlined,
  CarOutlined,
  CreditCardOutlined,
  DashboardOutlined,
  IdcardOutlined,
  LayoutOutlined,
  MenuOutlined,
  OrderedListOutlined,
  PayCircleOutlined,
  PullRequestOutlined,
  SettingOutlined,
  ShopOutlined,
  TableOutlined,
  UnorderedListOutlined,
  UsergroupAddOutlined,
  UserOutlined,
  VideoCameraAddOutlined,
  WindowsOutlined,
} from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { selectLangDirection } from '@/redux/translate/selectors';
import { selectCurrentAdmin } from '@/redux/auth/selectors.js';

const { Sider } = Layout;

export default function Navigation() {
  const { isMobile } = useResponsive();

  return isMobile ? <MobileSidebar /> : <Sidebar collapsible={false} />;
}

function Sidebar({ collapsible, isMobile = false }) {
  let location = useLocation();
  const currentAdmin = useSelector(selectCurrentAdmin);

  const { state: stateApp, appContextAction } = useAppContext();
  const { isNavMenuClose } = stateApp;
  const { navMenu } = appContextAction;
  const [showLogoApp, setLogoApp] = useState(isNavMenuClose);
  const [currentPath, setCurrentPath] = useState(location.pathname.slice(1));

  const translate = useLanguage();
  const navigate = useNavigate();

  let items = [
    // {
    //   key: 'dashboard',
    //   icon: <DashboardOutlined />,
    //   label: <Link to={'/'}>{translate('dashboard')}</Link>,
    //   role: ['admin'],
    // },
    {
      key: 'user',
      icon: <UserOutlined />,
      label: <Link to={'/user'}>{translate('user')}</Link>,
      role: ['admin'],

    },
    {
      key: 'service',
      icon: <SettingOutlined />,
      label: <Link to={'/service'}>{translate('service')}</Link>,
      role: ['admin'],
    },
    {
      key: 'ad',
      icon: <VideoCameraAddOutlined />,
      label: <Link to={'/ad'}>{translate('Ad')}</Link>,
      role: ['admin'],
    },
    // {
    //   key: 'restaurant',
    //   label: <Link to={'/restaurant'}>{translate('restaurant')}</Link>,
    //   icon: <BankOutlined />,
    //   role: ['restaurant-management'],
    //
    // },
    {
      key: 'category',
      label: <Link to={'/category'}>{translate('restaurant category')}</Link>,
      icon: <WindowsOutlined />,
      role: ['restaurant-management'],
    },
    {
      key: 'item',
      label: <Link to={'/item'}>{translate('item')}</Link>,
      icon: <MenuOutlined />,
      role: ['restaurant-management'],
    },
    {
      key: 'order',
      label: <Link to={'/order'}>{translate('restaurant order')}</Link>,
      icon: <OrderedListOutlined />,
      role: ['restaurant-management'],
    },
    // {
    //   key: 'agent',
    //   label: <Link to={'/agent'}>{translate('agent')}</Link>,
    //   icon: <UsergroupAddOutlined />,
    //   role: ['admin'],
    // },
    {
      key: 'property-type',
      label: <Link to={'/property-type'}>{translate('property type')}</Link>,
      icon: <BarsOutlined />,
      role: ['realestate-management'],
    },
    {
      key: 'property-special-type',
      label: <Link to={'/property-special-type'}>{translate('property special type')}</Link>,
      icon: <TableOutlined />,
      role: ['realestate-management'],
    },
    {
      key: 'property',
      label: <Link to={'/property'}>{translate('property')}</Link>,
      icon: <ShopOutlined />,
      role: ['realestate-management'],
    },
    {
      key: 'rental',
      label: <Link to={'/rental'}>{translate('porperty rental')}</Link>,
      icon: <LayoutOutlined />,
      role: ['realestate-management'],
    },
    {
      key: 'sale',
      label: <Link to={'/sale'}>{translate('sale')}</Link>,
      icon: <PayCircleOutlined />,
      role: ['realestate-management'],
    },
    {
      key: 'payment',
      label: <Link to={'/payment'}>{translate('payment')}</Link>,
      icon: <CreditCardOutlined />,
      role: ['realestate-management'],
    },
    {
      key: 'maintenance-request',
      label: <Link to={'/maintenance-request'}>{translate('maintenance request')}</Link>,
      icon: <PullRequestOutlined />,
      role: ['realestate-management'],

    },
    {
      key: 'car-type',
      label: <Link to={'/car-type'}>{translate('car type')}</Link>,
      icon: <UnorderedListOutlined />,
      role: ['car-management'],

    },
    {
      key: 'car',
      label: <Link to={'/car'}>{translate('car')}</Link>,
      icon: <CarOutlined />,
      role: ['car-management'],

    },
    {
      key: 'car-rental',
      label: <Link to={'/car-rental'}>{translate('car rental')}</Link>,
      icon: <IdcardOutlined />,
      role: ['car-management'],
    },
  ];

// filter depends on role
  items = items.map(function(item) {
    if (item?.role.includes(currentAdmin.user.role.slug))
      return item;
  });


  useEffect(() => {
    if (location)
      if (currentPath !== location.pathname) {
        if (location.pathname === '/') {
          setCurrentPath('dashboard');
        } else setCurrentPath(location.pathname.slice(1));
      }
  }, [location, currentPath]);

  useEffect(() => {
    if (isNavMenuClose) {
      setLogoApp(isNavMenuClose);
    }
    const timer = setTimeout(() => {
      if (!isNavMenuClose) {
        setLogoApp(isNavMenuClose);
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [isNavMenuClose]);
  const onCollapse = () => {
    navMenu.collapse();
  };

  const langDirection = useSelector(selectLangDirection);
  return (
    <Sider
      collapsible={collapsible}
      collapsed={collapsible ? isNavMenuClose : collapsible}
      onCollapse={onCollapse}
      className="navigation"
      width={256}
      style={{
        overflow: 'auto',
        height: '120vh',
        direction: langDirection,
        position: isMobile ? 'absolute' : 'relative',
        bottom: '20px',
        ...(!isMobile && {
          background: 'none',
          border: 'none',
          [langDirection === 'rtl' ? 'right' : 'left']: '20px',
          top: '20px',
          borderRadius: '8px',
        }),
      }}
      theme={'light'}
    >
      <div
        className="logo"
        onClick={() => navigate('/')}
        style={{
          cursor: 'pointer',
        }}
      >
        <img src={logoIcon} alt="Logo" style={{ height: '60px' }} />
      </div>
      <Menu
        items={items}
        mode="inline"
        theme={'light'}
        selectedKeys={[currentPath]}
        style={{
          background: 'none',
          border: 'none',
          width: 256,
        }}
      />
    </Sider>
  );
}

function MobileSidebar() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const langDirection = useSelector(selectLangDirection);
  return (
    <>
      <Button
        type="text"
        size="large"
        onClick={showDrawer}
        className="mobile-sidebar-btn"
        style={{ [langDirection === 'rtl' ? 'marginRight' : 'marginLeft']: 25 }}
      >
        <MenuOutlined style={{ fontSize: 18 }} />
      </Button>
      <Drawer
        width={250}
        contentWrapperStyle={{
          boxShadow: 'none',
        }}
        style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}
        placement={langDirection === 'rtl' ? 'right' : 'left'}
        closable={false}
        onClose={onClose}
        open={visible}
      >
        <Sidebar collapsible={false} isMobile={true} />
      </Drawer>
    </>
  );
}
