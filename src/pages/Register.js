import React, {useEffect} from 'react';
import Header from 'parts/Header';
import Footer from 'parts/footer';
import RegisterForm from 'parts/RegisterForm'

export default function Register() {
    useEffect(() => {
        window.scroll(0,0);
    }, [])
    return (
        <>
            <section className="container mx-auto pt-10 px-4 guest-page relative z-10">
                <Header></Header>
            </section>
            <section className="container mx-auto pt-10 px-4">
                <RegisterForm></RegisterForm>
            </section>
            <section className="mt-24 bg-indigo-900 py-12">
                <Footer></Footer>
            </section>
        </>
    )
}
