
type ProjectContainerProps = {
  Name: string;
  ProjectImg: string;
  Description: string;
  ProjectURL: string;
};

export default function ProjectContainer({
  Name,
  ProjectImg,
  Description,
  ProjectURL,
}: ProjectContainerProps) {
  return (
    <>
      <div className="p-6 flex flex-col justify-center items-center gap-3 w-full bg-white rounded-2xl">
        <span className="font-bold text-xl xl:text-2xl">{Name}</span>
        <img src={ProjectImg} className=" xl:h-56" />
        <span className="text-sm text-justify xl:text-xl">{Description}</span>
        <button className="p-2 text-sm text-white font-bold bg-black rounded-md xl:text-2xl">
          <a href={ProjectURL} target="_blank">
            Link
          </a>
        </button>
      </div>
    </>
  );
}
