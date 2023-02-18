import Header from "../../components/Header/Header";
import ParticlesTheme from "../../components/UIElements/Particles/Particles";
import Footer from "../../components/Footer/Footer";
import MainNavigation from "../../components/Navigation/MainNavigation/MainNavigation";

const HomeLayout = ({ children }) => {
  return (
    <div className="layout_home">
      <ParticlesTheme />

      <Header>
        <MainNavigation />
      </Header>

      {children}

      <Footer />
    </div>
  );
};

export default HomeLayout;
