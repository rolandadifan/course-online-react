import React, {useState,useEffect} from 'react';
import courses from 'constan/api/courses';
import ServerError from 'pages/500';
import Loading from 'pages/Loading';

export default function Joined({history, match}) {

    const [state, setstate] = useState(() => ({
        isLoading: true,
        isError: false,
        data: {}
    }))

    useEffect(() => {
        courses.details(match.params.class)
        .then(res => {
            setstate({isLoading:false, isError:false, data:res})
        })
        .catch(err => {
            setstate({isLoading:false, isError:true, data: null})
        })
    }, [match.params.class])
     if(state.isLoading) return (<Loading></Loading>)
        if(state.isError) return (<ServerError></ServerError>)
        
    function joining(){
       courses.join(match.params.class).then(res => {
           history.push(`/courses/${match.params.class}`)
       }).catch(err => {
           if(err?.response?.data?.message == "user already take this course")
           history.push(`/courses/${match.params.class}`)
       })
    }

    return (
        <section className="h-screen flex flex-col items-center mt-24">
            <img src={`${process.env.PUBLIC_URL}/images/illustration-joined.jpg`} alt=""/>
            <h1 className="text-3xl text-gray-900 mt-12">
                Welcome to Class
            </h1>
            <p className="text-lg text-gray-600 mt-4 mtb-8 lg:w-3/12 xl:w-2/12 mx-auto text-center">
                You have successfully joined our <strong>{state?.data?.name ?? "class name"}</strong> class
            </p>
           <span onClick={joining} className="cursor-pointer bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-4 mt-10" to="/">
                    Start Learn
                </span>
        </section>
    )
}
