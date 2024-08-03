import useLanguage from '@/locale/useLanguage';

import { Divider, Layout, Typography } from 'antd';

import logoIcon from '@/style/images/logo-icon.svg';


import AuthLayout from '@/layout/AuthLayout';

const { Content } = Layout;
const { Title } = Typography;

const AuthModule = ({ authContent, AUTH_TITLE, isForRegistre = false }) => {
  const translate = useLanguage();
  return (
    <AuthLayout>
      <Content
        style={{
          padding: isForRegistre ? '40px 30px 30px' : '100px 30px 30px',
          maxWidth: '440px',
          margin: '0 auto',
        }}
      >
        <div className="logo-login" style={{marginBottom:'50px'}}>
          <img src={logoIcon} alt="Logo" style={{ height: '80px' }} />
        </div>
        <Title level={1}>{translate(AUTH_TITLE)}</Title>
        <Divider />
        <div className="site-layout-content">{authContent}</div>
      </Content>
    </AuthLayout>
  );
};

export default AuthModule;
