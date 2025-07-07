"use client";

import React from "react";
import Section from "../Section";
import { View } from "@react-three/drei";
import Scene from "./Scene";

type Props = {};

export default function SkyDive({}: Props) {
  return (
    <Section className="skydive h-screen">
      <h2 className="sr-only"></h2>
      <View className="h-screen w-screen">
        <Scene flavor="blackCherry" sentence="Dive into better health" />
      </View>
    </Section>
  );
}
