import Body from "../../components/body/Body";
import ContactUs from "../../components/contactUs/ContactUs";
import HeroCarousel from "../../components/Hero/HeroCarousel";
import PageLayout from "../../Layout/PageLayout";
import "./homePage.css";

export default function HomePage() {
  // for hero section
  const imgs = [
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-2.jpg",
    "https://swiperjs.com/demos/images/nature-3.jpg",
    "https://swiperjs.com/demos/images/nature-4.jpg",
  ];
  return (
    <>
      {/* <PageLayout> */}
        <section className="heroGreenSection">
          <HeroCarousel images={imgs} />
        </section>
        <section className="bodyWhiteSection">
          <Body />
        </section>
        <section className="heroGreenSection">
          <ContactUs />
        </section>
      {/* </PageLayout> */}
    </>
  );
}
