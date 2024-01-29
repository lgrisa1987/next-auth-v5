'use client';
import { useRouter } from 'next/navigation';

type LoginButtonProps = {
  children: React.ReactNode;
  mode?: 'modal' | 'redirect';
  asChild?: boolean;
};

const LoginButton = ({
  children,
  mode = 'redirect',
  asChild,
}: LoginButtonProps) => {
  const router = useRouter();
  const onClick = () => router.push('/auth/login');
  if (mode === 'modal') return <span>Todo: Implement modal</span>;
  return (
    <span className='cursor-pointer' onClick={onClick}>
      {children}
    </span>
  );
};

export default LoginButton;
