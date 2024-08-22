type InputProps = {
  name: string;
  type: string;
  placeholder: string;
};

export default function Input({ name, type, placeholder }: InputProps) {
  return (
    <>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required
        className="p-2 w-96"
      />
    </>
  );
}
