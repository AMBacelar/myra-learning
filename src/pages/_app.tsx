import { type AppType } from "next/dist/shared/lib/utils";
import type { Dispatch, SetStateAction } from "react";
import { createContext, useEffect, useRef, useState } from "react";
import { Header } from "../components/header";
import "../styles/globals.css";

const bubbly = () => {
  const r = () => Math.random();
  const canvas = document.createElement("canvas");
  const width = (canvas.width = window.innerWidth * 1);
  const height = (canvas.height = window.innerHeight * 1.5);
  canvas.setAttribute(
    "style",
    "position:fixed;z-index:-1;left:0;top:0;min-width:100%;min-height:100%;"
  );
  const context = canvas.getContext("2d")!;
  const gradient = context.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, "#E88658");
  gradient.addColorStop(0.5, "#B7528C");
  gradient.addColorStop(1, "#09041C");
  document.body.appendChild(canvas);
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

export enum ModalType {
  video,
  form,
}

const defaultContextValues = {
  modalType: ModalType.form,
  showModal: false,
  setModalType: () => {
    /** noop */
  },
  setShowModal: () => {
    /** noop */
  },
};

export const ModalContext = createContext<{
  modalType: ModalType;
  showModal: boolean;
  setModalType: Dispatch<SetStateAction<ModalType>>;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}>(defaultContextValues);

const MyApp: AppType = ({ Component, pageProps }) => {
  const [modalType, setModalType] = useState<ModalType>(ModalType.form);
  const [showModal, setShowModal] = useState(false);
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
    <ModalContext.Provider
      value={{ modalType, showModal, setModalType, setShowModal }}
    >
      <Header />
      <Component {...pageProps} />
      {showModal && (
        <>
          <>
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-[#00000080] outline-none focus:outline-none">
              <div className="relative my-6 mx-auto w-auto max-w-3xl">
                {/*content*/}
                {modalType === ModalType.form && (
                  <div className="relative flex w-full flex-col rounded-lg border-0 bg-transparent shadow-lg outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between rounded-t pr-5">
                      <button
                        className="float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-black "
                        onClick={() => setShowModal(false)}
                      >
                        <span className="block h-6 w-6 bg-transparent text-2xl text-white">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <iframe
                      width="540"
                      height="500"
                      src="https://af34d190.sibforms.com/serve/MUIEABW5ihfir3galAqbd4hJoVpIyEMgeBRPatSVqYC1LJ1Ys8g_r0Q-8PZYpHMzMGvH01_vgzwekKc2_iqssZGy4OhObw38nT6yAUCVn9jNu2irLbqqcR7ZrX5q4xcZObWWLI7Y9e3JZuERBpRdyEtNsGyCPRIBdcqmuqBD8OyNV-vUT2FfF6YD3eogUvyavCUq9NFW5Xpq-Emc"
                      frameBorder="0"
                      scrolling="auto"
                      allowFullScreen
                      style={{
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        maxWidth: "100%",
                      }}
                    ></iframe>
                  </div>
                )}
                {modalType === ModalType.video && (
                  <div className="relative flex w-full flex-col rounded-lg border-0 bg-transparent shadow-lg outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between rounded-t border-b border-solid border-slate-200 p-5">
                      <button
                        className="float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-black"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="block h-6 w-6 bg-transparent text-2xl text-white">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative h-72 w-96 sm:h-[420px] sm:w-[600px]">
                      <iframe
                        className="absolute top-0 left-0 h-full w-full"
                        src="https://www.youtube.com/embed/sBYHvuoQTLo"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
          </>
        </>
      )}
    </ModalContext.Provider>
  );
};

export default MyApp;
