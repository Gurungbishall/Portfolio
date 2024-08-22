export default function CurrentDate() {
  const date = new Date();

  const year = date.getFullYear();
  const todate = date.getDate();
  let month = date.getMonth();

  return (
    <>
      <div>{`Date: ${todate}-${month + 1}-${year} AD`}</div>
    </>
  );
}
