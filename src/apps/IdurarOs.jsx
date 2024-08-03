import { lazy, Suspense } from 'react';

import { useSelector } from 'react-redux';
import { selectAuth, selectCurrentAdmin } from '@/redux/auth/selectors';
import { AppContextProvider } from '@/context/appContext';
import PageLoader from '@/components/PageLoader';
import AuthRouter from '@/router/AuthRouter';
import Localization from '@/locale/Localization';

const ErpApp = lazy(() => import('./ErpApp'));

const DefaultApp = () => (
  <Localization>
    <AppContextProvider>
      <Suspense fallback={<PageLoader />}>
        <ErpApp />
      </Suspense>
    </AppContextProvider>
  </Localization>
);

export default function IdurarOs() {
  const { isLoggedIn } = useSelector(selectAuth);
  const currentAdmin = useSelector(selectCurrentAdmin);


  // // Online state
  // const [isOnline, setIsOnline] = useState(navigator.onLine);

  // useEffect(() => {
  //   // Update network status
  //   const handleStatusChange = () => {
  //     setIsOnline(navigator.onLine);
  //     if (!isOnline) {
  //       console.log('🚀 ~ useEffect ~ navigator.onLine:', navigator.onLine);
  //       notification.config({
  //         duration: 20,
  //         maxCount: 1,
  //       });
  //       // Code to execute when there is internet connection
  //       notification.error({
  //         message: 'No internet connection',
  //         description: 'Cannot connect to the Internet, Check your internet network',
  //       });
  //     }
  //   };

  //   // Listen to the online status
  //   window.addEventListener('online', handleStatusChange);

  //   // Listen to the offline status
  //   window.addEventListener('offline', handleStatusChange);

  //   // Specify how to clean up after this effect for performance improvment
  //   return () => {
  //     window.removeEventListener('online', handleStatusChange);
  //     window.removeEventListener('offline', handleStatusChange);
  //   };
  // }, [navigator.onLine]);
  let roles = [
    'car-management',
    'restaurant-management',
    'realestate-management',
    'admin',
  ];
  if (!isLoggedIn || !roles.includes(currentAdmin?.user?.role?.slug))
    return (
      <Localization>
        <AuthRouter />
      </Localization>
    );
  else {
    return <DefaultApp />;
  }
}
