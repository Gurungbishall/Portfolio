import img from "../../images/2.png";
import Button from "../../component/ui/Button";

export default function AboutBodyTop() {
  return (
    <>
      <div className="flex justify-center gap-10">
        <div>
          <img src={img} alt="Bishal Gurung" className="rounded-2xl h-80" />
        </div>
        <div className="pb-2 px-5 flex flex-col gap-4 font-sans text-2xl">
          <span className="font-bold text-4xl">About Me</span>
          <span>
            Hello, I'm a Bishal, Web-developer based on Kathmandu. I have <br />{" "}
            High Experience in Web design and building and customization. <br />
            Also I am good at
          </span>
          <div className="flex gap-3">
            <Button textSize="lg" paddingSize="p-2" fontStyle="normal">
              html
            </Button>
            <Button textSize="lg" paddingSize="p-2" fontStyle="normal">
              css
            </Button>
            <Button textSize="lg" paddingSize="p-2" fontStyle="normal">
              javascript
            </Button>
            <Button textSize="lg" paddingSize="p-2" fontStyle="normal">
              react
            </Button>
            <Button textSize="lg" paddingSize="p-2" fontStyle="normal">
              tailwind css
            </Button>
          </div>
          <Button textSize="2xl" paddingSize="p-2" bgColor="bg-cyan-500">
            <a
              href="https://drive.google.com/file/d/1HjkrU9jQf8uWf-UMiZZ-34kGQ0xwHINs/view?usp=sharing"
              target="_blank"
            >
              Download CV
            </a>
          </Button>
        </div>
      </div>
    </>
  );
}
