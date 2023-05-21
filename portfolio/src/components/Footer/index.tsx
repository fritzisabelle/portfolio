import Link from "next/link";
import { MenuItem } from "../fragments/MenuItem";

export const Footer = () => {
  return (
    <footer className=" sticky bottom-0 left-0 py-6 px-8">
      <ul className="flex gap-4">
        <Link href="https://www.linkedin.com/in/euisabellebernardes/">
          <MenuItem itemName="linkedin" itemNumber={1} />
        </Link>
        <Link href="https://github.com/fritzisabelle">
          <MenuItem itemName="github" itemNumber={2} />
        </Link>
      </ul>
    </footer>
  );
};
