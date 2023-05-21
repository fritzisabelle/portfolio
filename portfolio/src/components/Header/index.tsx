import logo from "../../public/img/logo-isabellePortfolio.png";
import darkModeToggle from "../../public/img/Toggle DarkMode--Light.svg";
import languageToggle from "../../public/img/Toggle Language --Light.svg";
import Image from "next/image";
import { MenuItem } from "./fragments/MenuItem";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex justify-between p-6 align-middle sticky top-0 z-50">
      <Image
        src={logo}
        width={240}
        height={undefined}
        alt="Picture of the author"
      />
      <div className="flex gap-8 items-center">
        <ul className="flex justify-between gap-4">
          <Link href="/aboutme">
            <MenuItem itemName="about me" itemNumber={1} />
          </Link>
          <Link href="/work">
            <MenuItem itemName="work" itemNumber={2} />
          </Link>
          <Link href="/contact">
            <MenuItem itemName="contact me" itemNumber={3} large={true} />
          </Link>
        </ul>
        <div className="flex gap-4">
          <Image src={languageToggle} alt="language toggle icon" />
          <Image src={darkModeToggle} alt="dark mode toggle" />
        </div>
      </div>
    </header>
  );
};
