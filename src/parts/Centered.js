import React from 'react';


export default function Centered({children}) {
    return (
        <section className="h-screen flex justify-center flex-col items-center  relative z-50 bg-white">
            <h1 className="text-3xl text-gray-900 mt-12">

                <div className="text-lg text-gray-600 mt-4 w-full mb-8 lg:w-8/12 xl:w-6/12 mx-auto text-center">{children}</div>
            </h1>
            
        </section>
    )
}
