import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { DARK_THEME_PARTICLES, LIGHT_THEME_PARTICLES } from "./particleType";
import { useThemeContext } from "../../../hooks/themeHook/themeHook";

const ParticlesTheme = () => {
  const { dark } = useThemeContext();

  const particles = dark ? DARK_THEME_PARTICLES : LIGHT_THEME_PARTICLES;

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log("Particles loaded");
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 20,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 2,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: particles,
      }}
    />
  );
};

export default ParticlesTheme;
