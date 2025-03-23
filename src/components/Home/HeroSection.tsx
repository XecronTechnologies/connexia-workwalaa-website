import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRotateAngle } from "../../store/homeSlice";
import {  RootState } from '../../store/store';
// import RangoliSVG from "../../assets/RangoliSVG/rangoli-hero-section.svg";
import RangoliSVG from "../../../public/aa.png";

const HeroSection: React.FC = () => {
  const dispatch = useDispatch();
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
  },[dispatch]);

  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        position: 'relative', // For absolute positioning of SVG
        overflow: 'hidden', // Hide overflow from SVG
      }}>
        <div style={{
          position: 'absolute',
            width: '150%', // Make it larger than viewport to avoid edges
            height: '150%',
          // top: '-25%',
          left: '-25%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            opacity: 1,
            backgroundSize:'contain'
        }}>
            <img
                src={RangoliSVG}
                alt="Rangoli"
                style={{
                    width: '25%',
                    height: 'auto',
          transform: `rotate(${rotateAngle}deg)`,
                    transition: 'transform 60s linear',
                }}
            />
        </div>
  
        <h1 style={{
          fontSize: '8vw', // Responsive font size
          zIndex: 1, // Ensure text is above SVG
          color: '#333',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
        }}>
          Workwalaa
        </h1>
      </div>
    );
};

export default HeroSection;