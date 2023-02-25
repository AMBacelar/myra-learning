/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @next/next/no-img-element */
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useContext } from "react";
import { ModalContext, ModalType } from "./_app";

const Home: NextPage = () => {
  const { setModalType, setShowModal } = useContext(ModalContext);
  return (
    <div className="absolute w-full md:relative">
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
      <div className="w-full">
        <main className="flex w-full flex-col items-center justify-center px-6 lg:px-8">
          <div className="relative">
            <div className="mx-auto pt-20 pb-32 sm:pt-48 sm:pb-40">
              <div>
                <div>
                  <p className="mt-6 text-center text-lg leading-8 text-white">
                    <strong>
                      THE WORLD’S #1 AI POWERED CULTURE LEARNING APP
                    </strong>
                  </p>
                  <p className="mt-6 bg-gradient-to-r from-[#FFFFFF] to-[#AC91F0] bg-clip-text text-center text-5xl text-transparent md:text-8xl">
                    <strong>65,000+</strong>
                  </p>
                  <p className="mt-6 text-center text-4xl leading-8 text-white">
                    <strong>Users on the waitlist</strong>
                  </p>
                  <button
                    className="my-10"
                    onClick={() => {
                      setModalType(ModalType.video);
                      setShowModal(true);
                    }}
                  >
                    <img
                      className="z-10 w-[566px] lg:w-[800px]"
                      src="/static/images/video-image.png"
                      alt=""
                    />
                  </button>
                  <p className="mt-6 text-center text-lg leading-8 text-white">
                    A NEXT GEN LEARNING EXPERIENCE
                  </p>
                </div>
              </div>
            </div>
          </div>
          <section className="">
            <div className="container mx-auto ">
              <div className="lg:flex lg:items-center">
                <div className="flex lg:w-1/2 lg:items-center lg:justify-center">
                  <img
                    className="z-10 w-[28rem] lg:w-[566px]"
                    src="/static/images/app-screens.png"
                    alt=""
                  />
                </div>
                <div className="w-full space-y-12 lg:w-1/2 ">
                  <div className="md:-ml-14 md:flex md:items-start">
                    <div
                      className="mt-4 rounded-[40px] border-transparent py-8 px-10 text-center md:mx-4 md:mt-0 lg:text-left"
                      style={{
                        background:
                          "linear-gradient(107.82deg, rgba(232, 127, 5, 0.37) -3.43%, rgba(145, 106, 49, 0.56) 29.8%, rgba(108, 34, 122, 0.57) 62.96%, #9641BD 101.38%)",
                      }}
                    >
                      <h2 className="text-3xl font-semibold capitalize text-white md:text-6xl">
                        Play The World
                      </h2>

                      <p className="my-5 text-xl text-white md:text-3xl">
                        EXPLORE SOMETHING NEW
                      </p>
                      <button
                        onClick={() => {
                          setModalType(ModalType.form);
                          setShowModal(true);
                        }}
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md border bg-[#FFFFFF26] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#FFFFFF77]"
                      >
                        Join Waitlist
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="mt-12" />
          <section>
            <div className="container mx-auto">
              <div
                className="mb-40 rounded-[40px] border border-white py-14 px-10 lg:px-60"
                style={{
                  background:
                    "linear-gradient(107.82deg, rgba(80, 29, 67, 0.246) 4.16%, rgba(34, 29, 50, 0.6) 29.8%, rgba(34, 29, 50, 0.6) 62.96%, rgba(80, 29, 67, 0.348) 96.69%)",
                }}
              >
                <h2 className="bg-gradient-to-r from-[#FFFFFF] via-[#FFA4CB] to-[#9B8EF8] bg-clip-text text-center text-3xl font-semibold capitalize text-transparent lg:text-5xl">
                  Cultural Learning <br /> Gamified
                </h2>
              </div>
            </div>
          </section>
          <div className="mt-4" />
          <section>
            <div className="container mx-auto">
              <div className="lg:flex lg:items-center">
                <div className="space-y-12 md:w-[28rem]">
                  <div className="md:-mx-4 md:flex md:items-start">
                    <div className="mt-4 md:mx-4 md:mt-0 lg:mr-10">
                      <p className="mt-3 text-xl text-white">FEATURES</p>
                      <h3 className="text-4xl font-semibold capitalize text-white">
                        30+ cultural games!
                      </h3>

                      <p className="mt-3 text-lg text-white">
                        Stay sharp, establish identity, and increase your
                        cultural awareness with 30+ mini games and challenges
                        that are designed to be exciting, simple and fun!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:flex lg:w-1/2 lg:items-center lg:justify-center">
                  <img
                    className="md:w-[28rem]"
                    src="/static/images/hands-and-mobile.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
          <div className="mt-14" />
          <section>
            <div className="container mx-auto">
              <div className="lg:flex lg:items-center">
                <div className="mr-10 hidden lg:flex">
                  <img
                    className="md:w-[28rem]"
                    src="/static/images/ai-brain.png"
                    alt=""
                  />
                </div>
                <div className="space-y-12 md:w-[28rem]">
                  <div className="md:-mx-4 md:flex md:items-start">
                    <div className="mt-4 md:mx-4 md:mt-0">
                      <h3 className="text-4xl font-semibold capitalize text-white">
                        Powered by AI
                      </h3>

                      <p className="mt-3 text-lg text-white">
                        As you play, our AI-powered platform will adjust to your
                        skills and learning interests. You can measure your
                        performance across skill groups and compare with others.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-10 lg:hidden">
                  <img
                    className="md:w-[22rem]"
                    src="/static/images/ai-brain.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="container mx-auto">
              <div className="lg:flex lg:items-center">
                <div className="space-y-12 md:w-96 ">
                  <div className="md:-mx-4 md:flex md:items-start">
                    <div className="mt-4 md:mx-4 md:mt-0">
                      <h3 className="text-4xl font-semibold capitalize text-white">
                        Earn points & discover new places
                      </h3>

                      <p className="mt-3 text-lg text-white">
                        Access to more and more, for less!
                      </p>
                      <p className="mt-3 text-lg text-white">
                        Exchange your points for discounts and freebies to help
                        you uncover more about your interests and access a range
                        of cultural events and services.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:flex lg:w-1/2 lg:items-center lg:justify-center">
                  <img
                    className="md:w-[28rem] xl:w-[34rem] "
                    src="/static/images/candy-house.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="container mx-auto">
              <div className="lg:flex lg:items-center">
                <div className="hidden lg:flex lg:w-1/2 lg:items-center lg:justify-center">
                  <img
                    className="md:w-[28rem] xl:w-[34rem] "
                    src="/static/images/empath-heart-box.png"
                    alt=""
                  />
                </div>
                <div className="space-y-12 md:w-96">
                  <div className="md:-mx-4 md:flex md:items-start">
                    <div className="mt-4 md:mx-4 md:mt-0">
                      <p className="mt-3 text-white">COMING SOON</p>
                      <h3 className="text-4xl font-semibold capitalize text-white">
                        Empathy Boost!
                      </h3>

                      <p className="mt-3 text-lg text-white">
                        Develop more meaningful connections
                      </p>
                      <p className="mt-3 text-lg text-white">
                        Supported by research Myra games are designed in
                        collaboration with experts and backed by independent
                        analysis to improve empathy skills and social
                        understandings!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:hidden">
                  <img
                    className="w-[28rem] xl:w-[34rem] "
                    src="/static/images/empath-heart-box.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
          <div className="mt-12" />
          <section>
            <div className="container mx-auto">
              <div
                className="mb-40 rounded-[40px] border border-white px-12 py-14 text-center lg:px-60"
                style={{
                  background:
                    "linear-gradient(107.82deg, rgba(80, 29, 67, 0.246) 4.16%, rgba(34, 29, 50, 0.6) 29.8%, rgba(34, 29, 50, 0.6) 62.96%, rgba(80, 29, 67, 0.348) 96.69%)",
                }}
              >
                <h2 className="bg-gradient-to-r from-[#FFFFFF] via-[#FFA4CB] to-[#9B8EF8] bg-clip-text text-center text-2xl font-semibold capitalize text-transparent lg:text-5xl">
                  Explore The Culture
                </h2>
                <button
                  onClick={() => {
                    setModalType(ModalType.form);
                    setShowModal(true);
                  }}
                  className="mt-7 inline-flex items-center justify-center whitespace-nowrap rounded-md border bg-[#FFFFFF26] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#FFFFFF77]"
                >
                  Join Waitlist
                </button>
              </div>
            </div>
          </section>
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
