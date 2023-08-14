'use client';
import { Layout, PageHeader, Typography } from 'antd';
import s from './private/private.module.css';
import { LoginForm } from '@/components/login-form';
import { InputData } from '@/components/input-data';

export default function LoginPage() {
  return (
    <Layout className={s.layout}>
      <PageHeader className={s.header}>
        <Typography.Title level={1} italic code>
          Extremely safe login page
        </Typography.Title>
      </PageHeader>
      <Layout.Content className={s.content}>
        <InputData />
        <LoginForm />
      </Layout.Content>
    </Layout>
  );
}
