import { useEffect, useState } from "react";
import Card from "../components/Card";
import projectsJson from "../data/projects/projects.json";

const Projects = () => {
const [search, setSearch] = useState("");
const [projects, setProjects] = useState(projectsJson);

useEffect(() => {
    setProjects(projectsJson.filter((project: IProject) => project.title.toLowerCase().includes(search.toLowerCase())));
}, [search]);

return (
  <main>
    <div className="sm:flex">
      <div className="sm:w-1/2 :w-full">
        <h1 className="inline-block mb-4">Stuff I worked on</h1>
      </div>
      <div className="sm:w-1/2 w-full">
      <input
        type="text"
        placeholder="Looking for a specific project?"
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 inset-y-0 w-full right-0 bg-foreground rounded-md border-solid border-1 border-suttle"
      />
    </div>
  </div>
  <br />

  <section className="list-none space-y-5">
    {projects.map((project: IProject) => (
      <Card key={project.id} project={project} />
    ))}
  </section>

    {projects.length === 0 && (
      <p className="text-center">No projects found with that name.</p>
    )}
</main>
)};

export default Projects;

