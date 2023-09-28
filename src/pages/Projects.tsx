import Card from "../components/Card";
import projectsJson from "../data/projects/projects.json";

const Projects = () => (
  <main>
    <h1>All the projects and stuff I worked on</h1>
    <br />
    <section className="list-none space-y-5">
      {projectsJson.map((project) => (
        <Card key={project.id} project={project} />
      ))}
    </section>
  </main>
);

export default Projects;

