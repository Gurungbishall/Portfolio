export default function Button({ name }: { name: string }) {
  return (
    <>
      <button className="p-2 text-sm text-white font-bold bg-black rounded-md xl:text-2xl">
        {name}
      </button>
    </>
  );
}
