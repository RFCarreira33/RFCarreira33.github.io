import { MY_NAME, PERSONAL_LINKS } from "../config";

const CvInfo = () => (
  <div className="grid grid-rows-2 grid-cols-12 gap-2">
    <div className="row-span-2 col-span-2">
      <img src="/avatar.png" />
    </div>
    <div className="row-span-4 col-span-5">
      <h1 className="text-xl font-bold print-hd">{MY_NAME}</h1>
      <p className="text-l print-md">Developer in Leiria, Portugal</p>
    </div>
    <div className="row-span-2 col-span-5">
      <ul>
        {PERSONAL_LINKS.map(({ icon, info, link }, index) => (
          <li key={index} className="flex justify-end">
            <a href={link} target="_blank">
              <span className="items-center">
                <i className={`fa fa-${icon} pr-1`} /> {info}{" "}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default CvInfo;
