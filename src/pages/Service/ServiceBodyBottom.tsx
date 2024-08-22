import { useState } from "react";
import ProjectContainer from "../../component/ui/ProjectContainer";
import ProjectImg1 from "../../images/ProjectImg/Library_management.png";
import ProjectImg2 from "../../images/ProjectImg/Bineary_search.png";
import ProjectImg3 from "../../images/ProjectImg/Tip_calculator.png";

const projects = [
  {
    Name: "Library Mangement System",
    ProjectImg: ProjectImg1,
    Description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non natus voluptatibus nemo accusantium mollitia tempore ducimus, dignissimos praesentium quas",
    ProjectURL: "https://gurungbishall.github.io/Library-Management-System/",
  },
  {
    Name: "Bineary search",
    ProjectImg: ProjectImg2,
    Description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non natus voluptatibus nemo accusantium mollitia tempore ducimus, dignissimos praesentium quas",
    ProjectURL: "https://gurungbishall.github.io/BinarySearch_Js/",
  },
  {
    Name: "Tip calculator",
    ProjectImg: ProjectImg3,
    Description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non natus voluptatibus nemo accusantium mollitia tempore ducimus, dignissimos praesentium quas",
    ProjectURL: "https://gurungbishall.github.io/Tip_Calculator_html/",
  },
];

export default function ServiceBodyBottom() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftClick = () => {
    setCurrentIndex((c) => (c - 1 + projects.length) % projects.length);
  };

  const handleRightClick = () => {
    setCurrentIndex((c) => (c + 1) % projects.length);
  };

  return (
    <>
      <div className="mt-8 flex flex-col justify-center items-center">
        <span className="font-bold text-4xl">Projects</span>
        <div className="mt-8 flex justify-center items-center gap-5">
          <div
            className="bg-white text-xl p-4 cursor-pointer rounded-3xl"
            onClick={handleLeftClick}
          >
            <i className="fa-solid fa-arrow-left-long fa-2x"></i>
          </div>
          <div className="w-96 flex gap-4">
            {projects.map(
              (project, index) =>
                index === currentIndex && (
                  <ProjectContainer
                    key={index}
                    Name={project.Name}
                    ProjectImg={project.ProjectImg}
                    Description={project.Description}
                    ProjectURL={project.ProjectURL}
                  />
                )
            )}
          </div>
          <div
            className="bg-white text-xl p-4 cursor-pointer rounded-3xl"
            onClick={handleRightClick}
          >
            <i className="fa-solid fa-arrow-right-long fa-2x"></i>
          </div>
        </div>
      </div>
    </>
  );
}
