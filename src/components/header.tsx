import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import MobileNav from "./mobile-nav";

const NAVLINKS = [
  { title: "Home", link: "/" },
  { title: "About us", link: "/about-us" },
  { title: "Projects", link: "/projects" },
  { title: "Contact us", link: "/contact" },
];

export default function Header() {
  return (
    <header className="border-b border-b-primary px-4 py-2">
      <nav className="flex justify-between items-center">
        <div>
          <Image src="/images/Witen.png" alt="logo" height={100} width={100} />
        </div>

        <div>
          <ul className="hidden md:flex gap-5">
            {NAVLINKS.map(({ title, link }) => (
              <li key={link}>
                <Link href={link}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex md:hidden">
          <MobileNav navLinks={NAVLINKS} />
        </div>

        <Button
          asChild
          className="bg-primary-dark text-white rounded-2xl hidden md:flex"
        >
          <Link href="/donation">Donate Now</Link>
        </Button>
      </nav>
    </header>
  );
}
