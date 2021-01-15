import React,{useEffect} from 'react';
import Sidebar from 'parts/sidebar';
import formatThousand from 'helpers/formatThousand';
import formatDate from 'helpers/formatDate';

export default function Transaction() {
    useEffect(() => {
        window.scroll(0,0)
    }, [])
    const items = [
        {id:"1", slug:"2", image:"https://fakeimg.pl/640x360", name: "Start Golang", levelType:"Profesional", price:480000, date:"2020-12-12"},
        {id:"2", slug:"2", image:"https://fakeimg.pl/640x360", name: "Start Javascript", levelType:"Beginer", price:480000, date:"2020-10-10"},
    ]
    return (
        <div className="flex">
            <Sidebar></Sidebar>
            <main className="flex-1">
                <div className="px-4 sm:px-16">
                    <section className="flex flex-col mt-8 pl-12 sm:pl-0">
                        <h1 className="text-xl sm:text-4xl text-gray-900 font-medium">Transaction</h1>
                        <p className="text-sm sm:text-lg text-gray-600">My Transaction</p>
                    </section>
                    <section className="flex flex-wrap flex-col mt-8">
                        {
                            items?.length > 0 ? items.map(item => {
                                return <div key={item.id} className="flex flex-wrap justify-start items-center -mx-4 mt-5 mb-4 sm:mb-6">
                                    <div className="w-full sm:w-2/12 px-4" >
                                        <img src={item?.image ?? "image"} alt="images"/>
                                    </div>
                                    <div className="w-auto sm:w-3/12 px-4">
                                        <h6 className="text-gray-900 text-lg">{item?.name ?? ""}</h6>
                                        <p className="text-gray-600">{item?.levelType ?? ""}</p>
                                    </div>
                                    <div className="w-full sm:w-2/12 px-4">
                                        <h6 className="text-gray-900 text-lg">Rp.{formatThousand(item?.price ?? 0)}</h6>
                                    </div>
                                    <div className="w-auto sm:w-2/12 px-4">
                                        <h6 className="text-gray-900 text-lg">{item?.date ? formatDate(item?.date) : "-"}</h6>
                                    </div>
                                    <div className="w-3/12 px-4 flex justify-center">
                                         <button  className="bg-gray-300 hover:bg-gray-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 whitespace-nowrap ml-4 sm:ml-0 sm:mt-4 mt-0">
                                            Lihat Kelas
                                        </button>
                                    </div>
                                </div>
                            }) : "no transaction"
                        }
                    </section>
                </div>
            </main>
        </div>
    )
}
