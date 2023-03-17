import React from 'react'

const Faculty = () => {
    return (
    <>

    {/*Faculty Start*/}

    <section className="pt-5 pb-20">
        <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-2xl font-semibold text-red-500">
            DLRC-ICT/Faculty Committee
            </h2>
            </div>
        </div>
        <div className="flex flex-wrap">
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div className="px-6">
                <img
                alt="..."
                src={"img/Ariate.jpg"}
                className="shadow-lg rounded-full max-w-full mx-auto"
                style={{ maxWidth: "120px" }}
                />
                <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">
                Laila R. Ariate
                </h5>
                <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                Chief Librarian
                </p>
                </div>
            </div>
            </div>

            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div className="px-6">
                <img
                alt="..."
                src={"img/Dioneda.jpg"}
                className="shadow-lg rounded-full max-w-full mx-auto"
                style={{ maxWidth: "120px" }}
                />
                <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">
                Jerica V. Dioneda
                </h5>
                <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                Cataloguing and Indexing
                </p>
                
                </div>
            </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div className="px-6">
                <img
                alt="..."
                src={"img/Dimapilis.jpg"}
                className="shadow-lg rounded-full max-w-full mx-auto"
                style={{ maxWidth: "120px" }}
                />
                <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">
                Cathryn A. Dimapilis
                </h5>
                <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                Grade School Library
                </p>
                
                </div>
            </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div className="px-6">
                <img
                alt="..."
                src={"img/Abagair.jpg"}
                className="shadow-lg rounded-full max-w-full mx-auto"
                style={{ maxWidth: "120px" }}
                />
                <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">
                Edwin Abagair
                </h5>
                <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                Library Assistant
                </p>
                
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>

            
    {/*Faculty End*/}

    </>
    )
}

export default Faculty;
