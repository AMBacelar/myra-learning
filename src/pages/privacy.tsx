/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @next/next/no-img-element */
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Header } from "../components/header";

const Home: NextPage = () => {
  const paragraphStyle = "my-4";
  const linkStyle = "ml-3 text-teal-400 hover:underline";

  return (
    <div className="absolute md:relative">
      <Head>
        <title>Myra Learning</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />

        <link
          rel="stylesheet"
          href="https://sibforms.com/forms/end-form/build/sib-styles.css"
        />
      </Head>
      <div className="">
        <main className="flex min-h-screen flex-col items-center justify-center ">
          <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-3xl pt-6 pb-32">
              <div>
                <div>
                  <p className="mt-6 bg-gradient-to-r from-[#FFFFFF] to-[#AC91F0] bg-clip-text text-center text-5xl text-transparent">
                    <strong>Privacy Policy</strong>
                  </p>
                </div>
                <div className="mt-6 rounded-2xl bg-[#00000040] p-6 text-white">
                  <p className={paragraphStyle}>
                    Myra Learning Ltd built the Myra Learning app as a Freemium
                    app. This SERVICE is provided by Myra Learning Ltd at no
                    cost and is intended for use as is.
                  </p>
                  <p className={paragraphStyle}>
                    This page is used to inform visitors regarding our policies
                    with the collection, use, and disclosure of Personal
                    Information if anyone decided to use our Service.
                  </p>
                  <p className={paragraphStyle}>
                    If you choose to use our Service, then you agree to the
                    collection and use of information in relation to this
                    policy. The Personal Information that we collect is used for
                    providing and improving the Service. We will not use or
                    share your information with anyone except as described in
                    this Privacy Policy.
                  </p>
                  <p className={paragraphStyle}>
                    The terms used in this Privacy Policy have the same meanings
                    as in our Terms and Conditions, which are accessible at Myra
                    Learning unless otherwise defined in this Privacy Policy.
                  </p>
                  <p className={paragraphStyle}>
                    <strong>Information Collection and Use</strong>
                  </p>
                  <p className={paragraphStyle}>
                    For a better experience, while using our Service, we may
                    require you to provide us with certain personally
                    identifiable information. The information that we request
                    will be retained by us and used as described in this privacy
                    policy.
                  </p>
                  <div>
                    <p className={paragraphStyle}>
                      The app does use third-party services that may collect
                      information used to identify you.
                    </p>
                    <p className={paragraphStyle}>
                      Link to the privacy policy of third-party service
                      providers used by the app
                    </p>
                    <ul>
                      <li>
                        <a
                          href="https://www.google.com/policies/privacy/"
                          className={linkStyle}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Google Play Services
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://firebase.google.com/policies/analytics"
                          className={linkStyle}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Google Analytics for Firebase
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://firebase.google.com/support/privacy/"
                          className={linkStyle}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Firebase Crashlytics
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://unity3d.com/legal/privacy-policy"
                          className={linkStyle}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Unity
                        </a>
                      </li>
                    </ul>
                  </div>
                  <p className={paragraphStyle}>
                    <strong>Log Data</strong>
                  </p>
                  <p className={paragraphStyle}>
                    We want to inform you that whenever you use our Service, in
                    a case of an error in the app we collect data and
                    information (through third-party products) on your phone
                    called Log Data. This Log Data may include information such
                    as your device Internet Protocol (“IP”) address, device
                    name, operating system version, the configuration of the app
                    when utilizing our Service, the time and date of your use of
                    the Service, and other statistics.
                  </p>
                  <p className={paragraphStyle}>
                    <strong>Cookies</strong>
                  </p>
                  <p className={paragraphStyle}>
                    Cookies are files with a small amount of data that are
                    commonly used as anonymous unique identifiers. These are
                    sent to your browser from the websites that you visit and
                    are stored on your device&apos;s internal memory.
                  </p>
                  <p className={paragraphStyle}>
                    This Service does not use these “cookies” explicitly.
                    However, the app may use third-party code and libraries that
                    use “cookies” to collect information and improve their
                    services. You have the option to either accept or refuse
                    these cookies and know when a cookie is being sent to your
                    device. If you choose to refuse our cookies, you may not be
                    able to use some portions of this Service.
                  </p>
                  <p className={paragraphStyle}>
                    <strong>Service Providers</strong>
                  </p>
                  <p className={paragraphStyle}>
                    We may employ third-party companies and individuals due to
                    the following reasons:
                  </p>
                  <ul>
                    <li>To facilitate our Service;</li>
                    <li>To provide the Service on our behalf;</li>
                    <li>To perform Service-related services; or</li>
                    <li>To assist us in analyzing how our Service is used.</li>
                  </ul>
                  <p className={paragraphStyle}>
                    We want to inform users of this Service that these third
                    parties have access to their Personal Information. The
                    reason is to perform the tasks assigned to them on our
                    behalf. However, they are obligated not to disclose or use
                    the information for any other purpose.
                  </p>
                  <p className={paragraphStyle}>
                    <strong>Security</strong>
                  </p>
                  <p className={paragraphStyle}>
                    We value your trust in providing us your Personal
                    Information, thus we are striving to use commercially
                    acceptable means of protecting it. But remember that no
                    method of transmission over the internet, or method of
                    electronic storage is 100% secure and reliable, and we
                    cannot guarantee its absolute security.
                  </p>
                  <p className={paragraphStyle}>
                    <strong>Links to Other Sites</strong>
                  </p>
                  <p className={paragraphStyle}>
                    This Service may contain links to other sites. If you click
                    on a third-party link, you will be directed to that site.
                    Note that these external sites are not operated by us.
                    Therefore, we strongly advise you to review the Privacy
                    Policy of these websites. We have no control over and assume
                    no responsibility for the content, privacy policies, or
                    practices of any third-party sites or services.
                  </p>
                  <p className={paragraphStyle}>
                    <strong>Children’s Privacy</strong>
                  </p>
                  <div>
                    <p className={paragraphStyle}>
                      These Services do not address anyone under the age of 13.
                      We do not knowingly collect personally identifiable
                      information from children under 13 years of age. In the
                      case we discover that a child under 13 has provided us
                      with personal information, we immediately delete this from
                      our servers. If you are a parent or guardian and you are
                      aware that your child has provided us with personal
                      information, please contact us so that we will be able to
                      do the necessary actions.
                    </p>
                  </div>
                  <p className={paragraphStyle}>
                    <strong>Changes to This Privacy Policy</strong>
                  </p>
                  <p className={paragraphStyle}>
                    We may update our Privacy Policy from time to time. Thus,
                    you are advised to review this page periodically for any
                    changes. We will notify you of any changes by posting the
                    new Privacy Policy on this page.
                  </p>
                  <p className={paragraphStyle}>
                    This policy is effective as of 2022-01-03
                  </p>
                  <p className={paragraphStyle}>
                    <strong>Contact Us</strong>
                  </p>
                  <p className={paragraphStyle}>
                    If you have any questions or suggestions about our Privacy
                    Policy, do not hesitate to contact us at
                    support@myralearning.io.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer>
          <div className="flex flex-col items-center justify-between bg-[#00000066] px-10 py-5 text-white">
            <div className="mb-3">© 2023 Myra Learning Labs</div>
            <div className="">
              <Link href="/privacy">Privacy Policy</Link>
              {" | "}
              <Link href="/terms">T&C&apos;s</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
