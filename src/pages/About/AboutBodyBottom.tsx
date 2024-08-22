import Container from "../../component/ui/Container";

export default function AboutBodyBottom() {
  return (
    <>
      <div className="mx-80 mt-14 pb-20 flex gap-6 justify-center items-center">
        <div>
          <span className="font-bold text-4xl cursor-pointer">Education</span>
          <Container
            Which="Class 10 from"
            FromWhere="shree Bhu Pu sainik Angreji School"
            Date="2016-2018"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla iste
            atque nisi quidem nam, neque corporis aspernatur fugit odit harum,
            quas blanditiis labore voluptatem ducimu
          </Container>

          <Container
            Which="+12 from"
            FromWhere="St. Lawrence College"
            Date="2018-2020"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla iste
            atque nisi quidem nam, neque corporis aspernatur fugit odit harum,
            quas blanditiis labore voluptatem ducimu
          </Container>

          <Container
            Which="Currently reading Bachelor at"
            FromWhere="St. Lawrence College"
            Date="2021-studing"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla iste
            atque nisi quidem nam, neque corporis aspernatur fugit odit harum,
            quas blanditiis labore voluptatem ducimu
          </Container>
        </div>

        <div>
          <span className="font-bold text-4xl cursor-pointer">
            Work Experience
          </span>
          <Container
            Which=" UI/UX Designer"
            FromWhere="Iron man"
            Date="2016-2018"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla iste
            atque nisi quidem nam, neque corporis aspernatur fugit odit harum,
            quas blanditiis labore voluptatem ducimu
          </Container>
          <Container
            Which=" UI/UX Designer"
            FromWhere="Iron man"
            Date="2016-2018"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla iste
            atque nisi quidem nam, neque corporis aspernatur fugit odit harum,
            quas blanditiis labore voluptatem ducimu
          </Container>
          <Container
            Which=" UI/UX Designer"
            FromWhere="Iron man"
            Date="2016-2018"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla iste
            atque nisi quidem nam, neque corporis aspernatur fugit odit harum,
            quas blanditiis labore voluptatem ducimu
          </Container>
        </div>
      </div>
    </>
  );
}
