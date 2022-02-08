import { useState } from "react";
import { SearchIcon, ChevronDownIcon } from "@heroicons/react/outline";

function VehicleSearch() {
    return (
        <>
            <div className=' my_grid mt-10 flex-col sm:flex md:flex'>
                {/* <Tab.Group>
                    <Tab.List>
                        <div className=' h-14 w-max rounded-xl'>
                            <Tab
                                className={({ selected }) =>
                                    selected
                                        ? "animate__animated animate__pulse bg-b1 h-14 w-28 transform rounded-xl text-sm font-semibold tracking-wider text-white"
                                        : " bg-white_2 text-my_gray2 h-14 w-28 rounded-l-lg p-2 text-sm font-semibold tracking-wider "
                                }>
                                3-Wheeler
                            </Tab>
                            <Tab
                                className={({ selected }) =>
                                    selected
                                        ? "animate__animated animate__pulse bg-b1 h-14 w-28 rounded-xl text-sm font-semibold tracking-wider text-white transition"
                                        : " bg-white_2 text-my_gray2  h-14 w-28 p-2 text-sm font-semibold  tracking-wider "
                                }>
                                2-Wheeler
                            </Tab>
                            <Tab
                                className={({ selected }) =>
                                    selected
                                        ? "animate__animated animate__pulse  bg-b1 h-14 w-28 rounded-xl text-sm font-semibold tracking-wider text-white"
                                        : " bg-white_2 text-my_gray2  h-14 w-28 p-2 text-sm font-semibold  tracking-wider "
                                }>
                                Bicycles
                            </Tab>
                            <Tab
                                className={({ selected }) =>
                                    selected
                                        ? "animate__animated animate__pulse  bg-b1 h-14 w-28 rounded-xl text-sm font-semibold  tracking-wider text-white"
                                        : " bg-white_2 text-my_gray2  h-14  w-28 rounded-r-lg p-2 text-sm font-semibold tracking-wider "
                                }>
                                Cars
                            </Tab>
                        </div>
                    </Tab.List>

                    <Tab.Panels>
                        <section></section>
                        <div className=' flex h-28 w-max flex-row gap-8 rounded-xl bg-white drop-shadow-[0_25px_35px_rgba(0,0,0,0.5)]'>
                            <div className=' m-auto ml-4 items-center justify-center'>
                                <Popover className=' relative'>
                                    <Popover.Button className='text-b1  flex flex-row items-center gap-2 text-lg font-semibold'>
                                        Brand
                                        <ChevronDownIcon className='h-5' />
                                    </Popover.Button>
                                    <Popover.Panel className='bg-b1  absolute z-10 '>
                                        <div className='flex w-full flex-col p-2 text-white '>
                                            <ul>Analytics</ul>
                                            <ul>Engagement</ul>
                                            <ul>Security</ul>
                                            <ul>Integrations</ul>
                                        </div>
                                    </Popover.Panel>
                                </Popover>

                                <p className='text-my_gray2 mt-2 text-sm font-semibold'>
                                    All Brands
                                </p>
                            </div>
                            <span className=' m-auto'>|</span>

                            <div className='m-auto '>
                                <p className='text-b1 flex flex-row items-center gap-2 text-lg font-semibold'>
                                    Price Range
                                    <ChevronDownIcon className='h-5' />
                                </p>
                                <p className='text-my_gray2 mt-2 text-sm font-semibold'>
                                    1 - 5 Lakhs
                                </p>
                            </div>
                            <span className=' m-auto'>|</span>

                            <div className='m-auto justify-start'>
                                <p className='text-b1 flex flex-row items-center gap-2 text-lg font-semibold'>
                                    Vehicle Use
                                    <ChevronDownIcon className=' h-5' />
                                </p>
                                <p className='text-my_gray2 mt-2 text-sm font-semibold'>
                                    Passenger/Cargo
                                </p>
                            </div>
                            <span className=' m-auto'>|</span>

                            <div className='m-auto mr-8'>
                                <div className='bg-b1 hover:bg-g2  m-auto flex h-14 w-14 items-center justify-center rounded-xl text-white hover:shadow-2xl hover:outline-8'>
                                    <SearchIcon className=' h-10 text-center' />
                                </div>
                            </div>
                        </div>
                    </Tab.Panels>
                </Tab.Group> */}
            </div>
        </>
    );
}

export default VehicleSearch;
