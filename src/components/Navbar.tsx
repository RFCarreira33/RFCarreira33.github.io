import { MY_NAME } from "../config"
import NavLink from "./NavLink"

const NavBar = () => {
  return (
    <header>
      <h2 className="text-xl font-bold flex items-center gap-3 ">
        <img
          src="/avatar.png"
          alt="avatar"
          width={50}
          height={50}
          className="rounded-full"
        />
        {MY_NAME}
      </h2>
      <nav>
        <NavLink title="Home" href="/" />
        <NavLink title="About" href="/about" />
        <NavLink title="Projects" href="/projects" />
        <NavLink
          title="GitHub"
          href="https://github.com/RFCarreira33"
          blank
        />
        <NavLink
          title="LinkedIn"
          href="https://www.linkedin.com/in/rfcarreira33/"
          blank
        />
        <NavLink title="CV" href="/curriculum-vitae" />
      </nav>
    </header>
  )
}

export default NavBar
