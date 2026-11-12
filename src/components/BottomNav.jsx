import { NavLink } from 'react-router-dom';
import { GraduationCap, Home as HomeIcon, ScanLine, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const ITEMS = [
  { to: '/', label: 'Home', icon: HomeIcon, end: true },
  { to: '/scan', label: 'Scan', icon: ScanLine },
  { to: '/learn', label: 'Learn', icon: GraduationCap },
  { to: '/profile', label: 'Profile', icon: User },
];

export default function BottomNav() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t border-kala-line bg-kala-cream/95 backdrop-blur-sm"
      aria-label="Main"
    >
      <div className="mx-auto flex max-w-md items-stretch justify-around px-2 pb-[env(safe-area-inset-bottom)]">
        {ITEMS.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              cn(
                'flex flex-1 flex-col items-center gap-1 py-2.5 text-[11px] font-medium transition-colors',
                isActive ? 'text-kala-terracotta' : 'text-kala-muted hover:text-kala-maroon'
              )
            }
          >
            {({ isActive }) => (
              <>
                <Icon
                  className={cn('h-5 w-5', isActive && 'stroke-[2.2]')}
                  aria-hidden="true"
                />
                <span>{label}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
