import { Link } from "react-router-dom"

interface NavLinkProps {
  title: string
  href: string
  blank?: boolean
}

const NavLink = ({ title, href, blank }: NavLinkProps) => {
  const splitTitle = document.title.split(" ")
  const titleName = splitTitle[splitTitle.length-1].toLowerCase()
  const isActive = titleName === title.toLowerCase()

  return (
    <Link to={href} target={blank ? "_blank" : undefined}>
      <span className={`hover:underline underline-offset-3px mr-4 ${isActive ? "font-bold underline" : "font-medium"}`}>{title}</span>
    </Link >
  )
}

export default NavLink
