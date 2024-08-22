import Button from "../../component/ui/Button";

export default function HomeBodyBottom() {
  return (
    <>
      <div className="flex gap-4 ">
        <Button>
          <a href="https://wa.me/9840560704" target="_blank">
            <i
              className="fa-brands fa-whatsapp fa-3x"
              style={{ color: "rgba(37, 211, 102)" }}
            ></i>
          </a>
        </Button>

        <Button>
          <a href="viber://add?number=9840560704" target="_blank">
            <i
              className="fa-brands fa-viber icon fa-3x"
              style={{ color: "rgba(115, 96, 242)" }}
            ></i>
          </a>
        </Button>

        <Button>
          <a
            href="https://www.linkedin.com/in/bishal-gurung-367b03258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
          >
            <i
              className="fa-brands fa-linkedin fa-3x"
              style={{ color: "rgba(10, 102, 194)" }}
            ></i>
          </a>
        </Button>
      </div>
    </>
  );
}
