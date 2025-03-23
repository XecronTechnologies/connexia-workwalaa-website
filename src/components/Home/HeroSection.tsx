// Suggested code may be subject to a license. Learn more: ~LicenseLog:2257930341.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1425211479.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3412461008.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:440318260.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1060109025.
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRotateAngle } from "../../store/homeSlice";
import { RootState } from "../../store/store";
import RangoliSVG from "../../../public/kindpng_1074922.png";
import { motion, useSpring, useTransform } from "framer-motion";
import Particles from "react-tsparticles";
import { keyframes } from "@emotion/react";
import { Typography } from "@mui/material";
import { loadFull } from "tsparticles";

const HeroSection: React.FC = () => {
  const darkThemeColors = {
    backgroundStart: "#121212",
    backgroundEnd: "#1e1e1e",
    text: "#e0e0e0",
    accent: "#ff5722", // Changed accent color to a warmer tone
    button: "#ffeb3b", // Yellow
    buttonHover: "#ffd600", // Darker yellow
    buttonText: "#fff",
    glow: "rgba(100, 181, 246, 0.5)",
  };

  const gradientAnimation = keyframes`
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  `;

  const multiColorAnimation = keyframes`
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  `;

  const gradientBackground = {};
  const dispatch = useDispatch();
  const title = useSelector((state: RootState) => state.home.hero.title);
  const subtitle = useSelector((state: RootState) => state.home.hero.subtitle);
  const rotateAngle = useSelector(
    (state: RootState) => state.home.hero.rotateAngle
  );

  const rangoliRef = useRef(null);
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  useEffect(() => {
    let animationFrameId: number;
    let startTime: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const rotation = (progress / 60000) * 360;
      dispatch(setRotateAngle(rotation));
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [dispatch]);

  const spring = useSpring(rotateAngle, { stiffness: 20, damping: 10 });
  const scale = useTransform(spring, [0, 360], [1, 1.02]);

  return (
    <div
      className="flex justify-center items-center h-screen text-center relative overflow-hidden"
      style={{
        background: `linear-gradient(90deg, ${darkThemeColors.backgroundStart}, ${darkThemeColors.backgroundEnd})`,
        backgroundSize: "200% 200%",
        animation: `${gradientAnimation} 15s ease infinite`,
      }}
      // sx={{
      //   "&::before, &::after": {},

      // }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          particles: {
            number: { value: 80, density: { enable: true, area: 800 } },
            color: {
              value: [
                "#FF5722", // Orange
                "#FFC107", // Amber
                "#FFEB3B", // Yellow
                "#4CAF50", // Green
                "#03A9F4", // Light Blue
              ], // Multicolored particles
            },
            shape: { type: "circle" },
            opacity: { value: { min: 0.3, max: 0.7 } },
            size: { value: { min: 1, max: 3 } },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              outModes: { default: "out" },
            },
          },
          detectRetina: true,
        }}
      />
      <div
        className="absolute w-[150%] h-[150%] top-[-25%] left-[-25%] flex items-center opacity-10"
        style={{
          backgroundSize: "contain",
        }}
        // sx={{
        //   display: "flex",
        //   alignItems: "center",
        //
        //
        // }}
      >
        <motion.img
          ref={rangoliRef}
          src={RangoliSVG}
          alt="Rangoli"
          className="absolute left-0"
          style={{
            width: "30%",
            height: "auto",
            rotate: rotateAngle,
            scale: scale,
            transition: "transform 0.1s linear",
            zIndex: "1",
          }}
        />
      </div>
      <div
        className="z-2 flex flex-col items-center p-8 max-w-[800px]"
        // sx={{
        //   zIndex: 2,
        //   display: "flex",
        //   flexDirection: "column",
        //   alignItems: "center",
        //   padding: "2rem",
        //   maxWidth: "800px",
        // }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          }}
          exit={{
            opacity: 0,
            y: -50,
            transition: { duration: 0.8, ease: "easeIn" },
          }}
          whileHover={{ scale: 1.03 }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: "2.5rem", md: "4rem" },
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
              color: darkThemeColors.text,
            }}
          >
            {title}
          </Typography>
        </motion.div>
        <Typography
          className="font-open-sans font-light leading-tight mb-10"
          style={{
            fontSize: "1.2rem", // Adjusted font sizes
            // "@media (min-width: 768px)":{fontSize:'1.6rem'},
            color: "#b0bec5",
            lineHeight: "1.5", // Tighter line height
            fontFamily: "Open Sans, sans-serif",
          }}
        >
          {subtitle}
        </Typography>
        <br></br>
        <motion.button
          className="font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          style={{
            padding: "15px ",
            color: "#000", // Black text for better contrast on yellow
            background: `linear-gradient(135deg, ${darkThemeColors.button}, ${darkThemeColors.accent})`,
            border: `2px solid ${darkThemeColors.accent}`,
            boxShadow: `0 4px 12px ${darkThemeColors.glow}`,
            cursor: "pointer",
            fontSize: "1rem",
            transition:
              "background 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease",
          }}
          whileHover={{
            scale: 1.1,
            background: `linear-gradient(135deg, ${darkThemeColors.buttonHover}, ${darkThemeColors.button})`,
            boxShadow: `0 6px 18px ${darkThemeColors.glow}`,
          }}
        >
          Get Started
        </motion.button>
      </div>
    </div>
  );
};

export default HeroSection;
