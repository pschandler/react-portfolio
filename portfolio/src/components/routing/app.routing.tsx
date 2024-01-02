import { RouteObject } from "react-router-dom";

import App from "../../app";
import Layout from "../pages/_layout.component";
import ResumeIndex from "../pages/resume-index/resume-index.component";
import ResumeEducation from "../pages/resume-education/resume-education.component";
import ResumeExperience from "../pages/resume-experience/resume-experience.component";
import ResumeSkills from "../pages/resume-skills/resume-skills.component";
import HomePage from "../pages/home-page.component";
import GalleryGridLayout from "../pages/gallery/galllery-grid-layout";

function routes() {
  return [
    {
      path: "/",
    },
    {
      path: "",
      element: <App></App>,
      children: [
        {
          path: "",
          element: <Layout></Layout>,
          children: [
            { index: true, element: <HomePage></HomePage> },
            { path: "home", element: <HomePage></HomePage> },
            { path: "resume", element: <ResumeIndex></ResumeIndex> },
            { path: "resume-skills", element: <ResumeSkills></ResumeSkills> },
            {
              path: "resume-education",
              element: <ResumeEducation></ResumeEducation>,
            },
            {
              path: "resume-experience",
              element: <ResumeExperience></ResumeExperience>,
            },
            {
              path: "/about",
              element: <HomePage></HomePage>,
            },
            {
              path: "/galleries",
              element: <GalleryGridLayout></GalleryGridLayout>,
            },
          ],
        },
      ],
    },
  ] as RouteObject[];
}
export default routes();
