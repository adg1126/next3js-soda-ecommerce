"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import ButtonLink from "./components/ButtonLink";
import TextSplitter from "./components/TextSplitter";

gsap.registerPlugin(useGSAP);

export default function Home() {
  useGSAP(() => {
    const introTL = gsap.timeline();

    introTL
      .set(".hero", { opacity: 1 })
      .from(".hero-header-word", {
        scale: 3,
        opacity: 0,
        easy: "power4.in",
        delay: 0.3,
        stagger: 1,
      })
      .from(
        ".hero-subheading",
        {
          opacity: 0,
          y: 30,
        },
        "+=0.8",
      )
      .from(".hero-body", {
        opacity: 0,
        y: 10,
      })
      .from(".hero-button", {
        opacity: 0,
        y: 10,
        duration: 0.6,
      });
  });

  return (
    <>
      {/* Hero */}
      <section className="hero px-4 opacity-0 first:pt-10 md:px-6">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
          <div className="grid">
            <div className="grid h-screen place-items-center">
              <div className="place-items-cente grid auto-rows-min text-center">
                <h1 className="hero-header-word text-7xl font-black uppercase leading-[.8] text-orange-500 md:text-[9rem] lg:text-[13rem]">
                  <TextSplitter
                    text="Live gutsy"
                    wordDisplayStyle="block"
                    className="hero-header-word"
                  />
                </h1>
                <div className="hero-subheading mt-12 text-5xl font-semibold text-sky-950 lg:text-6xl">
                  Soda Perfected
                </div>
                <div className="hero-body text-2xl font-normal text-sky-950">
                  3-5g sugar. 9g fiber. 5 delicious flavors.
                </div>
                <ButtonLink
                  url="route"
                  text="Shop now"
                  className="hero-button mt-12"
                />
              </div>
            </div>
            <div className="text-side relative z-[80] grid h-screen items-center gap-4 md:grid-cols-2">
              <div className="w-full md:hidden">
                <Image
                  alt="all cans"
                  src="/pictures/all-cans-bunched.png"
                  fill
                />
              </div>
              <div>
                <h2 className="text-side-heading text-balance text-6xl font-black uppercase text-sky-950 lg:text-8xl">
                  <TextSplitter text="try all five flavors" />
                </h2>
                <div className="text-side-body mt-4 max-w-xl text-balance text-xl font-normal text-sky-950">
                  <TextSplitter
                    text={`Our soda is made with real fruit and a rouch of cane sugar. We
                  never use artificial sweeteners or high fructose corn syrup.
                  Try all ive flavors and find your favorite!`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
