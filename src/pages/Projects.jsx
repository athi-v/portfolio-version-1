import { AiOutlineEye} from "react-icons/ai";
import project from "../data/projects";

const Projects = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-auto lg:grid-cols-2  container mx-auto max-w-[90%] lg:max-w-screen-xl">
        <div class="py-[50px]">
          <h1 className="font-bold text-3xl pb-[25px]">
            Projects I've worked on:
          </h1>


  {project.map((work, index) => {
  if (work.category === "Work") {
    return (
      <div key={index} className="h-[70px] lg:h-[100px] border-b-2 lg:w-[400px] flex flex-row justify-between items-center">
        <div className="font-semibold">{work.projectName}</div>
        <a href={work.projectLink} target="_blank" rel="noopener noreferrer">
          <div className="flex flex-row items-center gap-2">
            <div>
              <AiOutlineEye />
            </div>
            <div className="font-medium">View Website</div>
          </div>
        </a>
      </div>
    );
  }
  return null;
})}

        

         
        </div>

        <div className="py-[50px]">
          <h1 className="font-bold text-3xl pb-[25px]">Personal projects:</h1>

          {project.map((work, index) => {
  if (work.category === "Personal") {
    return (
      <div key={index} className="h-[70px] lg:h-[100px] border-b-2 lg:w-[400px] flex flex-row justify-between items-center">
        <div className="font-semibold">{work.projectName}</div>
        <a href={work.projectLink} target="_blank" rel="noopener noreferrer">
          <div className="flex flex-row items-center gap-2">
            <div>
              <AiOutlineEye />
            </div>
            <div className="font-medium">View Website</div>
          </div>
        </a>
      </div>
    );
  }
  return null

})}

         
        </div>
      </div>
    </div>
  );
};

export default Projects;
