import ProjectContainer from "../../component/ui/ProjectContainer";
import ProjectImg1 from "../../images/ProjectImg/Library_management.png";
import ProjectImg2 from "../../images/ProjectImg/Bineary_search.png";
import ProjectImg3 from "../../images/ProjectImg/Tip_calculator.png";
import ProjectImg4 from "../../images/ProjectImg/todolist.png";

const projects = [
  {
    Name: "Library Mangement System",
    ProjectImg: ProjectImg1,
    Description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non natus voluptatibus nemo accusantium mollitia tempore ducimus, dignissimos praesentium quas",
    ProjectURL: "https://gurungbishall.github.io/Library-Management-System/",
  },
  {
    Name: "To Do List",
    ProjectImg: ProjectImg4,
    Description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non natus voluptatibus nemo accusantium mollitia tempore ducimus, dignissimos praesentium quas",
    ProjectURL: "https://to-do-list-pi-eight-47.vercel.app/",
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

export default function ProjectBodyBottom() {
  return (
    <>
      <div className="pb-20 pt-8 flex flex-col gap-2 justify-center items-center xl:px-10 xl:pt-9">
        <span className="font-bold text-2xl  xl:text-4xl">Projects</span>
        <div className="p-4 flex flex-wrap gap-4 xl:flex-none xl:grid xl:grid-cols-3 ">
          {projects.map((project, index) => (
            <ProjectContainer
              key={index}
              Name={project.Name}
              ProjectImg={project.ProjectImg}
              Description={project.Description}
              ProjectURL={project.ProjectURL}
            />
          ))}
        </div>
      </div>
    </>
  );
}
