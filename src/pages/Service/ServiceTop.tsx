import Container from "../../component/ui/Container";

export default function ServiceTop() {
  return (
    <>
      <div className="mt-10 flex flex-col justify-center items-center">
        <span className="text-4xl font-bold">What I do</span>
        <div className="flex mx-40 gap-8">
          <Container Which="UI Design" fontwidth="bold">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            ab ipsam cumque hic et possimus enim earum obcaecati eos doloribus,
            iusto quae vero soluta consequatur corporis accusamus modi? Ad,
            eaque!
          </Container>
        
          <Container Which="Web Development" fontwidth="bold">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            ab ipsam cumque hic et possimus enim earum obcaecati eos doloribus,
            iusto quae vero soluta consequatur corporis accusamus modi? Ad,
            eaque!
          </Container>
        
          <Container Which="App Development" fontwidth="bold">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            ab ipsam cumque hic et possimus enim earum obcaecati eos doloribus,
            iusto quae vero soluta consequatur corporis accusamus modi? Ad,
            eaque!
          </Container>
        </div>
      </div>
    </>
  );
}
