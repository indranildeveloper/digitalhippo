import Link from "next/link";
import Container from "@/components/shared/Container";
import { Icons } from "@/components/shared/Icons";
import NavItems from "@/components/shared/NavItems";

const Navbar = () => {
  return (
    <nav className="sticky inset-x-0 top-0 z-50 h-16 bg-white">
      <header className="relative bg-white">
        <Container>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              {/* TODO: Mobile Nav */}

              <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                  <Icons.logo className="h-10 w-10" />
                </Link>
              </div>

              <div className="z-50 hidden lg:ml-8 lg:block lg:self-stretch">
                <NavItems />
              </div>
            </div>
          </div>
        </Container>
      </header>
    </nav>
  );
};

export default Navbar;
