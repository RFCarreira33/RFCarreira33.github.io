import CardSection from "../components/CardSection"
import { SITE_TITLE } from "../config"

const Home = () => {
  document.title = `${SITE_TITLE} Home`
  return (
    <>
      <h1 className="text-2xl pb-2 font-bold">Heyo, I'm RFCarreira</h1>
      <p className="font-regular">
        I'm a developer from Portugal and I like to tinker with stuff. Interested
        in <b>web and software development</b>, <b>computer hardware</b>.
      </p>
      <br />
      <p>
        I'm seeking my first job opportunity in the field while taking <b>CSE</b> at IPLeiria. On my free time I like to game or bike but also hang out
        with friends and chill.
      </p>
      <br />
      <CardSection />
    </>
  )
}

export default Home
