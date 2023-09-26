interface NavLinkProps {
  title: string
  href: string
  blank?: boolean
}

const NavLink = ({ title, href, blank }: NavLinkProps) => {
  const pathName = window.location.pathname
  const isActive = pathName === href || (pathName === "/" && href === "/");

  return (
    <a href={href} target={blank ? "_blank" : undefined}>
      <span className={`hover:underline underline-offset-3px mr-4 ${isActive ? "font-bold underline" : "font-medium"}`}>{title}</span>
    </a >
  )
}

export default NavLink
