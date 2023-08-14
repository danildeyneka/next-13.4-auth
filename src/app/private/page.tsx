'use client';
import { signOut, useSession } from 'next-auth/react';
import { Button, Typography } from 'antd';

export default function Private() {
  const { data } = useSession();
  const name = data?.user.firstName;
  return (
    <div style={{ textAlign: 'center', marginTop: 55 }}>
      <Typography.Title> Welcome aboard, {name} </Typography.Title>
      <div>
        <Button onClick={() => signOut()}>Sign Out</Button>
      </div>
    </div>
  );
}
