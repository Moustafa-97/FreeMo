// HeroCarousel.tsx
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";
import "./HeroCarousel.css";

// import required modules
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import SubHero from "./subHero/SubHero";
import { FaFaceAngry, FaUser } from "react-icons/fa6";
import { AiFillThunderbolt } from "react-icons/ai";
import SecSubHero from "./secSubHero/SecSubHero";
import PageLayout from "../../Layout/PageLayout";

interface Props {
  images: string[];
}
export default function HeroCarousel(props: Props) {
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
    {
      icon: <FaFaceAngry />,
      body: "hello",
      header: "hihihi",
    },
  ];
  return (
    <>
      <PageLayout>
        <section className="HeroCarousel">
          <Swiper
            loop={true}
            spaceBetween={30}
            effect={"fade"}
            autoplay={{
              delay: 2500,
            }}
            modules={[EffectFade, Autoplay]}
            className="mySwiper swiper"
          >
            {props.images.map((img) => (
              <SwiperSlide>
                <img
                  src={img}
                  style={{ width: "100vw" }}
                  onClick={() => {
                    console.log(img);
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        <div className="subHero">
          {subHeroData.map((subHero) => (
            <SubHero
              key={subHero.header}
              {...subHero}
              bg="var(--primary-white)"
              color="var(--primary-green)"
            />
          ))}
        </div>
        <section className="secSubHero">
          <SecSubHero />
        </section>
      </PageLayout>
    </>
  );
}
