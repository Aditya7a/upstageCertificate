import React, { useState } from "react";

function Search() {
    const types = ["3-wheelers", "2-wheelers", "Bicycles", "Cars"];
    const active = "opacity-1";

    const [style, setStyle] = useState(types[0]);

    const changeStyle = () => {
        console.log("you just clicked");

        setStyle(console.log({ types }));
    };
    return (
        <>
            <div className='my_grid mt-2'>
                <section className='col-start-2 flex flex-col'>
                    <div className='bg-white_2 text-my_gray2 col-start-2 flex h-16 w-max flex-row rounded-lg text-sm font-semibold active:bg-white'>
                        <div className='focus:ring-blue-800" hover:bg-b1 bg-white_2 m-auto gap-2 rounded-lg px-4 py-2.5 text-center text-sm hover:text-white'>
                            {types.map((type) => (
                                <button
                                    key={type}
                                    id={type}
                                    className='px-4 py-2.5'
                                    onClick={changeStyle}>
                                    {type}
                                </button>
                            ))}
                            {/* <div>
                                {types.map((type) => (
                                    <button
                                        className='px-4 py-2.5'
                                        key={type}
                                        active={active === type}
                                        onClick={() => setStyle(type)}>
                                        {type}
                                    </button>
                                ))}
                            </div> */}
                        </div>
                    </div>

                    <div className='mt-2  w-full  sm:mx-auto'>
                        <div className=' w-max rounded-lg bg-white py-8 px-6 shadow sm:px-10'>
                            <form
                                className='mb-0 space-y-6'
                                action='#'
                                method='POST'>
                                <div className='flex flex-row gap-14'>
                                    <div>
                                        <label
                                            htmlFor='countries'
                                            className='mb-2 block text-base font-medium text-gray-900 dark:text-gray-400'>
                                            Select your country
                                        </label>
                                        <select
                                            id='countries'
                                            className='text-my_gray2 focus:ring-b1 focus:border-b1 block w-full rounded-lg border border-white p-2.5 text-base shadow-none'>
                                            <option className='py-2'>
                                                Tesla
                                            </option>
                                            <option>Mahindra</option>
                                            <option>Suzuki</option>
                                            <option>Tesla</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor='countries'
                                            className='mb-2 block text-base font-medium text-gray-900 dark:text-gray-400'>
                                            Select your country
                                        </label>
                                        <select
                                            id='countries'
                                            className='text-my_gray2 focus:ring-b1 focus:border-b1 block w-full rounded-lg border border-white p-2.5 text-base shadow-none'>
                                            <option className='py-2'>
                                                Tesla
                                            </option>
                                            <option>Mahindra</option>
                                            <option>Suzuki</option>
                                            <option>Tesla</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor='countries'
                                            className='mb-2 block text-base font-medium text-gray-900 dark:text-gray-400'>
                                            Select your country
                                        </label>
                                        <select
                                            id='countries'
                                            className='text-my_gray2 focus:ring-b1 focus:border-b1 block w-full rounded-lg border border-white p-2.5 text-base shadow-none'>
                                            <option className='py-2'>
                                                Tesla
                                            </option>
                                            <option>Mahindra</option>
                                            <option>Suzuki</option>
                                            <option>Tesla</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor='countries'
                                            className='mb-2 block text-base font-medium text-gray-900 dark:text-gray-400'>
                                            Select your country
                                        </label>
                                        <select
                                            id='countries'
                                            className='text-my_gray2 focus:ring-b1 focus:border-b1 block w-full rounded-lg border border-white p-2.5 text-base shadow-none'>
                                            <option className='py-2'>
                                                Tesla
                                            </option>
                                            <option>Mahindra</option>
                                            <option>Suzuki</option>
                                            <option>Tesla</option>
                                        </select>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Search;
