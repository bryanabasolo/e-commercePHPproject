import React from 'react';


const Time = () => {
    return (
    <>
    <section className="pt-1 pb-20">
    <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center mb-10">
            <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-2xl font-semibold text-red-500">
            Library Hours
            </h2>
            </div>
        </div>
    
        <div className="text-center">
            <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-9/12 px-4">
            <h3 className="fas fa-briefcase text-lg font-semibold text-gray-800">
            MONDAY AND SATURDAY
            </h3>
                <p className="mb-4 mt-2 text-m leading-relaxed text-gray-800">
                8:00 AM - 5:00 PM
                </p>

            <h3 className="fas fa-briefcase text-lg font-semibold text-gray-800">
            TUESDAY TO FRIDAY
            </h3>
                <p className="mb-2 mt-2 text-m leading-relaxed text-gray-800">
                7:00 AM - 7:00 PM
                </p>

            </div>
            </div>
        </div>

    </div>
    </section>
        
    </>
    )
}

export default Time;
