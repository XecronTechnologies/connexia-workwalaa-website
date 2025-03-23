import React ,{useEffect,useState} from "react";
// import HeroSection from '../components/Home/HeroSection';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import {setActivePage} from '../store/navigationSlice';

const ContactPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setActivePage("Contact")); // Set the active page to "Contact"
  }, [dispatch]);
  return (
    <div>

      {Array.from({ length: 100 }).map((item, index) => {
        return <p>{index}</p>;
      })}
 
    </div>
  );
};

export default ContactPage;
