import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRotateAngle } from "../../store/homeSlice";
import { RootState } from "../../store/store";
import BGImage from "../../assets/Home/HeroSectionBG.jpg";
import RangoliSVG from "../../../public/kindpng_1074922.png";
import { motion } from "framer-motion";
import { Stack, Button, Typography, Box } from "@mui/material";

const HeroSection: React.FC = () => {
  const futuristicColors = {
    primary: "#64b5f6", // More refined blue
    secondary: "#1e88e5", // Deeper blue
    accent: "#e91e63", // More subdued pink
    backgroundStart: "#0a192f", // Darker, more professional background
    backgroundEnd: "#020c1b",
    text: "#e8e8e8", // Light gray for text
    textShadow: "rgba(0, 0, 0, 0.6)",
    buttonGradientStart: "#e91e63",
    buttonGradientEnd: "#64b5f6",
    buttonShadow: "rgba(0, 0, 0, 0.3)",
  };

  const dispatch = useDispatch();
  const title = useSelector((state: RootState) => state.home.hero.title);
  const subtitle = useSelector((state: RootState) => state.home.hero.subtitle);
  const rotateAngle = useSelector(
    (state: RootState) => state.home.hero.rotateAngle
  );

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

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        background: `linear-gradient(to bottom, ${futuristicColors.backgroundStart}, ${futuristicColors.backgroundEnd})`,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "150%",
          height: "150%",
          top: "-25%",
          left: "-25%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity: 0.3, // Reduced opacity for subtlety
          backgroundSize: "contain",
        }}
      >
        <img
          src={RangoliSVG}
          alt="Rangoli"
          style={{
            width: "25%",
            height: "auto",
            transform: `rotate(${rotateAngle}deg)`,
            transition: "transform 0s linear",
            zIndex: "1",
          }}
          className="absolute"
        />
      </Box>

      <Box
        sx={{
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
          exit={{ opacity: 0, y: -50, transition: { duration: 0.8 } }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "3rem", md: "6rem" }, // Responsive font size
              color: futuristicColors.text,
              fontFamily: "sans-serif",
              textShadow: `3px 3px 6px ${futuristicColors.textShadow}`,
              lineHeight: "1",
              letterSpacing: "4px",
              cursor: "pointer",
            }}
          >
            {title}
          </Typography>
        </motion.div>
        <Typography
          variant="h5"
          sx={{
            fontSize: { xs: "1rem", md: "1.5rem" },
            color: futuristicColors.text,
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
            marginTop: "10px",
            fontFamily: "sans-serif",
            letterSpacing: "1px",
          }}
        >
          {subtitle}
        </Typography>
        <Button
          variant="contained"
          sx={{
            marginTop: "2rem",
            padding: "1rem 2rem",
            background: `linear-gradient(to right, ${futuristicColors.buttonGradientStart}, ${futuristicColors.buttonGradientEnd})`,
            color: "white",
            fontWeight: "bold",
            borderRadius: "2rem",
            boxShadow: `0 4px 8px ${futuristicColors.buttonShadow}`,
            transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: `0 6px 12px ${futuristicColors.buttonShadow}`,
              background: `linear-gradient(to left, ${futuristicColors.buttonGradientStart}, ${futuristicColors.buttonGradientEnd})`
            },
          }}
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;