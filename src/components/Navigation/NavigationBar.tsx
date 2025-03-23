// Suggested code may be subject to a license. Learn more: ~LicenseLog:1687320772.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2674015655.
import React, { useState, useEffect } from 'react';
import { setActivePage } from '../../store/navigationSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';


import WorkwalaaLogoDark from '/WorkwalaaLogoDark.png'
import WorkwalaaLogo from '/WorkwalaaLogo.png'


const NavigationBar: React.FC = () => {
    const { activePage, navItems } = useSelector((state: RootState) => state.navigation);
    const dispatch = useDispatch<AppDispatch>();
    const [isScrolled, setIsScrolled] = useState(false);

    const handlePageChange = (page: string, url?: string, external?: boolean) => {
        dispatch(setActivePage(page));
        if (external) {
            window.open(url, '_blank');
        }
        else {
            if (url) {
                window.location.href = url;
            }
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setIsScrolled(true);
                console.log("Changes happen");
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
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-yellow-400 shadow-md" : "bg-transparent"}`}
            data-webapp-navbar // Changed shadow-lg to shadow-md and bg-gray-800 to bg-gray-900
        >
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <div className="flex items-center">
                    {isScrolled ? (
                <img src={WorkwalaaLogoDark} width='80px' />
                    ) : (
                <img src={WorkwalaaLogo} width='80px' />
                    )}
                    {/* <span className={`font-bold text-2xl text-white transition-colors duration-300`}>WORKWALAA</span> */}
                </div>
                <ul className="flex space-x-8">
                    {navItems.map((item) => (
                        <li key={item.label} className={`relative group`}>
                            <button onClick={() => handlePageChange(item.page, item.url, item.external)} className={`text-gray-900 hover:text-gray-900 transition-colors duration-200 focus:outline-none transition-colors duration-100 ${activePage === item.page ? "text-gray-900" : ""}`}>
                                {item.label}
                                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300
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