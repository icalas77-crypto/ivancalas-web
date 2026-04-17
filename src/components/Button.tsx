import { cn } from '@/lib/utils';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  asLink?: string;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  asLink,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseClasses = 'font-bold rounded-lg transition-all duration-200 uppercase tracking-wide';
  
  const variantClasses = {
    primary: 'bg-[#FF6B35] text-white hover:bg-[#e05a24] active:scale-95',
    secondary: 'bg-white text-black hover:bg-gray-100',
    outline: 'border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const combinedClasses = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (asLink) {
    return (
      <Link href={asLink}>
        <button className={combinedClasses} {...props}>
          {children}
        </button>
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
