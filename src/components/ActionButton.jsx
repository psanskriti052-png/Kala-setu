import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Split button used across the app: label | divider | icon.
 * Renders a router link when `to` is given, otherwise a real button.
 */
export default function ActionButton({
  label,
  to,
  onClick,
  variant = 'primary',
  icon: Icon = ArrowRight,
  className,
  disabled = false,
  type = 'button',
}) {
  const styles =
    variant === 'primary'
      ? 'bg-kala-terracotta text-white border-kala-terracotta hover:bg-kala-maroon hover:border-kala-maroon'
      : 'bg-kala-cream text-kala-maroon border-kala-line hover:border-kala-gold';

  const classes = cn(
    'inline-flex items-stretch overflow-hidden rounded-xl border shadow-sm transition-colors duration-300',
    styles,
    disabled && 'cursor-not-allowed opacity-60',
    className
  );

  const content = (
    <>
      <span className="flex items-center px-5 py-3 text-sm font-semibold tracking-wide">{label}</span>
      <span className="w-px self-stretch bg-current opacity-25" aria-hidden="true" />
      <span className="flex w-11 items-center justify-center" aria-hidden="true">
        <Icon className="h-4 w-4" />
      </span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {content}
    </button>
  );
}
