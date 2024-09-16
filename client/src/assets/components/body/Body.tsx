import "./body.css";
import LongCard from "../card/longCard/LongCard";
import logo1 from "./imgs/logo-1-150x40.png";
import logo2 from "./imgs/logo-2-150x40.png";
import logo3 from "./imgs/logo-3-150x78.png";
import logo4 from "./imgs/logo-4-150x57.png";
import logo5 from "./imgs/logo-5-150x38.png";
import SearchCard from "../card/searchCard/SearchCard";
import PromoCard from "../card/promoCard/PromoCard";
import SubHero from "../Hero/subHero/SubHero";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import PageLayout from "../../Layout/PageLayout";
export default function Body() {
  const cardsItems = [
    {
      id: 1,
      image: logo1,
      header: "Header 1",
      description: "This is a brief description of the longCard content.",
      date: "01/01/2024",
    },
    {
      id: 2,
      image: logo2,
      header: "Header 2",
      description: "This is a brief description of the longCard content.",
      date: "01/01/2024",
    },
    {
      id: 3,
      image: logo3,
      header: "Header 3",
      description: "This is a brief description of the longCard content.",
      date: "01/01/2024",
    },
    {
      id: 4,
      image: logo4,
      header: "Header 4",
      description: "This is a brief description of the longCard content.",
      date: "01/01/2024",
    },
    {
      id: 5,
      image: logo5,
      header: "Header 5",
      description: "This is a brief description of the longCard content.",
      date: "01/01/2024",
    },
    {
      id: 6,
      image: logo5,
      header: "Header 5",
      description: "This is a brief description of the longCard content.",
      date: "01/01/2024",
    },
    {
      id: 7,
      image: logo5,
      header: "Header 5",
      description: "This is a brief description of the longCard content.",
      date: "01/01/2024",
    },
    {
      id: 8,
      image: logo5,
      header: "Header 5",
      description: "This is a brief description of the longCard content.",
      date: "01/01/2024",
    },
    // Add more logos as needed
  ];

  const subHeroData = [
    {
      icon: <AiFillThunderbolt />,
      body: "hello",
      header: "hihihi",
    },
    {
      icon: <FaUser />,
      body: "hello",
      header: "hihihi",
    },
  ];

  return (
    <>
      <PageLayout>
        <section className="body">
          <div className="bodyLongCards">
            {cardsItems.map((item) => (
              <div key={item.id} className="bodyLongCard">
                <LongCard
                  image={item.image}
                  header={item.header}
                  description={item.description}
                  date={item.date}
                  bg={"var(--primary-white)"}
                  color={"var(--primary-green)"}
                />
              </div>
            ))}
          </div>
          <div className="bodyService">
            <div className="bodySearchCard">
              <SearchCard
                bg={"var(--primary-green)"}
                color="var(--primary-white)"
              />
            </div>
            <div className="bodySearchCard">
              <PromoCard />
            </div>
            <div className="bodySubCards">
              {subHeroData.map((subHero) => (
                <div className="bodySubCard">
                  <SubHero
                    key={subHero.header}
                    {...subHero}
                    bg={"var(--primary-green)"}
                    color={"var(--primary-white)"}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
}
