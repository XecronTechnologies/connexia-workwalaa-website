// Suggested code may be subject to a license. Learn more: ~LicenseLog:2256967187.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2275848556.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:944166002.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3348361360.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3446434383.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1659296229.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2020497839.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:623029375.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2313162153.
import React, { useEffect, useState } from "react";
// import HeroSection from '../components/Home/HeroSection';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import {setActivePage} from '../store/navigationSlice';
import ContactForm from '../components/Contact/ContactForm'

const ContactPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setActivePage("Contact")); // Set the active page to "Contact"
  }, [dispatch]);
  return (
   <ContactForm submitId="BmdrCUdDP" />
  );
};

export default ContactPage;
