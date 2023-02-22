/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Header } from "../components/header";

const Home: NextPage = () => {
  const paragraphStyle = "my-4";

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
                  <p className="mt-6 bg-gradient-to-r from-[#FFFFFF] to-[#AC91F0] bg-clip-text text-center text-3xl text-transparent md:text-5xl">
                    <strong>About Myra Learning Labs</strong>
                  </p>
                </div>
                <div className="mt-6 rounded-2xl bg-[#00000040] p-6 text-center text-white">
                  <p className={paragraphStyle}>
                    We are on the mission to provide 100 million people with
                    free access to education of our enriched history of cultural
                    arts, heritage and to improve our cultural identity.
                  </p>
                  <p className={paragraphStyle}>
                    Since 2020, we’ve helped thousands of people enhance their
                    intercultural communication and dialogue skills with Myra
                    Learning, reinvigorating how we educate our communities and
                    empower ourselves.
                  </p>
                  <p className={paragraphStyle}>
                    We are a group of enthusiastic learners and driven
                    achievers, driven by our vision to unite traditional
                    cultural efforts with the digital world to create
                    extraordinary experiences.
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
