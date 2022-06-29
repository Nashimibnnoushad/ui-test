import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import ContentFile from "./Content.js"

const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'Experiments',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'Data',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'Data Sources',
            },
            {
                key: '4',
                icon: <UploadOutlined />,
                label: 'Model Factory',
            },
            {
                key: '5',
                icon: <UploadOutlined />,
                label: 'Model Tunning',
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <ContentFile/>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;