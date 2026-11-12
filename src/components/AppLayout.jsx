import { Outlet, useLocation } from 'react-router-dom';
import BottomNav from '@/components/BottomNav';
import { GamificationProvider } from '@/lib/gamification';

/** Shared shell: peach canvas, page area above the fixed bottom navigation. */
export default function AppLayout() {
  const { pathname } = useLocation();

  return (
    <GamificationProvider>
      <div className="min-h-[100dvh] bg-kala-peach font-body text-kala-ink">
        <main
          key={pathname}
          className="fade-up mx-auto w-full max-w-[1100px] overflow-x-hidden pb-24"
        >
          <Outlet />
        </main>
        <BottomNav />
      </div>
    </GamificationProvider>
  );
}
