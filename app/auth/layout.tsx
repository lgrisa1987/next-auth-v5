import { cn } from '@/lib/utils';
import { bgRadialGradient } from '../page';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={`${cn(
        'flex items-center justify-center h-full',
        bgRadialGradient
      )}`}
    >
      {children}
    </div>
  );
};

export default layout;
