"use client";
import gsap from "gsap";

import React, { useRef } from "react";
import { SodaCanProps } from "../SodaCan";
import Section from "../Section";
import { Center, Environment, View } from "@react-three/drei";
import FloatingCan from "../FloatingCan";
import ArrowButton from "../ArrowButton";
import WavyCircles from "../WavyCircles";
import * as THREE from "three";

type CarouselProps = {};

const SPINS_ON_FLAVOR_CHANGE = 4;

const FLAVORS: {
  flavor: SodaCanProps["flavor"];
  color: string;
  name: string;
}[] = [
  { flavor: "blackCherry", color: "#710523", name: "Black Cherry" },
  { flavor: "grape", color: "#572981", name: "Grape Goodness" },
  { flavor: "lemonLime", color: "#164405", name: "Lemon Lime" },
  {
    flavor: "strawberryLemonade",
    color: "#690B3D",
    name: "Strawberry Lemonade",
  },
  { flavor: "watermelon", color: "#4B7002", name: "Watermelon Crush" },
];

export default function Carousel({}: CarouselProps) {
  const canRef = useRef<THREE.Group>(null);
  const [currentFlavorIndex, setCurrentFlavorIndex] = React.useState<number>(0);

  const handleChangeFlavor = (index: number) => {
    if (!canRef.current) return;

    const nextIndex = (index + FLAVORS.length) % FLAVORS.length;

    const canTL = gsap.timeline();

    canTL
      .to(
        canRef.current.rotation,
        {
          duration: 0.5,
          ease: "power2.inOut",
          y:
            index > currentFlavorIndex
              ? `-=${Math.PI * 2 * SPINS_ON_FLAVOR_CHANGE}`
              : `+=${Math.PI * 2 * SPINS_ON_FLAVOR_CHANGE}`,
        },
        0,
      )
      .to(
        ".background, .wavy-circles-outer, .wavy-circles-inner",
        {
          backgroundColor: FLAVORS[nextIndex].color,
          fill: FLAVORS[nextIndex].color,
          duration: 0.5,
          ease: "power2.inOut",
        },
        0,
      )
      .to(".text-wrapper", {
        duration: 0.2,
        y: -10,
        opacity: 0,
      })
      .to({}, { onStart: () => setCurrentFlavorIndex(nextIndex) }, 0.5)
      .to(
        ".text-wrapper",
        {
          duration: 0.2,
          opacity: 1,
          y: 0,
        },
        0.7,
      );
  };

  return (
    <Section className="carousel relative grid h-screen grid-rows-[auto,4fr,auto] justify-center overflow-hidden bg-white py-12 text-white">
      <div className="background pointer-events-none absolute inset-0 bg-[#710523] opacity-50" />

      <WavyCircles className="absolute left-1/2 top-1/2 h-[120vmin] -translate-x-1/2 -translate-y-1/2 text-[#710523]" />

      <h2 className="relative text-center text-5xl font-bold">
        Choose Your Flavor
      </h2>

      <div className="grid grid-cols-[auto,auto,auto] items-center">
        {/* Left */}
        <ArrowButton
          direction="left"
          label="Previous Flavor"
          handleChangeFlavor={() => handleChangeFlavor(currentFlavorIndex + 1)}
        />

        {/* Can */}
        <View className="aspect-square h-[70vmin] min-h-40">
          <Center position={[0, 0, 1.5]}>
            <FloatingCan
              ref={canRef}
              floatIntensity={0.3}
              rotationIntensity={1}
              flavor={FLAVORS[currentFlavorIndex].flavor}
            />
          </Center>
          <Environment
            files="/hdr/lobby.hdr"
            environmentIntensity={0.6}
            environmentRotation={[0, 3, 0]}
          />
          <directionalLight intensity={6} position={[0, 1, 1]} />
        </View>

        {/* Right */}
        <ArrowButton
          direction="right"
          label="Next Flavor"
          handleChangeFlavor={() => handleChangeFlavor(currentFlavorIndex - 1)}
        />
      </div>

      <div className="text-area relative mx-auto text-center">
        <div className="text-wrapper text-4xl font-medium">
          <p>{FLAVORS[currentFlavorIndex].name}</p>
        </div>
        <p className="mt-2 text-2xl font-normal opacity-90">12 cans - $25.99</p>
      </div>
    </Section>
  );
}
