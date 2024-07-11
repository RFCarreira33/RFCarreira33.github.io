import { useParams } from "react-router-dom";
import projectsJson from "../data/projects/projects.json";

const Project = () => {
  const { id } = useParams();
  const projectId = Number(id);
  const project = projectsJson.find((project) => project.id === projectId);

  if (project === undefined) {
    throw new Error(`Project not found`);
  }

  return (
    <div>
      <h1 className="text-4xl">{project.title}</h1>
      <br />
      <p>
        <b>Uploaded</b> {project.upload}
      </p>
      <b>
        <a href={project.source} target="_blank">
          Source Code
        </a>
      </b>
      <br />
      <br />
      <hr />
      <br />
      <h2>Description</h2>
      <p>{project.lg_description}</p>
      <br />
      <h2>What is it or what does it do?</h2>
      <p>{project.what_is_it}</p>
      <br />
      <h2>Built with</h2>
      <p>{project.lang}</p>
      <br />
      <h2>Examples</h2>
      {project.examples.map((example) => (
        <div className="text-center" key={example.main}>
          <img src={example.src} className="mx-auto pt-5" />
          {example.main}
        </div>
      ))}
    </div>
  );
};

export default Project;
