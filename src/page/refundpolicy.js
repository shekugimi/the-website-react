import React from 'react';

const RefundPolicy = () => {
    return (
        <div className="container mx-auto mt-10 p-8 bg-white dark:bg-gray-900">
            <h1 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">Refund Policy</h1>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Refund Eligibility</h2>
                <p className="text-gray-700 dark:text-gray-300">
                    Our refund policy applies to eligible purchases made on PROGYAN Education's platform.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Refund Process</h2>
                <p className="text-gray-700 dark:text-gray-300">
                    If you are eligible for a refund, the process will be initiated according to our refund policy.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Refund Timeline</h2>
                <p className="text-gray-700 dark:text-gray-300">
                    The time it takes to process a refund depends on various factors. We aim to complete the process as quickly as possible.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Refund Exceptions</h2>
                <p className="text-gray-700 dark:text-gray-300">
                    Certain circumstances may exempt your purchase from being eligible for a refund.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Contact</h2>
                <p className="text-gray-700 dark:text-gray-300">
                    If you have any questions about our Refund Policy, please contact us at <a href="mailto:refund@progyanedu.com">refund@progyanedu.com</a>.
                </p>
            </section>
        </div>
    );
};

export default RefundPolicy;
