type ContainerProps = {
  children: React.ReactNode;
  Which?: string;
  FromWhere?: string;
  Date?: string;
  fontwidth?: string;
};

export default function Container({
  children,
  Which,
  FromWhere,
  Date,
  fontwidth = "normal",
}: ContainerProps) {
  return (
    <>
      <div className="p-4 mt-4 flex flex-col gap-2 text-base text-justify border-2 border-solid border-black rounded-xl">
        <span className={`text-xl font-${fontwidth}`}>
          {Which}
          <span className="font-bold text-purple-600"> {FromWhere}</span>
        </span>
        <span className="text-purple-500">{Date}</span>
        <span>{children}</span>
      </div>
    </>
  );
}
