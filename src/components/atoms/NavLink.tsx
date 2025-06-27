import Link from 'next/link';

type NavLinkProps = {
  href: string;
  label: string;
};

export default function NavLink({ href, label }: NavLinkProps) {

  return (
    <Link href={href} className="hover:underline">
      {label}
    </Link>
  );
}
