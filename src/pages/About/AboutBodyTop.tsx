import img from "../../images/2.png";
import Button from "../../component/ui/Button";

export default function AboutBodyTop() {
  return (
    <>
      <div className="w-full p-2 flex gap-2 xl:gap-0  ">
        <div className="w-2/5 flex xl:justify-center">
          <img
            src={img}
            alt="Bishal Gurung"
            className="rounded-2xl xl:h-80"
          />
        </div>
        <div className="w-3/5 flex flex-col gap-2  font-sans xl:px-5 xl:gap-4 xl:text-2xl">
          <span className="font-bold text-2xl xl:text-4xl">About Me</span>
          <span className="text-sm text-balance xl:text-2xl">
            Hello, I'm a Bishal, Webdeveloper based on Kathmandu. I have High
            Experience in Web design and building and customization. Also I am
            good at
          </span>
          <div className="flex flex-wrap gap-1 xl:flex-nowrap xl:gap-4">
            <Button name="HTML" />
            <Button name="CSS" />
            <Button name="JavaScript" />
            <Button name="React" />
            <Button name="TailwindCss" />
          </div>
          <button className=" p-2 font-bold text-white bg-blue-600 rounded-lg xl:w-1/2">
            <a
              href="https://drive.google.com/file/d/1HjkrU9jQf8uWf-UMiZZ-34kGQ0xwHINs/view?usp=sharing"
              target="_blank"
            >
              Download CV
            </a>
          </button>
        </div>
      </div>
    </>
  );
}
