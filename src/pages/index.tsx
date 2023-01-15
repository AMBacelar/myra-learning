import { type NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef } from "react";

const bubbly = (config: any) => {
  const c = config || {};
  const r = () => Math.random();
  const canvas = c.canvas || document.createElement("canvas");
  let width = canvas.width;
  let height = canvas.height;
  if (canvas.parentNode === null) {
    canvas.setAttribute("style", "position:fixed;z-index:-1;left:0;top:0;min-width:100vw;min-height:100vh;");
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
  }
  const context = canvas.getContext("2d");
  const gradient = context.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, c.colorStart || "#E88658");
  gradient.addColorStop(0.5, c.colorStop || "#B7528C");
  gradient.addColorStop(1, c.colorStop || "#09041C");
  const nrBubbles = c.bubbles || Math.floor((width + height) * 0.02);
  const bubbles = [];


  // rgradient.addColorStop(1, "green");

  for (let i = 0; i < nrBubbles; i++) {
    bubbles.push({
      f: () => { }, // fillStyle
      x: r() * width, // x-position
      y: r() * height, // y-position
      r: (c.radiusFunc || (() => 20 + r() * width / 2)).call(), // radius
      a: (c.angleFunc || (() => r() * Math.PI * 2)).call(), // angle
      v: (c.velocityFunc || (() => 0.1 + r() * 0.5)).call() // velocity
    });
  }
  (function draw() {
    if (canvas.parentNode === null) {
      return cancelAnimationFrame(draw as any as number)
    }
    if (c.animate !== false) {
      requestAnimationFrame(draw);
    }
    context.globalCompositeOperation = "source-over";
    context.fillStyle = gradient;
    context.fillRect(0, 0, width, height);
    context.globalCompositeOperation = c.compose || "source-over";
    const bubbleColours = ['#E98857', '#6532B4', '#301661', '#C62965']
    bubbles.forEach((bubble, i) => {
      const rgradient = context.createRadialGradient(bubble.x, bubble.y, 0, bubble.x, bubble.y, bubble.r);
      rgradient.addColorStop(0, bubbleColours[i]);
      rgradient.addColorStop(1, `${bubbleColours[i]}00`);

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
    console.log('yolo');
    bubbly({
      bubbles: 2
    })
    effectCalled.current = true;

    return () => {
      // second
    }
  }, [])


  return (
    <>
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
                  <img className="h-8 w-auto sm:h-10" src="/static/images/purple-logo.png" alt="" />
                </a>
                <span className="text-white text-3xl">Myra Learning</span>
              </div>
              <nav className="hidden space-x-10 md:flex">
              </nav>
              <div className="items-center justify-end flex flex-1 lg:w-0">
                <a href="#" className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border bg-[#FFFFFF26] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#FFFFFF77]">Waitlist</a>
              </div>
            </div>
          </div>
        </div>
        <main className="flex min-h-screen flex-col items-center justify-center ">
          <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
              <div>
                <div>
                  <p className="mt-6 text-lg leading-8 text-white sm:text-center">
                    <strong>THE WORLD’S #1 AI POWERED CULTURAL LEARNING APP</strong>
                  </p>
                  <p className="mt-6 text-8xl bg-gradient-to-r from-[#FFFFFF] to-[#AC91F0] bg-clip-text text-transparent sm:text-center">
                    <strong>65,000+</strong>
                  </p>
                  <p className="mt-6 text-4xl leading-8 text-white sm:text-center">
                    <strong>Users on the waitlist</strong>
                  </p>
                  <p className="mt-6 text-lg leading-8 text-white sm:text-center">
                    A BETTER LEARNING EXPERIENCE FOR THE NEXT GENERATION
                  </p>
                </div>
              </div>
            </div>
          </div>
          <section className="">
            <div className="container px-6 mx-auto">
              <div className="lg:flex lg:items-center">
                <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
                  <img className="w-[28rem] lg:w-[566px] z-10" src="/static/images/app-screens.png" alt="" />
                </div>
                <div className="w-full space-y-12 lg:w-1/2 ">

                  <div className="md:flex md:items-start md:-ml-14">

                    <div className="mt-4 md:mx-4 md:mt-0 border-transparent pl-14 py-8 pr-14 rounded-[40px] " style={{ background: "linear-gradient(107.82deg, rgba(232, 127, 5, 0.37) -3.43%, rgba(145, 106, 49, 0.56) 29.8%, rgba(108, 34, 122, 0.57) 62.96%, #9641BD 101.38%)" }}>
                      <h2 className="text-7xl font-semibold capitalize text-white">Play The World</h2>

                      <p className="my-5 text-white text-4xl">
                        LEARN SOMETHING NEW
                      </p>
                      <a href="#" className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border bg-[#FFFFFF26] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#FFFFFF77]">Join Waitlist</a>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </section>
          <section className="mt-12">
            <div className="">
              <div className="px-60 py-14 mb-40 border-white rounded-[40px] border" style={{ background: "linear-gradient(107.82deg, rgba(80, 29, 67, 0.246) 4.16%, rgba(34, 29, 50, 0.6) 29.8%, rgba(34, 29, 50, 0.6) 62.96%, rgba(80, 29, 67, 0.348) 96.69%)" }}>
                <h2 className="text-5xl font-semibold capitalize text-center bg-gradient-to-r from-[#FFFFFF] via-[#FFA4CB] to-[#9B8EF8] bg-clip-text text-transparent">Cultural Learning <br /> Gamified</h2>
              </div>
            </div>
          </section>
          <section className="">
            <div className="container px-6 mx-auto">
              <div className="lg:flex lg:items-center">

                <div className="w-96 space-y-12">

                  <div className="md:flex md:items-start md:-mx-4">

                    <div className="mt-4 md:mx-4 md:mt-0">
                      <p className="mt-3 text-white text-xl">
                        FEATURES
                      </p>
                      <h3 className="text-4xl font-semibold capitalize text-white">30+ cultural games!</h3>

                      <p className="mt-3 text-white text-xl">
                        Stay sharp, establish identity, and increase your cultural awareness with 30+ mini games and challenges that are designed to be exciting, simple and fun!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
                  <img className="w-[28rem]" src="/static/images/hands-and-mobile.png" alt="" />
                </div>

              </div>
            </div>
          </section>
          <section className="">
            <div className="container px-6 mx-auto">
              <div className="lg:flex lg:items-center">
                <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
                  <img className="w-[28rem]" src="/static/images/ai-brain.png" alt="" />
                </div>
                <div className="w-96 space-y-12">

                  <div className="md:flex md:items-start md:-mx-4">

                    <div className="mt-4 md:mx-4 md:mt-0">
                      <h3 className="text-4xl font-semibold capitalize text-white">Powered by AI</h3>

                      <p className="mt-3 text-white text-xl">
                        As you play, our AI-powered platform will adjust to your skills and learning interests. You can measure your performance across skill groups and compare with others.
                      </p>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </section>
          <section className="">
            <div className="container px-6 mx-auto">
              <div className="lg:flex lg:items-center">

                <div className="space-y-12 w-96 ">

                  <div className="md:flex md:items-start md:-mx-4">

                    <div className="mt-4 md:mx-4 md:mt-0">
                      <h3 className="text-4xl font-semibold capitalize text-white">Earn points & discover new places</h3>

                      <p className="mt-3 text-white text-xl">
                        Access to more and more, for less!
                      </p>
                      <p className="mt-3 text-white text-xl">
                        Exchange your points for discounts and freebies to help you uncover more about your interests and access a range of cultural events and services.

                      </p>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
                  <img className="w-[28rem] xl:w-[34rem] " src="/static/images/candy-house.png" alt="" />
                </div>

              </div>
            </div>
          </section>
          <section className="">
            <div className="container px-6 mx-auto">
              <div className="lg:flex lg:items-center">
                <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
                  <img className="w-[28rem] xl:w-[34rem] " src="/static/images/empath-heart-box.png" alt="" />
                </div>
                <div className="space-y-12 w-96">

                  <div className="md:flex md:items-start md:-mx-4">

                    <div className="mt-4 md:mx-4 md:mt-0">
                      <p className="mt-3 text-amber-600">
                        COMING SOON
                      </p>
                      <h3 className="text-4xl font-semibold capitalize text-white">Empathy Boost!</h3>

                      <p className="mt-3 text-white text-xl">
                        Develop more meaningful connections
                      </p>
                      <p className="mt-3 text-white text-xl">
                        Supported by research Myra games are designed in collaboration with experts and backed by independent analysis to improve empathy skills and social understamdings!
                      </p>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </section>
          <section className="mt-12">
            <div className="">
              <div className="px-60 py-14 mb-40 border-white rounded-[40px] border" style={{ background: "linear-gradient(107.82deg, rgba(80, 29, 67, 0.246) 4.16%, rgba(34, 29, 50, 0.6) 29.8%, rgba(34, 29, 50, 0.6) 62.96%, rgba(80, 29, 67, 0.348) 96.69%)" }}>
                <h2 className="text-5xl font-semibold capitalize text-center bg-gradient-to-r from-[#FFFFFF] via-[#FFA4CB] to-[#9B8EF8] bg-clip-text text-transparent">Join Waitlist</h2>

                <input
                  type="text"
                  name="price"
                  id="price"
                  className="block mt-3 p-6 w-full rounded-2xl text-white bg-[#FFFFFF12] border border-[#FFFFFF20] pl-7 pr-12 focus:border-white focus:ring-indigo-500 sm:text-sm"
                  placeholder="you@email.com" />
              </div>
            </div>
          </section>
        </main>
        <footer>
          <div className="flex justify-between items-center px-10 py-5 text-white bg-[#00000066]">
            <div className="">Copyright 2023 Myra Learning Labs</div>
            <div className="">
              <a>Privacy Policy </a>
              {' | '}
              <a> Terms & Conditions</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
