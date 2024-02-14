// src/components/Footer.js
import React from 'react';
import { FaFacebook, FaDiscord, FaTwitter, FaGithub, FaDribbble } from 'react-icons/fa';
import { AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';
import logo from '../data/images/logo.png';

const Footer = () => {
    return (
        <footer class="border bg-white dark:bg-gray-900 ">
            <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div class="md:flex md:justify-between">
                    <div class="mb-0 md:mb-0">
                        <a href="/" class="flex items-center w-full h-full">
                            <img src={logo} className='h-32 w-32 flex' alt="Logo" />
                            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-left ml-5"> Progyan <br /> Educations </span>
                        </a>
                    </div>
                    <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                <li>
                                    <a href="https://tailwindcss.com/" class="hover:underline">Career</a>
                                </li>
                                <li class="mb-4">
                                    <a href="https://flowbite.com/" class="hover:underline">Contact US</a>
                                </li>

                                <li>
                                    <a href="https://tailwindcss.com/" class="hover:underline">Be an Educator</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                <li class="mb-4">
                                    <a href="https://github.com/progyanedu" class="hover:underline ">Github</a>
                                </li>
                                <li>
                                    <a href="https://instagram.com/progyaneducations" class="hover:underline">Instagram</a>
                                </li>
                                <li>
                                    <a href="https://linkedin.com/in/progyaneducations" class="hover:underline">LinkedIn</a>
                                </li>
                            </ul>
                        
                        </div>
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                <li>
                                    <a href="https://tailwindcss.com/" class="hover:underline">About Us</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div class="sm:flex sm:items-center sm:justify-between">
                <div className="flex md:mt-auto sm:justify-center sm:mt-0 w-[50%] md:justify-start gap-5">
                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <FaFacebook size={30} />
                    <span className="sr-only">Facebook page</span>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                    <FaDiscord size={30} />
                    <span className="sr-only">Discord community</span>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                    <FaTwitter size={30} />
                    <span className="sr-only">Twitter page</span>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                    <FaGithub size={30} />
                    <span className="sr-only">GitHub account</span>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                    <FaDribbble size={30} />
                    <span className="sr-only">Dribbble account</span>
                </a>
            </div>
                    {/* <span>™</span> */}
                    
                </div>
                    
            </div>
        </footer>
    );
};

export default Footer;
