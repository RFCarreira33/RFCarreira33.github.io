import Card from "./Card";
import projectsJson from "../data/projects/projects.json";

const CardSection = () => (
  <>
    <h1 className="text-2xl pb-2 font-bold">Stuff I've worked in</h1>
    <br />
    <section className="grid grid-cols-1 gap-4 auto-cols-max sm:grid-cols-2 sm:gap-3">
      {projectsJson
        .sort((a: any, b: any) => a.priority - b.priority)
        .slice(0, 6)
        .map((project: any) => (
          <Card key={project.id} project={project} />
        ))}
    </section>
  </>
);

export default CardSection;
