import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-8 bg-white dark:bg-gray-900">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        Privacy Policy
      </h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
          Introduction
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          At your company name, we are committed to protecting the privacy of our
          users. This Privacy Policy explains the types of information we collect,
          use, and share when you use our platform.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
          Information We Collect
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          We collect information when you:
        </p>
        <ul className="list-disc ml-4">
          <li>Register for an account</li>
          <li>Enroll in a course</li>
          <li>Interact with platform features</li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300">
          The types of information we collect may include:
        </p>
        <ul className="list-disc ml-4">
          <li>Name</li>
          <li>Email address</li>
          <li>Course enrollment data</li>
          <li>Learning progress data</li>
          <li>Optional demographic information (if applicable)</li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300">
          We handle student data in accordance with relevant regulations, such as
          FERPA.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
          How We Use Information
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          We use the information we collect to:
        </p>
        <ul className="list-disc ml-4">
          <li>Personalize your learning experience</li>
          <li>Provide support and troubleshoot issues</li>
          <li>Improve our platform and course offerings</li>
          <li>Conduct research and analytics (anonymously or in aggregate)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
          Information Sharing and Disclosure
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          We do not share your personal information with third parties without
          your consent, except in the following situations:
        </p>
        <ul className="list-disc ml-4">
          <li>As required by law or legal process</li>
          <li>To protect the rights and safety of ourselves or others</li>
          <li>To third-party service providers who help us operate our platform
            (these providers are obligated to protect your information)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
          Security
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          We take the security of your information seriously and implement
          appropriate measures to protect it, including:
        </p>
        <ul className="list-disc ml-4">
          <li>Encryption of data at rest and in transit</li>
          <li>Access controls and user authentication</li>
          <li>Regular security assessments
            </li>
        </ul>
        </section>


        <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Your Choices
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
                You can manage your account and the information associated with it
                through your account settings.
            </p>
        </section>

        <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Changes to This Policy
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
                We may update this Privacy Policy from time to time. If we make
                significant changes, we will notify you through the platform or by
                email.
            </p>
        </section>
        </div>
    );
}

export default PrivacyPolicy;
