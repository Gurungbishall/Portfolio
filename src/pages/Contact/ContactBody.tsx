import Button from "../../component/ui/Button";
import Input from "../../component/ui/Input";

export default function ContactBody() {
  return (
    <>
      <div className="m-36 flex justify-center items-center ">
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="flex flex-col gap-6"
        >
          <input
            type="hidden"
            name="access_key"
            value={import.meta.env.VITE_FORM_API}
          />
          <span className="font-bold text-4xl">Enter your Details</span>
          <Input name="name" type="text" placeholder="Name" />
          <Input name="email" type="email" placeholder="Email" />
          <select name="purpose" required className="p-2">
            <option value="Web">UI design</option>
            <option value="Game">Web development</option>
            <option value="System">App development</option>
          </select>

          <textarea name="message" placeholder="Message" required>
            {" "}
          </textarea>

          <Button bgColor="bg-red-600" textSize="xl" paddingSize="p-2">
            Submit
          </Button>
        </form>
      </div>
    </>
  );
}
