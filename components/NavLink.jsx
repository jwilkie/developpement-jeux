'use client'

import Link from 'next/link';
import useCleanPathname from '@/hooks/useCleanPathname';

export default function NavLink({ href, className, activeClassName, children, ...props }) {
    const pathname = useCleanPathname();

    const getComputedClassName = () => {
        return pathname === href ? `${className || ''} ${activeClassName}`.trim() : className;
    }

    return (
        <Link href={href} className={getComputedClassName()} {...props}>
            {children}
        </Link>
    );
}
