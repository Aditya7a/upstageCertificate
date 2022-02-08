import React, { useState, useRef } from "react";
import Nav from "./Nav";
import { SliderData } from "./SliderData";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import VehicleSearch from "./VehicleSearch";

function Hero({ slides }) {
    const [current, setCurrent] = useState(0);
    const timeoutRef = useRef(null);
    const length = slides.length;
    const delay = 2500;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <>
            <Nav />

            <section className='my_grid mt-4 flex items-center justify-center'>
                <ChevronLeftIcon
                    className='hover:text-g2 absolute top-[50%] left-24 z-10 h-10 cursor-pointer select-none text-5xl text-white'
                    onClick={prevSlide}
                />
                <ChevronRightIcon
                    className='hover:text-g2 absolute top-[50%] right-24 z-10 h-10 cursor-pointer select-none text-5xl text-white '
                    onClick={nextSlide}
                />
                <div className='top-0 col-span-full items-center justify-center'>
                    {SliderData.map((slide, index) => {
                        return (
                            <div key={index} className='object-fill'>
                                {index === current && (
                                    <img
                                        src={slide.image}
                                        alt='image'
                                        className='w-screen rounded-xl object-center'
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>

            <section>
                <VehicleSearch />
            </section>
        </>
    );
}

export default Hero;
