// Suggested code may be subject to a license. Learn more: ~LicenseLog:1687320772.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2674015655.
import React, { useState, useEffect } from 'react';
import { setActivePage } from '../../store/navigationSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';


const NavigationBar: React.FC = () => {
    const { activePage, navItems } = useSelector((state: RootState) => state.navigation);
    const dispatch = useDispatch<AppDispatch>();
    const [isScrolled, setIsScrolled] = useState(false);

    const handlePageChange = (page: string) => {
        dispatch(setActivePage(page));
    };

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-gray-900 shadow-md" : "bg-transparent"}`}
            data-webapp-navbar // Changed shadow-lg to shadow-md and bg-gray-800 to bg-gray-900
        >
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center">
                    <span className={`font-bold text-2xl text-white transition-colors duration-300`}>WORKWALAA</span>
          </div>
                <ul className="flex space-x-8">
            {navItems.map((item) => (
                <li key={item.label} className="relative group">
                    <button onClick={() => handlePageChange(item.page)} className={`text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none transition-colors duration-100 ${activePage === item.page ? "text-yellow-400" : ""}`}>
                    {item.label}
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300
                                       group-hover:w-full
                                       ${activePage === item.page ? "w-full" : ""}`}>
                    </span>
                  </button>

              </li>
            ))}
          </ul>
        </div>
      </nav>
      );
};
export default NavigationBar;