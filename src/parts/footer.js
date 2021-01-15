import React from 'react';
import {Link} from 'react-router-dom';


export default function footer() {
    function submit(){}

    
    return (
        <footer className="container mx-auto px-4">
            <div className="flex justify-between flex-wrap">
                <div className="w-full md:w-1/6 mb-8 md:mb-0">
                    <h6 className="text-white">Company</h6>
                    <ul className="mt-4">
                        <li className="mt-2">
                            <Link to="" className="text-indigo-600 hover:text-teal-500 hover:underline">Developer</Link>
                        </li>
                        <li className="mt-2">
                            <Link to="" className="text-indigo-600 hover:text-teal-500 hover:underline">Career</Link>
                        </li>
                        <li className="mt-2">
                            <Link to="" className="text-indigo-600 hover:text-teal-500 hover:underline">Our Story</Link>
                        </li>
                        <li className="mt-2">
                            <Link to="" className="text-indigo-600 hover:text-teal-500 hover:underline">New Soon</Link>
                        </li>
                    </ul>
                </div>
                <div className="w-full md:w-1/6 mb-8 md:mb-0">
                    <h6 className="text-white">Student</h6>
                    <ul className="mt-4">
                        <li className="mt-2">
                            <Link to="" className="text-indigo-600 hover:text-teal-500 hover:underline">Get Scholarship</Link>
                        </li>
                        <li className="mt-2">
                            <Link to="" className="text-indigo-600 hover:text-teal-500 hover:underline">Get Path Skill</Link>
                        </li>
                        <li className="mt-2">
                            <Link to="" className="text-indigo-600 hover:text-teal-500 hover:underline">All Fectures</Link>
                        </li>
                        <li className="mt-2">
                            <Link to="" className="text-indigo-600 hover:text-teal-500 hover:underline">Refund Policy</Link>
                        </li>
                    </ul>
                </div>
                <div className="w-full md:w-1/6 mb-8 md:mb-0">
                    <h6 className="text-white">Touch Us</h6>
                    <ul className="mt-4">
                        <li className="mt-2">
                            <Link to="" className="text-indigo-600 hover:text-teal-500 hover:underline">Courses JKT</Link>
                        </li>
                        <li className="mt-2">
                            <Link to="" className="text-indigo-600 hover:text-teal-500 hover:underline">jakarta Indonesia</Link>
                        </li>
                        <li className="mt-2">
                            <Link to="" className="text-indigo-600 hover:text-teal-500 hover:underline">jl. las vegas no.315</Link>
                        </li>
                        <li className="mt-2">
                            <Link to="" className="text-indigo-600 hover:text-teal-500 hover:underline">+62 8999999</Link>
                        </li>
                    </ul>
                </div>
                <div className="w-full md:w-2/6 mb-8 md:mb-0">
                    <h6 className="text-white">promotions</h6>
                    <p className="mt-4 text-indigo-500">Submit your email for new updates</p>
                    <form onSubmit={submit} className="mt-5">
                        <input type="text" className="bg-white focus:outline-none border-0 px-6 py-3 w-1/2 md:w-1/2" placeholder="your email address"/>
                        <button className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-4 py-3 md:px-6">Daftar Now</button>
                    </form>
                </div>
            </div>
            <div className="border-t pt-8 mt-8 border-purple-700 text-center">
                <p className="text-indigo-600">2021 Copyright by Rolanda Difandana. All Right Reserved</p>
            </div>
        </footer>
    )
}
