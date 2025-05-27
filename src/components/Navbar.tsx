import { NavLinks } from "./NavLinks";

export function Navbar() {
  return (
    <nav className="flex justify-between p-4">
      <h1>Logo</h1>
      <NavLinks />
    </nav>
  );
}
