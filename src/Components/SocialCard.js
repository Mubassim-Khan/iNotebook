import React from 'react'
import { Link } from 'react-router-dom'

export const SocialCard = () => {
    const data = [
        {
            id: 1,
            className: "fab fa-facebook-f",
            to: "https://www.facebook.com/mubassimahmed.khan.7/",
            title: "Facebook"
        },
        {
            id: 2,
            className: "fab fa-google",
            to: "mailto:mubassimkhan@gmail.com",
            title: "Google Mail"
        },
        {
            id: 3,
            className: "fab fa-instagram",
            to: "https://www.instagram.com/mubassimkhan_08/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D",
            title: "Instagram"
        },
        {
            id: 4,
            className: "fab fa-linkedin",
            to: "https://www.linkedin.com/in/mubassim-ahmed-khan/",
            title: "LinkedIn"
        },
        {
            id: 5,
            className: "fab fa-github",
            to: "https://www.github.com/Mubassim-Khan",
            title: "Github"
        }
    ]

    return (
        <>
            <div>
                <div className="container text-center outer-contact-card">
                    <div className="card border-light text-bg-dark mb-3 mt-2 inner-contact-card">
                        <div className="card-body">
                            <div className="container pt-1">
                                <section className="mb-2">
                                    {data.map((icons, id) => {
                                        return (
                                            <Link
                                                key={id}
                                                className="btn btn-link btn-floating btn-lg text-light m-1"
                                                to={icons.to}
                                                role="button"
                                                rel="noopener noreferrer"
                                                target="_blank"
                                                title={icons.title}
                                                data-mdb-ripple-color="dark"
                                            ><i className={icons.className}></i>
                                            </Link>
                                        )
                                    })}
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="page-heading-text-below">Our team is always looking for ways to enhance the customer experience on iNotebook and we appreciate any feedback you can provide.<br />Thank you for choosing iNotebook. We look forward to hearing from you!</p>
            </div>
        </>
    )
}
