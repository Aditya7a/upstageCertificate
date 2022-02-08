import Image from "next/image";
import Logo from "/public/images/logo.png";
import { MenuIcon } from "@heroicons/react/outline";
import Head from "next/head";

function Nav() {
    return (
        <>
            <div>
                <Head>
                    <title>AdoptEV</title>
                </Head>
            </div>
            {/* Top */}
            <nav>
                <div className=' text-b1 sticky top-0 z-[1000] bg-white '>
                    <div className='my_grid'>
                        <div className='hidden md:flex'>
                            <span className='hover:text-g2 col-start-1 flex cursor-pointer items-center px-2 text-2xl font-extrabold md:px-0'>
                                <Image src={Logo} alt='Logo.png' />
                            </span>
                        </div>

                        {/* Small Screen Nav */}
                        <div className='col-span-full flex flex-row items-center px-2 md:hidden '>
                            <MenuIcon className=' flex h-4 cursor-pointer items-center  hover:underline hover:decoration-2 ' />

                            <p className='cursor-pointer items-center px-2 text-2xl font-extrabold  '>
                                ADOPTEV
                            </p>
                        </div>

                        <div className='col-span-4 col-start-9 hidden flex-row content-evenly justify-end gap-8 text-sm font-medium md:flex'>
                            <p className='flex cursor-pointer items-center py-2'>
                                Finance
                            </p>
                            <p className='flex cursor-pointer items-center py-2'>
                                Partner With Us
                            </p>
                            <div className='flex items-center py-2'>
                                <button className='bg-b1 hover:text-b1 h-[35px] cursor-pointer rounded px-8 text-base font-bold text-white hover:bg-white hover:shadow-xl'>
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Bottom */}
                <div className='bg-white_2 sticky top-0 '>
                    <div className='my_grid text-my_black hidden flex-row gap-4 py-[8px] text-sm md:flex'>
                        <span className='hover:decoration-g2 flex cursor-pointer flex-row items-center gap-2 hover:underline hover:decoration-2 '>
                            <MenuIcon className='hover:text-g2 h-6' />
                            <p>All</p>
                        </span>
                        <div className='hidden flex-row items-center gap-4 md:flex'>
                            <p className='hover:decoration-g2 cursor-pointer hover:underline hover:decoration-2'>
                                3-Wheelers
                            </p>
                            <p className='hover:decoration-g2 cursor-pointer hover:underline hover:decoration-2'>
                                2-Wheelers
                            </p>
                            <p className='hover:decoration-g2 cursor-pointer hover:underline hover:decoration-2'>
                                Bicycles
                            </p>
                            <p className='hover:decoration-g2 cursor-pointer hover:underline hover:decoration-2'>
                                Cars
                            </p>
                            <p className='hover:decoration-g2 cursor-pointer hover:underline hover:decoration-2'>
                                Batteries
                            </p>
                        </div>
                        <div className='hidden flex-row items-center gap-4 lg:flex'>
                            <p className='cursor-pointer hover:underline'>
                                GPS
                            </p>
                            <p className='hover:decoration-g2 cursor-pointer hover:underline hover:decoration-2'>
                                Tyres
                            </p>
                            <p className='hover:decoration-g2 cursor-pointer hover:underline hover:decoration-2'>
                                Infotainment System
                            </p>
                            <p className='hover:decoration-g2 cursor-pointer hover:underline hover:decoration-2'>
                                Other Accessories
                            </p>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav;
