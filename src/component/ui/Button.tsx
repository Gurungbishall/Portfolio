type ButtonProps = {
  children: React.ReactNode;
  textSize?: string;
  paddingSize?: string;
  fontStyle?: string;
  bgColor?: string;
};

export default function Button({
  children,
  textSize,
  paddingSize = "p-4",
  fontStyle = "bold",
  bgColor = "bg-black",
}: ButtonProps) {
  return (
    <>
      <button
        className={`text-${textSize}  ${paddingSize} font-${fontStyle} text-white ${bgColor} rounded-2xl cursor-pointer transition duration-1000 ease-out hover:scale-110`}
      >
        {children}
      </button>
    </>
  );
}
