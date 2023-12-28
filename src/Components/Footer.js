import React from 'react'
import { Link } from 'react-router-dom'
import FooterLogo from "../Assets/inotebook-icon.jpg";

export const Footer = () => {
    const footerData = [
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
            <div className="footer-bottom mt-5">
                <footer className="text-gray-600 body-font footer-font">
                    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col footer-div" >
                        <Link to="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 footer-link">
                            <img
                                src={FooterLogo}
                                alt="Footer logo"
                                className="d-inline-block align-text-top footer-img" />
                            <span className="ml-3 text-xl footer-txt-heading">
                                iNotebook
                            </span>
                        </Link>
                        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 footer-txt">
                            © 2023 iNotebook. All Rights Reserved.
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start footer-icons">
                            {footerData.map((icons, id) => {
                                return (
                                    <Link
                                        key={id}
                                        className="btn btn-link btn-floating btn-lg text-light m-1 footer-social-icons"
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
                        </span>
                    </div>
                </footer>
            </div>
        </>
    )
}
