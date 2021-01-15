import React, {useEffect} from 'react';
import Header from 'parts/Header';
import Footer from 'parts/footer';
import LoginForm from 'parts/LoginForm';

export default function Login() {
    useEffect(() => {
    window.scroll(0, 0);
    }, []);
    return (
        <>
            <section className="container mx-auto pt-10 px-4 guest-page">
                <Header onLight></Header>
            </section>
            <section className="container mx-auto pt-10 px-4 guest-page">
                <LoginForm></LoginForm>
            </section>
            <section className="mt-24 bg-indigo-900 py-12 px-4 guest-page">
                <Footer></Footer>
            </section>
        </>
    )
}
