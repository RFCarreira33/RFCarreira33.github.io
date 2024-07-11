import { Link, useLocation } from "react-router-dom";

interface NavLinkProps {
  title: string;
  href: string;
  blank?: boolean;
}

const NavLink = ({ title, href, blank }: NavLinkProps) => {
  const location = useLocation().pathname.split("/")[1] || "home";
  const isActive = location === title.toLowerCase();

  return (
    <Link to={href} target={blank ? "_blank" : undefined}>
      <span
        className={`hover:underline underline-offset-3px mr-4 ${
          isActive ? "font-bold underline" : "font-medium"
        }`}
      >
        {title}
      </span>
    </Link>
  );
};

export default NavLink;
