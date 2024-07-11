import CardSection from "../components/CardSection";

const Home = () => (
  <>
    <h1 className="text-2xl pb-2 font-bold">Heyo, I'm RFCarreira</h1>
    <p className="font-regular">
      I'm a developer from Portugal and I like to tinker with stuff. Interested
      in <b>web and software development</b> aswell as <b>computer hardware</b>.
    </p>
    <br />
    <p>
      Currently working as a <b>Full Stack Developer</b> at{" "}
      <a href="https://md3.pt/" target="_blank">
        MD3
      </a>{" "}
      while being a <b>Computer Science</b> undergrad at{" "}
      <a href="https://www.ipleiria.pt/">IPLeiria</a>. On my free time I like to
      game or bike but also hang out with friends and chill.
    </p>
    <br />
    <CardSection />
  </>
);

export default Home;
