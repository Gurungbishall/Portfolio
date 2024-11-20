type ContainerProps = {
  children: React.ReactNode;
  Which?: string;
  FromWhere?: string;
  Date?: string;
};

export default function Container({
  children,
  Which,
  FromWhere,
  Date,

}: ContainerProps) {
  return (
    <>
      <div className="p-4 mt-4 flex flex-col gap-2 text-sm text-justify border-2 border-solid border-black rounded-xl xl:text-2xl">
        <span className=" font-normal ">
          {Which}
          <span className="font-bold text-purple-600"> {FromWhere}</span>
        </span>
        <span className="text-purple-500">{Date}</span>
        <span className="text-xs xl:text-xl">{children}</span>
      </div>
    </>
  );
}
