import { Link } from "react-router-dom";
import { IProject } from "../data/projects/IProject";

const Card = ({ project }: { project: IProject }) => (
  <div className="link-card hover:scale-105 ease-out transition-transform border-solid border-1 border-suttle rounded-md bg-foreground">
    <Link to={`/projects/${project.id}`} className="block p-5">
      <h3 className="text-md">{project.title}</h3>
      <p className="py-2 text-sm">{project.sm_description}</p>
      <p className="text-sm text-gray-400">
        Built with <b>{project.lang}</b>
      </p>
    </Link>
  </div>
);

export default Card;
