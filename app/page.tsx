// import Image from "next/image";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import HomePage from "./components/HomePage";
import ProjectsPage from "./components/ProjectsPage";

export default function Home() {
  return (
    <div>
      <HomePage />
      <AboutPage />
      <div className="h-30"></div>

      <ProjectsPage />
      <div className="h-30"></div>
      <ContactPage />
      <div className="h-30"></div>

    </div>
  );
}
