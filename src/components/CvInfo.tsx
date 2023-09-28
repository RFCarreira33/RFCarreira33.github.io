import { MY_NAME } from "../config";

const infos = [
  {
    icon: "globe",
    info: "rfcarreira33.github.io",
    link: "https://rfcarreira33.github.io",
  },
  {
    icon: "github",
    info: "rfcarreira33@github",
    link: "https://github.com/rfcarreira33",
  },
  {
    icon: "linkedin",
    info: "rfcarreira33@linkedIn",
    link: "https://www.linkedin.com/in/rfcarreira33",
  },
  {
    icon: "envelope",
    info: "rodrigocarreira33@gmail.com",
    link: "mailto:rodrigocarreira33@gmail.com",
  },
];

const CvInfo = () => (
  <div className="grid grid-rows-2 grid-cols-12 gap-2">
    <div className="row-span-2 col-span-2">
      <img src="/avatar.png" />
    </div>
    <div className="row-span-4 col-span-5">
      <h1 className="text-xl font-bold">{MY_NAME}</h1>
      <p className="text-l">Developer in Leiria, Portugal</p>
    </div>
    <div className="row-span-2 col-span-5">
      <ul>
        {
          infos.map(({ icon, info, link }, index) => (
            <li key={index} className="flex justify-end">
              <span className="items-center">
                <i className={`fa fa-${icon} pr-1`} />
                <a href={link} target="_blank"> {info} </a>
              </span>
            </li>
          ))
        }
      </ul>
    </div>
  </div>
);

export default CvInfo;
