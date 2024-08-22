import Button from "./Button";

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
      <div className="p-6 flex flex-col justify-center items-center gap-5 w-full bg-white rounded-2xl">
        <span className="font-bold text-2xl">{Name}</span>
        <img src={ProjectImg} alt="" className="h-56" />
        <span>{Description}</span>
        <Button bgColor="bg-cyan-500">
          <a href={ProjectURL} target="_blank">
            Link
          </a>
        </Button>
      </div>
    </>
  );
}
