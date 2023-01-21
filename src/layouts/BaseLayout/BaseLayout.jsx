import ms from "./BaseLayout.module.scss";
import Header from "../../components/Header/Header";
import ParticlesTheme from "../../components/UIElements/Particles/Particles";
import Footer from "../../components/Footer/Footer";
import MainNavigation from "../../components/Navigation/MainNavigation/MainNavigation";

const BaseLayout = ({ children }) => {
  return (
    <div className={ms.layout}>
      <ParticlesTheme />

      <Header>
        <MainNavigation />
      </Header>

      <div className={ms.container}>{children}</div>

      <Footer />
    </div>
  );
};

export default BaseLayout;
