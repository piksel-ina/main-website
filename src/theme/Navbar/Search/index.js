import clsx from 'clsx';
export default function NavbarSearch({ children, className }) {
  return (
    <div className={clsx(className, 'navbar__search-container')}>
      {children}
    </div>
  );
}
