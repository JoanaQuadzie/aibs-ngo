import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Button } from "./ui/button";
import {Menu} from 'lucide-react'

type Props = {
  navLinks: { title: string; link: string }[];
};

export default function MobileNav({ navLinks }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="text-white" variant="default"><Menu /></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {navLinks.map(({ link, title }) => (
          <DropdownMenuItem key={link}>
            <Link href={link}>{title}</Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuItem>
          <Button asChild className="bg-primary-dark text-white rounded-2xl">
          <Link href="/donation">
            Donate Now
            </Link>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
