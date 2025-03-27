// Suggested code may be subject to a license. Learn more: ~LicenseLog:1380501872.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1277337365.
// import { Link } from "react-router-dom";
import GradientButton from "../components/Buttons/GradientButton";

const  NotFoundPage= () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#121212]">
      <h1 className="text-6xl font-bold text-white">404</h1>
      <p className="text-2xl text-gray-400 mt-4">
        Oops! The page you're looking for could not be found.
      </p>


      <p className="text-1xl text-gray-600 mt-4">
        Contact Support - @workwalaa
      </p>

      <div className="mt-8">
          <GradientButton onClick={() => {
              window.location.href = "/";
          }} text="Go back to the Homepage" />
          
          
      </div>
    </div>
  );
};

export default NotFoundPage;



