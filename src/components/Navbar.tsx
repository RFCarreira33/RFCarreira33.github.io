import { MY_NAME } from "../config";
import NavLink from "./NavLink";

const NavBar = () => {
  return (
    <>
      <div className="flex justify-between">
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
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/rfcarreira33/"
              className="text-xl text-white"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--white)" }}
            >
              <i className="fa fa-linkedin"></i>
            </a>

            <a
              href="https://github.com/RFCarreira33"
              className="text-xl text-white"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--white)" }}
            >
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
      </div>
      <nav>
        <NavLink title="Home" href="/" />
        <NavLink title="About" href="/about" />
        <NavLink title="Projects" href="/projects" />
        <NavLink title="CV" href="/curriculum-vitae" />
      </nav>
    </>
  );
};

export default NavBar;
