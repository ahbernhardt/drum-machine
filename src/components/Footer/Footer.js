import React from "react";
import "./Footer.css";

const Footer = () => (
    <footer className="footer">
        <p>
            Anh Nguyen © 2020
            <span> <span> </span>| </span>
            <span>
                Repo Link: {'  '}
                <a className="footer-link" href="https://github.com/anguyen0208/fcc-drum-machine" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github" />
                </a>
            </span>
        </p>
    </footer>
);

export default Footer;

