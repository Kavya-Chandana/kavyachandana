import mainData from "../data/config.json";
import navbarData from "../data/navbar.json";
import announcements from "../data/announcements.json";
import testimonials from "../data/testimonials.json";
import projects from "../data/projects.json";

export const useJSONData = () => {
  return {
    mainData,
    navbarData,
    announcements,
    testimonials,
    projects,
  };
};
