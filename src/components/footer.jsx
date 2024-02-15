import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import logo from '../data/images/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer_container">
                <div class="mb-0 md:mb-0">
                    <a href="/" class="flex items-center w-full h-full">
                        <img src={logo} className='h-32 w-32 flex' alt="Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-left ml-5"> Progyan <br /> Educations </span>
                    </a>
                </div>

                <div className="footer_2">
                    <h4>Permalinks</h4>
                    <ul className="permalinks">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/courses">Courses</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer_3">
                    <h4>Important Links</h4>
                    <ul className="privacy">
                        <li><a href="privacy">Privacy Policy</a></li>
                        <li><a href="terms">Terms and Conditions</a></li>
                        <li><a href="refund">Refund Policy</a></li>
                    </ul>
                </div>

                <div className="footer_4">
                    <h4 title=''>Contact Us</h4>
                    <ul className="privacy">
                        <li><a href="privacy">Privacy Policy</a></li>
                        <li><a href="terms">Terms and Conditions</a></li>
                        <li><a href="refund">Refund Policy</a></li>
                    </ul>

                    <ul className="footer_social items-center flex justify-around">
                        <li>
                            <a href="https://youtube.com/progyaneducations" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <FaYoutube size={30} />
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com/progyaneducations" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <FaInstagram size={30} />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/progyaneducations" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <FaTwitter size={30} />
                            </a>
                        </li>
                        <li>
                            <a href="https://linkedin.com/in/progyaneducations" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <FaLinkedin size={30} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer_copyright mt-0">
                <small>Copyright &copy; PROGYAN EDUCATIONS ESTEEMED TO BE Pvt. Ltd. </small>
            </div>
        </footer>
    );
};

export default Footer;
