
export default function HomeBodyBottom() {

  return (
    <>
      <div className="flex gap-3">
        <button className="size-12 bg-black rounded-xl xl:size-16">
          <a href="https://wa.me/9840560704" target="_blank">
            <i
              className="fa-brands fa-whatsapp fa-2x"
              style={{ color: "rgba(37, 211, 102)" }}
            ></i>
          </a>
        </button>
        <button className="size-12 bg-black rounded-xl xl:size-16">
          <a href="viber://add?number=9840560704" target="_blank">
            <i
              className="fa-brands fa-viber icon fa-2x"
              style={{ color: "rgba(115, 96, 242)" }}
            ></i>
          </a>
        </button>
        <button className="size-12 bg-black rounded-xl xl:size-16">
          <a
            href="https://www.linkedin.com/in/bishal-gurung-367b03258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
          >
            <i
              className="fa-brands fa-linkedin fa-2x"
              style={{ color: "rgba(10, 102, 194)" }}
            ></i>
          </a>
        </button>
      </div>
    </>
  );
}
