import React from 'react';

const TermsAndConditions = () => {
    return (
        <div className="container mx-auto mt-10 p-8 bg-white dark:bg-gray-900">
            <h1 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">Terms and Conditions</h1>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Introduction</h2>
                <p className="text-gray-700 dark:text-gray-300">
                    Welcome to PROGYAN Education's Terms and Conditions. These terms and conditions outline the rules and
                    regulations for the use of PROGYAN Education's Website, located at www.progyanedu.com.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Intellectual Property Rights</h2>
                <p className="text-gray-700 dark:text-gray-300">
                    Other than the content you own, under these Terms, PROGYAN Education and/or its licensors own all
                    the intellectual property rights and materials contained in this Website.
                </p>
            </section>

            {/* Add more sections as needed for your Terms and Conditions content */}

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Contact</h2>
                <p className="text-gray-700 dark:text-gray-300">
                    If you have any questions about these Terms, please contact us at <a href="mailto:info@progyanedu.com">info@progyanedu.com</a>.
                </p>
            </section>
        </div>
    );
};

export default TermsAndConditions;
