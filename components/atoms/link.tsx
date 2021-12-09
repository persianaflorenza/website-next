import NextLink from 'next/link';

type LinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export const Link = ({ href, children, className }: LinkProps) => (
  <NextLink href={href}>
    {typeof children === 'string' ? (
      <a
        className={`cursor-pointer text-sm font-bold text-navy-500 font-spartan hover:border-navy-500 border-b-2 border-transparent transition-all ${className}`}
      >
        {children}
      </a>
    ) : (
      children
    )}
  </NextLink>
);
