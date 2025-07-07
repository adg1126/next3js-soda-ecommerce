import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Text } from "@react-three/drei";
import React from "react";
import * as THREE from "three";

type Props = { sentence?: string; color?: string };

export default function ThreeText({ sentence, color = "white" }: Props) {
  const words = sentence?.toUpperCase().split(" ");
  const material = new THREE.MeshBasicMaterial({});
  const isDesktop = useMediaQuery("(min-width: 950px)", true);

  return words?.map((word: string, i: number) => (
    <Text
      key={`${word}-${i}`}
      scale={isDesktop ? 1 : 0.5}
      color={color}
      material={material}
      font="/fonts/Alpino-Variable.woff"
      fontWeight={900}
      anchorX={"center"}
      anchorY={"middle"}
      characters={`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,;:!?'"`}
    >
      {word}
    </Text>
  ));
}
