import { lazy } from 'react';

import { Navigate } from 'react-router-dom';

const Logout = lazy(() => import('@/pages/Logout.jsx'));
const NotFound = lazy(() => import('@/pages/NotFound.jsx'));

const Dashboard = lazy(() => import('@/pages/Dashboard'));

const About = lazy(() => import('@/pages/About'));


const User = lazy(() => import('@/pages/User'));
const Service = lazy(() => import('@/pages/Service'));
const Restaurant = lazy(() => import('@/pages/Restaurant'));
const Category = lazy(() => import('@/pages/Category'));
const Item = lazy(() => import('@/pages/Item'));
const Order = lazy(() => import('@/pages/Order'));


const Agent = lazy(() => import('@/pages/Agent'));
const Rental = lazy(() => import('@/pages/Rental'));
const Sale = lazy(() => import('@/pages/Sale'));
const Property = lazy(() => import('@/pages/Property'));
const PropertyType = lazy(() => import('@/pages/PropertyType'));
const PropertySpecialType = lazy(() => import('@/pages/PropertySpecialType'));
const Payment = lazy(() => import('@/pages/Payment'));
const MaintenanceRequest = lazy(() => import('@/pages/MaintenanceRequest'));
const CarType = lazy(() => import('@/pages/CarType'));
const Car = lazy(() => import('@/pages/Car'));
const CarRental = lazy(() => import('@/pages/CarRental'));
const Ad = lazy(() => import('@/pages/Ad'));

let routes = {
  expense: [],
  default: [
    {
      path: '/login',
      element: <Navigate to="/" />,
    },
    {
      path: '/verify/*',
      element: <Navigate to="/" />,
    },
    {
      path: '/resetpassword/*',
      element: <Navigate to="/" />,
    },
    {
      path: '/logout',
      element: <Logout />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/',
      element: <Dashboard />,
    },
    {
      path: '/user',
      element: <User />,
    },
    {
      path: '/service',
      element: <Service />,
    },
    {
      path: '/ad',
      element: <Ad />,
    },
    {
      path: '/restaurant',
      element: <Restaurant />,
    },
    {
      path: '/category',
      element: <Category />,
    },
    {
      path: '/item',
      element: <Item />,
    },
    {
      path: '/order',
      element: <Order />,
    },
    {
      path: '/agent',
      element: <Agent />,
    },
    {
      path: '/property-type',
      element: <PropertyType />,
    },
    {
      path: '/property-special-type',
      element: <PropertySpecialType />,
    },
    {
      path: '/property',
      element: <Property />,
    },
    {
      path: '/rental',
      element: <Rental />,
    },
    {
      path: '/sale',
      element: <Sale />,
    },
    {
      path: '/payment',
      element: <Payment />,
    },
    {
      path: '/maintenance-request',
      element: <MaintenanceRequest />,
    },
    {
      path: '/car-type',
      element: <CarType />,
    },
    {
      path: '/car',
      element: <Car />,
    },
    {
      path: '/car-rental',
      element: <CarRental />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ],
};

export default routes;
