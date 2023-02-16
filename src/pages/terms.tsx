/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @next/next/no-img-element */
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

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
        <div className="relative">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link className="flex" href="/">
                  <img
                    className="h-8 w-auto sm:h-10"
                    src="/static/images/purple-logo.png"
                    alt=""
                  />
                  <span className="ml-3 text-3xl text-white">
                    Myra Learning
                  </span>
                </Link>
              </div>
              <nav className="hidden space-x-10 md:flex"></nav>
              <div className="flex flex-1 items-center justify-end lg:w-0"></div>
            </div>
          </div>
        </div>
        <main className="flex min-h-screen flex-col items-center justify-center ">
          <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-3xl pt-6 pb-32">
              <div>
                <div>
                  <p className="mt-6 bg-gradient-to-r from-[#FFFFFF] to-[#AC91F0] bg-clip-text text-center text-5xl text-transparent">
                    <strong>Terms and Conditions</strong>
                  </p>
                </div>
                <div className="mt-6 rounded-2xl bg-[#00000040] p-6 text-white">
                  <p className={paragraphStyle}>
                    By downloading or using the app, these terms will
                    automatically apply to you – you should make sure therefore
                    that you read them carefully before using the app. You’re
                    not allowed to copy or modify the app, any part of the app,
                    or our trademarks in any way. You’re not allowed to attempt
                    to extract the source code of the app, and you also
                    shouldn’t try to translate the app into other languages or
                    make derivative versions. The app itself, and all the
                    trademarks, copyright, database rights, and other
                    intellectual property rights related to it, still belong to
                    Myra Learning Ltd.
                  </p>
                  <p className={paragraphStyle}>
                    Myra Learning Ltd is committed to ensuring that the app is
                    as useful and efficient as possible. For that reason, we
                    reserve the right to make changes to the app or to charge
                    for its services, at any time and for any reason. We will
                    never charge you for the app or its services without making
                    it very clear to you exactly what you’re paying for.
                  </p>
                  <p className={paragraphStyle}>
                    The Myra Learning app stores and processes personal data
                    that you have provided to us, to provide our Service. It’s
                    your responsibility to keep your phone and access to the app
                    secure. We therefore recommend that you do not jailbreak or
                    root your phone, which is the process of removing software
                    restrictions and limitations imposed by the official
                    operating system of your device. It could make your phone
                    vulnerable to malware/viruses/malicious programs, compromise
                    your phone’s security features and it could mean that the
                    Myra Learning app won’t work properly or at all.
                  </p>
                  <div>
                    <p className={paragraphStyle}>
                      The app does use third-party services that declare their
                      Terms and Conditions.
                    </p>
                    <p className={paragraphStyle}>
                      Link to Terms and Conditions of third-party service
                      providers used by the app
                    </p>
                    <ul>
                      <li>
                        <a
                          className={linkStyle}
                          href="https://policies.google.com/terms"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Google Play Services
                        </a>
                      </li>
                      <li>
                        <a
                          className={linkStyle}
                          href="https://firebase.google.com/terms/analytics"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Google Analytics for Firebase
                        </a>
                      </li>
                      <li>
                        <a
                          className={linkStyle}
                          href="https://firebase.google.com/terms/crashlytics"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Firebase Crashlytics
                        </a>
                      </li>
                      <li>
                        <a
                          className={linkStyle}
                          href="https://unity3d.com/legal/terms-of-service"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Unity
                        </a>
                      </li>
                    </ul>
                  </div>
                  <p className={paragraphStyle}>
                    You should be aware that there are certain things that Myra
                    Learning Ltd will not take responsibility for. Certain
                    functions of the app will require the app to have an active
                    internet connection. The connection can be Wi-Fi or provided
                    by your mobile network provider, but Myra Learning Ltd
                    cannot take responsibility for the app not working at full
                    functionality if you don’t have access to Wi-Fi, and you
                    don’t have any of your data allowance left.
                  </p>
                  <p className={paragraphStyle}>
                    If you’re using the app outside of an area with Wi-Fi, you
                    should remember that the terms of the agreement with your
                    mobile network provider will still apply. As a result, you
                    may be charged by your mobile provider for the cost of data
                    for the duration of the connection while accessing the app,
                    or other third-party charges. In using the app, you’re
                    accepting responsibility for any such charges, including
                    roaming data charges if you use the app outside of your home
                    territory (i.e. region or country) without turning off data
                    roaming. If you are not the bill payer for the device on
                    which you’re using the app, please be aware that we assume
                    that you have received permission from the bill payer for
                    using the app.
                  </p>
                  <p className={paragraphStyle}>
                    Along the same lines, Myra Learning Ltd cannot always take
                    responsibility for the way you use the app i.e. You need to
                    make sure that your device stays charged – if it runs out of
                    battery and you can’t turn it on to avail the Service, Myra
                    Learning Ltd cannot accept responsibility.
                  </p>
                  <p className={paragraphStyle}>
                    With respect to Myra Learning Ltd’s responsibility for your
                    use of the app, when you’re using the app, it’s important to
                    bear in mind that although we endeavor to ensure that it is
                    updated and correct at all times, we do rely on third
                    parties to provide information to us so that we can make it
                    available to you. Myra Learning Ltd accepts no liability for
                    any loss, direct or indirect, you experience as a result of
                    relying wholly on this functionality of the app.
                  </p>
                  <p className={paragraphStyle}>
                    At some point, we may wish to update the app. The app is
                    currently available on Android &amp; iOS – the requirements
                    for the both systems(and for any additional systems we
                    decide to extend the availability of the app to) may change,
                    and you’ll need to download the updates if you want to keep
                    using the app. Myra Learning Ltd does not promise that it
                    will always update the app so that it is relevant to you
                    and/or works with the Android &amp; iOS version that you
                    have installed on your device. However, you promise to
                    always accept updates to the application when offered to
                    you, We may also wish to stop providing the app, and may
                    terminate use of it at any time without giving notice of
                    termination to you. Unless we tell you otherwise, upon any
                    termination, (a) the rights and licenses granted to you in
                    these terms will end; (b) you must stop using the app, and
                    (if needed) delete it from your device.
                  </p>
                  <p className={paragraphStyle}>
                    <strong>Changes to This Terms and Conditions</strong>
                  </p>
                  <p className={paragraphStyle}>
                    We may update our Terms and Conditions from time to time.
                    Thus, you are advised to review this page periodically for
                    any changes. We will notify you of any changes by posting
                    the new Terms and Conditions on this page.
                  </p>
                  <p className={paragraphStyle}>
                    These terms and conditions are effective as of 2022-01-03
                  </p>
                  <p className={paragraphStyle}>
                    <strong>Contact Us</strong>
                  </p>
                  <p className={paragraphStyle}>
                    If you have any questions or suggestions about our Terms and
                    Conditions, do not hesitate to contact us at
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
