import React from 'react';
import { Layout, Row, Col } from 'antd';
import { selectLangDirection } from '@/redux/translate/selectors';
import { useSelector } from 'react-redux';
import { Content } from 'antd/lib/layout/layout';

export default function AuthLayout({ sideContent, children }) {
  const langDirection = useSelector(selectLangDirection);

  return (
    <Layout>
      <Row>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 24 }}
          style={{ background: '#FFF', minHeight: '100vh' }}
        >
          {children}
        </Col>
      </Row>
    </Layout>
  );
}
