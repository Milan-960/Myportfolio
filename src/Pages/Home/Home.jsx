import * as React from "react";
import { HeadProvider, Title, Link, Meta } from "react-head";
import MainSection from "./MainSection/MainSection";
import IntroSection from "./IntroSection/IntroSection";
import HomeLayout from "layouts/HomeLayout/HomeLayout";
import SectionBG from "components/UIElements/SectionBG/SectionBG";

const Home = () => {
  return (
    <>
      <HeadProvider>
        <Title>Milan Sachani</Title>
        <Link rel="canonical" href="https://milansachani.dev" />
        <Meta
          name="viewport"
          content="width=device-width, initial-scale=1,maximum-scale=1.0, user-scalable=no"
        />
        <Meta httpEquiv="cache-control" content="personal website" />
        <HomeLayout>
          <SectionBG>
            <MainSection />
          </SectionBG>
          <IntroSection />
        </HomeLayout>
      </HeadProvider>
    </>
  );
};

export default Home;
