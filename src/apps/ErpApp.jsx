import { useEffect, useLayoutEffect } from 'react';
import { selectAppSettings, selectSettings } from '@/redux/settings/selectors';
import { useDispatch, useSelector } from 'react-redux';

import { Layout } from 'antd';

import { useAppContext } from '@/context/appContext';

import Navigation from '@/apps/Navigation/NavigationContainer';
import HeaderContent from '@/apps/Header/HeaderContainer';

import { settingsAction } from '@/redux/settings/actions';

import { translateAction } from '@/redux/translate/actions';

import AppRouter from '@/router/AppRouter';

import useResponsive from '@/hooks/useResponsive';

import storePersist from '@/redux/storePersist';
import { selectLangDirection } from '@/redux/translate/selectors';

export default function ErpCrmApp() {
  const { Content } = Layout;

  const { state: stateApp, appContextAction } = useAppContext();
  const { app } = appContextAction;
  const { isNavMenuClose, currentApp } = stateApp;

  const { isMobile } = useResponsive();

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    // dispatch(settingsAction.list({ entity: 'setting' }));
  }, []);

  const appSettings = useSelector(selectAppSettings);

  const { isSuccess: settingIsloaded } = useSelector(selectSettings);

  useEffect(() => {
    const { loadDefaultLang } = storePersist.get('firstVisit');
    if (appSettings.idurar_app_language && !loadDefaultLang) {
      dispatch(translateAction.translate(appSettings.idurar_app_language));
      window.localStorage.setItem('firstVisit', JSON.stringify({ loadDefaultLang: true }));
    }
  }, [appSettings]);
  const langDirection = useSelector(selectLangDirection);

  return (
    <Layout hasSider style={{ flexDirection: langDirection === 'rtl' ? 'row-reverse' : 'row' }}>
      {/* {currentApp === 'default' ? <Navigation /> : <ExpensesNav />} */}
      <Navigation />

      {isMobile ? (
        <Layout style={{ marginLeft: 0 }}>
          <HeaderContent />
          <Content
            style={{
              margin: '40px auto 30px',
              overflow: 'initial',
              width: '100%',
              padding: '0 25px',
              maxWidth: 'none',
            }}
          >
            <AppRouter />
          </Content>
        </Layout>
      ) : (
        <Layout>
          <HeaderContent />
          <Content
            style={{
              margin: '40px auto 30px',
              overflow: 'initial',
              width: '100%',
              padding: '0 50px',
              maxWidth: 1400,
            }}
          >
            <AppRouter />
          </Content>
        </Layout>
      )}
    </Layout>);
}
