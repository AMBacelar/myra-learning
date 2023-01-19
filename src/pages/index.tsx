/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @next/next/no-img-element */
import { type NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef } from "react";

const bubbly = () => {
  const r = () => Math.random();
  const canvas = document.createElement("canvas");
  let width = canvas.width;
  let height = canvas.height;
  canvas.setAttribute(
    "style",
    "position:fixed;z-index:-1;left:0;top:0;min-width:100vw;min-height:100%;"
  );
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight * 1.5;
  document.body.appendChild(canvas);
  const context = canvas.getContext("2d")!;
  const gradient = context.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, "#E88658");
  gradient.addColorStop(0.5, "#B7528C");
  gradient.addColorStop(1, "#09041C");
  const nrBubbles = 10;
  const bubbles = [];

  for (let i = 0; i < nrBubbles; i++) {
    bubbles.push({
      x: r() * width, // x-position
      y: r() * height, // y-position
      r: 20 + (r() * width) / 2, // radius
      a: r() * Math.PI * 2, // angle
      v: 0.6 + r() * 0.5, // velocity
    });
  }
  (function draw() {
    if (canvas.parentNode === null) {
      return cancelAnimationFrame(draw as never as number);
    }
    requestAnimationFrame(draw);
    context.fillStyle = gradient;
    context.fillRect(0, 0, width, height);
    context.globalCompositeOperation = "source-over";
    const bubbleColours = ["#E98857", "#6532B4", "#C62965"];
    bubbles.forEach((bubble, i) => {
      const bubbleColour =
        bubbleColours[i % bubbleColours.length] || (bubbleColours[0] as string);
      const rgradient = context.createRadialGradient(
        bubble.x,
        bubble.y,
        0,
        bubble.x,
        bubble.y,
        bubble.r
      );
      rgradient.addColorStop(0, `${bubbleColour}`);
      rgradient.addColorStop(0.7, `${bubbleColour}00`);

      context.beginPath();
      context.arc(bubble.x, bubble.y, bubble.r, 0, Math.PI * 2);
      context.fillStyle = rgradient;
      context.fill();
      // update positions for next draw
      bubble.x += Math.cos(bubble.a) * bubble.v;
      bubble.y += Math.sin(bubble.a) * bubble.v;
      if (bubble.x - bubble.r > width) {
        bubble.x = -bubble.r;
      }
      if (bubble.x + bubble.r < 0) {
        bubble.x = width + bubble.r;
      }
      if (bubble.y - bubble.r > height) {
        bubble.y = -bubble.r;
      }
      if (bubble.y + bubble.r < 0) {
        bubble.y = height + bubble.r;
      }
    });
  })();
};

const Home: NextPage = () => {
  const effectCalled = useRef(false);
  useEffect(() => {
    // first
    if (effectCalled.current) return;
    bubbly();
    effectCalled.current = true;

    return () => {
      // second
    };
  }, []);

  return (
    <div className="absolute md:relative">
      <Head>
        <title>Myra Learning</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <div className="relative">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <a href="#">
                  <img
                    className="h-8 w-auto sm:h-10"
                    src="/static/images/purple-logo.png"
                    alt=""
                  />
                </a>
                <span className="ml-3 text-3xl text-white">Myra Learning</span>
              </div>
              <nav className="hidden space-x-10 md:flex"></nav>
              <div className="flex flex-1 items-center justify-end lg:w-0">
                <a
                  href="#"
                  className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border bg-[#FFFFFF26] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#FFFFFF77]"
                >
                  Waitlist
                </a>
              </div>
            </div>
          </div>
        </div>
        <main className="flex min-h-screen flex-col items-center justify-center ">
          <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
              <div>
                <div>
                  <p className="mt-6 text-center text-lg leading-8 text-white">
                    <strong>
                      THE WORLD’S #1 AI POWERED CULTURE LEARNING APP
                    </strong>
                  </p>
                  <p className="mt-6 bg-gradient-to-r from-[#FFFFFF] to-[#AC91F0] bg-clip-text text-center text-8xl text-transparent">
                    <strong>65,000+</strong>
                  </p>
                  <p className="mt-6 text-center text-4xl leading-8 text-white">
                    <strong>Users on the waitlist</strong>
                  </p>
                  <p className="mt-6 text-center text-lg leading-8 text-white">
                    A BETTER LEARNING EXPERIENCE FOR THE NEXT GENERATION
                  </p>
                </div>
              </div>
            </div>
          </div>
          <section className="">
            <div className="container mx-auto px-10">
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
                      className="mt-4 rounded-[40px] border-transparent py-8 pl-14 pr-14 md:mx-4 md:mt-0 "
                      style={{
                        background:
                          "linear-gradient(107.82deg, rgba(232, 127, 5, 0.37) -3.43%, rgba(145, 106, 49, 0.56) 29.8%, rgba(108, 34, 122, 0.57) 62.96%, #9641BD 101.38%)",
                      }}
                    >
                      <h2 className="text-7xl font-semibold capitalize text-white">
                        Play The World
                      </h2>

                      <p className="my-5 text-4xl text-white">
                        LEARN SOMETHING NEW
                      </p>
                      <a
                        href="#"
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md border bg-[#FFFFFF26] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#FFFFFF77]"
                      >
                        Join Waitlist
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="mt-12">
            <div className="container mx-auto px-10">
              <div
                className="mb-40 rounded-[40px] border border-white px-20 py-14 lg:px-60"
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
          <section className="mb-4">
            <div className="container mx-auto px-10">
              <div className="lg:flex lg:items-center">
                <div className="w-[28rem] space-y-12">
                  <div className="md:-mx-4 md:flex md:items-start">
                    <div className="mt-4 md:mx-4 md:mt-0 lg:mr-10">
                      <p className="mt-3 text-xl text-white">FEATURES</p>
                      <h3 className="text-4xl font-semibold capitalize text-white">
                        30+ cultural games!
                      </h3>

                      <p className="mt-3 text-xl text-white">
                        Stay sharp, establish identity, and increase your
                        cultural awareness with 30+ mini games and challenges
                        that are designed to be exciting, simple and fun!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:flex lg:w-1/2 lg:items-center lg:justify-center">
                  <img
                    className="w-[28rem]"
                    src="/static/images/hands-and-mobile.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="mb-14">
            <div className="container mx-auto px-10">
              <div className="lg:flex lg:items-center">
                <div className="mr-10 hidden lg:flex">
                  <img
                    className="w-[28rem]"
                    src="/static/images/ai-brain.png"
                    alt=""
                  />
                </div>
                <div className="w-[28rem] space-y-12">
                  <div className="md:-mx-4 md:flex md:items-start">
                    <div className="mt-4 md:mx-4 md:mt-0">
                      <h3 className="text-4xl font-semibold capitalize text-white">
                        Powered by AI
                      </h3>

                      <p className="mt-3 text-xl text-white">
                        As you play, our AI-powered platform will adjust to your
                        skills and learning interests. You can measure your
                        performance across skill groups and compare with others.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-10 lg:hidden">
                  <img
                    className="w-[22rem]"
                    src="/static/images/ai-brain.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="">
            <div className="container mx-auto px-10">
              <div className="lg:flex lg:items-center">
                <div className="w-96 space-y-12 ">
                  <div className="md:-mx-4 md:flex md:items-start">
                    <div className="mt-4 md:mx-4 md:mt-0">
                      <h3 className="text-4xl font-semibold capitalize text-white">
                        Earn points & discover new places
                      </h3>

                      <p className="mt-3 text-xl text-white">
                        Access to more and more, for less!
                      </p>
                      <p className="mt-3 text-xl text-white">
                        Exchange your points for discounts and freebies to help
                        you uncover more about your interests and access a range
                        of cultural events and services.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:flex lg:w-1/2 lg:items-center lg:justify-center">
                  <img
                    className="w-[28rem] xl:w-[34rem] "
                    src="/static/images/candy-house.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="">
            <div className="container mx-auto px-10">
              <div className="lg:flex lg:items-center">
                <div className="hidden lg:flex lg:w-1/2 lg:items-center lg:justify-center">
                  <img
                    className="w-[28rem] xl:w-[34rem] "
                    src="/static/images/empath-heart-box.png"
                    alt=""
                  />
                </div>
                <div className="w-96 space-y-12">
                  <div className="md:-mx-4 md:flex md:items-start">
                    <div className="mt-4 md:mx-4 md:mt-0">
                      <p className="mt-3 text-amber-600">COMING SOON</p>
                      <h3 className="text-4xl font-semibold capitalize text-white">
                        Empathy Boost!
                      </h3>

                      <p className="mt-3 text-xl text-white">
                        Develop more meaningful connections
                      </p>
                      <p className="mt-3 text-xl text-white">
                        Supported by research Myra games are designed in
                        collaboration with experts and backed by independent
                        analysis to improve empathy skills and social
                        understamdings!
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
          <section className="mt-12">
            <div className="">
              <div
                className="mb-40 rounded-[40px] border border-white px-20 py-14 lg:px-60"
                style={{
                  background:
                    "linear-gradient(107.82deg, rgba(80, 29, 67, 0.246) 4.16%, rgba(34, 29, 50, 0.6) 29.8%, rgba(34, 29, 50, 0.6) 62.96%, rgba(80, 29, 67, 0.348) 96.69%)",
                }}
              >
                <h2 className="bg-gradient-to-r from-[#FFFFFF] via-[#FFA4CB] to-[#9B8EF8] bg-clip-text text-center text-5xl font-semibold capitalize text-transparent">
                  Join Waitlist
                </h2>

                <input
                  type="text"
                  name="price"
                  id="price"
                  className="mt-3 block w-full rounded-2xl border border-[#FFFFFF20] bg-[#FFFFFF12] p-6 pl-7 pr-12 text-white focus:border-white focus:ring-indigo-500 sm:text-sm"
                  placeholder="you@email.com"
                />
              </div>
            </div>
          </section>
        </main>
        <footer>
          <div className="flex items-center justify-between bg-[#00000066] px-10 py-5 text-white">
            <div className="">Copyright 2023 Myra Learning Labs</div>
            <div className="">
              <a>Privacy Policy </a>
              {" | "}
              <a> Terms & Conditions</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
