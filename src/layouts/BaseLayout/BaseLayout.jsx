import Header from "../../components/Header/Header";
import ParticlesTheme from "../../components/UIElements/Particles/Particles";
import Footer from "../../components/Footer/Footer";
import MainNavigation from "../../components/Navigation/MainNavigation/MainNavigation";

const BaseLayout = ({ children }) => {
  return (
    <div className="layout_base">
      <ParticlesTheme />

      <Header>
        <MainNavigation />
      </Header>

      <div className="container">{children}</div>

      <Footer />
    </div>
  );
};

export default BaseLayout;
