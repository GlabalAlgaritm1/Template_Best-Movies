import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router';
// Data 
import { Element } from '../Assets/Data';
// Icons 
import Search from '../img/Img_icon/search.png';
import notification from '../img/Img_icon/notification.png';
import menu from '../img/Img_icon/menu.png';
import settings from '../img/Img_icon/settings.png';

const Xeader = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [settingsOpen, setSettingsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`${Element.Container} sticky top-0 border-b border-b-blue-800 py-2 mb-2 transition-all duration-300 ${scrolled ? 'bg-[#171818]/95 shadow-sm shadow-blue-500 rounded-b-sm' : 'bg-transparent'
                }`}
        >
            <section className="flex justify-between items-center">
                <div className="flex items-center gap-x-5">
                    <Link className="border px-2 py-2 rounded-full">BM</Link>

                    {/* Desktop nav */}
                    <nav className="hidden lg:flex items-center gap-x-5">
                        <NavLink
                            to="/filmlar"
                            className="border rounded-md px-3 py-1 text-white/50 hover:text-white border-white/50 hover:border-white hover:transition-all hover:duration-200"
                        >
                            Filmlar
                        </NavLink>
                        <NavLink
                            to="/seriallar"
                            className="border rounded-md px-3 py-1 text-white/50 hover:text-white border-white/50 hover:border-white hover:transition-all hover:duration-200"
                        >
                            Seriallar
                        </NavLink>
                        <NavLink
                            to="/multfilmlar"
                            className="border rounded-md px-3 py-1 text-white/50 hover:text-white border-white/50 hover:border-white hover:transition-all hover:duration-200"
                        >
                            Multfilmlar
                        </NavLink>
                        <NavLink
                            to="/anime"
                            className="border rounded-md px-3 py-1 text-white/50 hover:text-white border-white/50 hover:border-white hover:transition-all hover:duration-200"
                        >
                            Anime
                        </NavLink>
                    </nav>

                    {/* Mobile Hamburger */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="border py-2 px-2 rounded-md bg-white/15"
                        >
                            <img
                                width={24}
                                height={24}
                                src={menu}
                                alt="menu" />
                        </button>
                    </div>
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-5">
                    <button className="border py-2 px-2 rounded-md bg-white/15">
                        <svg
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M21.54 12.285a.645.645 0 010-.57l.82-1.678a1.91 1.91 0 00-.823-2.537l-1.65-.875a.645.645 0 01-.336-.461l-.322-1.84a1.91 1.91 0 00-2.158-1.568l-1.85.262a.645.645 0 01-.542-.176l-1.343-1.3a1.91 1.91 0 00-2.666 0l-1.343 1.3a.645.645 0 01-.542.176l-1.85-.262a1.91 1.91 0 00-2.157 1.568l-.323 1.84a.645.645 0 01-.335.46l-1.65.877a1.91 1.91 0 00-.824 2.536l.82 1.678a.645.645 0 010 .57l-.82 1.679A1.91 1.91 0 002.47 16.5l1.65.875c.178.095.3.263.335.462l.323 1.84a1.909 1.909 0 002.157 1.567l1.85-.261c.2-.029.397.035.542.176l1.343 1.299a1.911 1.911 0 002.666 0l1.343-1.3a.646.646 0 01.542-.175l1.85.261a1.91 1.91 0 002.158-1.567l.322-1.84a.645.645 0 01.335-.462l1.65-.875a1.91 1.91 0 00.825-2.536l-.82-1.679zM9.465 6.29a2.329 2.329 0 012.327 2.326 2.329 2.329 0 01-2.327 2.327A2.329 2.329 0 017.14 8.616 2.329 2.329 0 019.465 6.29zm-1.2 10.346a.632.632 0 01-.898 0 .634.634 0 010-.897l8.375-8.375a.634.634 0 11.897.898l-8.374 8.374zm6.276 1.074a2.329 2.329 0 01-2.326-2.326 2.329 2.329 0 012.326-2.327 2.329 2.329 0 012.326 2.327 2.329 2.329 0 01-2.326 2.326z"
                                fill="#fff"
                            />
                            <path
                                d="M14.539 14.328a1.059 1.059 0 000 2.115 1.059 1.059 0 000-2.115zM9.462 7.559a1.059 1.059 0 000 2.114 1.059 1.059 0 000-2.114z"
                                fill="#fff"
                            />
                        </svg>
                    </button>
                    <Link className="border py-2 px-2 rounded-md bg-white/15">
                        <img width={24} height={24} src={Search} alt="Search" />
                    </Link>
                    <Link className="border py-2 px-2 rounded-md bg-white/15">
                        <img width={24} height={24} src={notification} alt="Notification" />
                    </Link>
                    <button className="border border-dashed border-blue-300 py-2 px-3 rounded-full bg-white/15">
                        <span className="font-semibold text-blue-500">ZF</span>
                    </button>
                </div>
            </section>

            {/* Mobile nav */}
            {menuOpen && (
                <nav className="flex gap-x-2 lg:hidden bg-[#171818]/95 p-4 fixed top-16 w-full">
                    <NavLink
                        to="/filmlar"
                        className="border rounded-md px-3 py-1 text-white/50 hover:text-white border-white/50 hover:border-white hover:transition-all hover:duration-200 "
                        onClick={() => setMenuOpen(false)}
                    >
                        Filmlar
                    </NavLink>
                    <NavLink
                        to="/seriallar"
                        className="border rounded-md px-3 py-1 text-white/50 hover:text-white border-white/50 hover:border-white hover:transition-all hover:duration-200"
                        onClick={() => setMenuOpen(false)}
                    >
                        Seriallar
                    </NavLink>
                    <NavLink
                        to="/multfilmlar"
                        className="border rounded-md px-3 py-1 text-white/50 hover:text-white border-white/50 hover:border-white hover:transition-all hover:duration-200"
                        onClick={() => setMenuOpen(false)}
                    >
                        Multfilmlar
                    </NavLink>
                    <NavLink
                        to="/anime"
                        className="border rounded-md px-3 py-1 text-white/50 hover:text-white border-white/50 hover:border-white hover:transition-all hover:duration-200"
                        onClick={() => setMenuOpen(false)}
                    >
                        Anime
                    </NavLink>
                </nav>
            )}
        </header>
    );
};

export default Xeader;
