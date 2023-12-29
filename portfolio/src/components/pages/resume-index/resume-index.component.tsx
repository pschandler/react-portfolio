import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ResumeIndexContentComponent from "./resume-index-content.component";
import ResumeSkillsComponent from "../resume-skills/resume-skills.component";
import ResumeExperienceComponent from "../resume-experience/resume-experience.component";
import ResumeEducationComponent from "../resume-education/resume-education.component";
import { useAccordionButton } from "react-bootstrap";

function ResumeTab() {
  return (
    <article className="resume">
      <section className="header mb-3">
        <img src="http://punchcodestudios.com/images/about-me.png"></img>
      </section>

      <Tabs
        defaultActiveKey="summary"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="summary" title="Summary">
          <ResumeIndexContentComponent />
        </Tab>
        <Tab eventKey="skills" title="Skills">
          <ResumeSkillsComponent />
        </Tab>
        <Tab eventKey="experience" title="Experience">
          <ResumeExperienceComponent />
        </Tab>
        <Tab eventKey="education" title="Education">
          <ResumeEducationComponent />
        </Tab>
      </Tabs>
    </article>
  );
}

export default ResumeTab;
