import Logo from '@/components/atoms/Logo';
import NavLinks from '@/components/molecules/NavLinks';

export default function Navbar() {
  return (
    <header className="w-full flex items-center justify-between px-8 py-4 bg-gray-900 text-white">
      <Logo />
      <NavLinks />
    </header>
  );
}
