import NavLink from '@/components/atoms/NavLink';

export default function NavLinks() {
  return (
    <div className="flex gap-6">
      <NavLink href="/" label="Home" />
      <NavLink href="/about" label="About" />
    </div>
  );
}
