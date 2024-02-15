import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="container mx-auto mt-10 p-8 bg-white dark:bg-gray-900">
            <h1 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">Privacy Policy</h1>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Information We Collect</h2>
                <p className="text-gray-700 dark:text-gray-300">
                    At PROGYAN Education, we collect and manage user data according to the following Privacy Policy.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">How We Use Information</h2>
                <p className="text-gray-700 dark:text-gray-300">
                    We use the collected information for various purposes, including improving our services and providing a personalized experience.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Information Sharing and Disclosure</h2>
                <p className="text-gray-700 dark:text-gray-300">
                    We do not share personal information with third parties unless explicitly stated or required by law.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Security</h2>
                <p className="text-gray-700 dark:text-gray-300">
                    We prioritize the security of your personal information and follow industry best practices to protect it.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Cookies</h2>
                <p className="text-gray-700 dark:text-gray-300">
                    We use cookies to enhance user experience and analyze site traffic. You can control cookies in your browser settings.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Changes to This Privacy Policy</h2>
                <p className="text-gray-700 dark:text-gray-300">
                    We reserve the right to update our Privacy Policy. Any changes will be posted on this page.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Contact</h2>
                <p className="text-gray-700 dark:text-gray-300">
                    If you have any questions about our Privacy Policy, please contact us at <a href="mailto:privacy@progyanedu.com">privacy@progyanedu.com</a>.
                </p>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
