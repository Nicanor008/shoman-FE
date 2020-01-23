import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PrivacyPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="privacyWrapper">
      <h2>Privacy Policy</h2>

      <p>
        Shoman values its users' privacy. This Privacy Policy ("Policy") will
        help you understand how we collect and use personal information from
        those who visit our website or make use of our online facilities and
        services, and what we will and will not do with the information we
        collect. Our Policy has been designed and created to ensure those
        affiliated with Shoman of our commitment and realization of our
        obligation not only to meet, but to exceed, most existing privacy
        standards. We reserve the right to make changes to this Policy at any
        given time. This Policy applies to Shoman and it governs any and all
        data collection and usage by us. If you visit a website that we mention
        or link to, be sure to review its privacy policy before providing the
        site with information. It is highly recommended and suggested that you
        review the privacy policies and statements of any website you choose to
        use or frequent to better understand the way in which websites garner,
        make use of and share the information collected. <br />
        <br />
        Specifically, this Policy will inform you of the following:</p>
        <ul>
          <li>
            What personally identifiable information is collected from you
            through our website;
          </li>
          <li>
            Why we collect personally identifiable information and the legal
            basis for such collection
          </li>
          <li>
            How we use the collected information and with whom it may be shared
          </li>
          <li>
            What choices are available to you regarding the use of your data
          </li>
          <li>
            The security procedures in place to protect the misuse of your
            information.
          </li>
        </ul>
        <p>
        {/* <b> */}
          If you have additional questions or require more information about our
          Privacy Policy, do not hesitate to send us an email, shomancodes@gmail.com.
        {/* </b> */}
      </p>

      <h3>Information We Collect</h3>

      <p>
        We collect the following personal data:</p>
        <ul>
          <li>Email - for communication</li>
          <li>Name - for identication</li>
          <li>
            Age group - not your specific age, just the age group with a
            difference of four years. This helps us to understand our audience
          </li>
          <li>Occupation</li>
        </ul>
        <p>
        This information is collected through a google form document. We do
        follow{" "}
        <a href="https://policies.google.com/privacy"> google docs privacy</a>{" "}
        agreement. Throughout the programme, we keep your personal information
        secret to us only and we don't share your email outside Shoman. The
        email will be used for constant communication throughout the mentorship
        programme.
      </p>

      <h3>Third Party Privacy Policies</h3>

      <p>
        Shoman's Privacy Policy does not apply to other websites. Thus, we are
        advising you to consult the respective Privacy Policies of these
        third-party servers for more detailed information. It may include their
        practices and instructions about how to opt-out of certain options.
      </p>

      <h3>Children under the age of 8</h3>

      <p>
        Shoman is not directed to, and does not knowingly
        collect personal identifiable information from, children under the age
        of eight (8). If it is determined that such information has been
        inadvertently collected on anyone under the age of eight (8), we
        shall immediately take the necessary steps to ensure that such
        information is deleted from our system's database, or in the
        alternative, that verifiable parental consent is obtained for the use
        and storage of such information. Anyone under the age of eight (8)
        must seek and obtain parent or guardian permission to use this website.
      </p>

      <h3>Online Privacy Policy Only</h3>

      <p>
        This Privacy Policy applies only to our online activities and is valid
        for visitors to our website with regards to the information that they
        shared and/or collect in Shoman. This policy is not applicable to any
        information collected offline or via channels other than this website.
      </p>

      <h3>Consent</h3>

      <p>
        By using our website, you hereby consent to our Privacy Policy.
      </p>
    </div>
  </Layout>
)

export default PrivacyPage
