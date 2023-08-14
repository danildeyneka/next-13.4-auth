'use client';
import { FC, useState } from 'react';
import { Button, Form, Input } from 'antd';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export const LoginForm: FC = () => {
  const router = useRouter();
  const [error, setError] = useState<'' | 'error'>('');

  const onFinish = async (values: { username: string; password: string }) => {
    const res = await signIn('credentials', {
      ...values,
      redirect: false,
    });
    if (!res?.error) router.push('/private');
    else {
      setError('error');
    }
  };

  return (
    <Form name="basic" onFinish={onFinish} labelCol={{ span: 9 }} wrapperCol={{ span: 6 }}>
      <Form.Item label="Username" name="username" validateStatus={error} help={!!error && 'Login data is incorrect'}>
        <Input />
      </Form.Item>

      <Form.Item label="Password" name="password" validateStatus={error} help={!!error && 'Login data is incorrect'}>
        <Input.Password />
      </Form.Item>

      <Form.Item style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <Button type="ghost" htmlType="submit" size="large">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};
