"use client";
import React, { useEffect } from "react";

type AnimateEyeProps = {};

const AnimateEye: React.FC<AnimateEyeProps> = () => {
  useEffect(() => {
    const eyeball = (event: any) => {
      const eye1 = document.querySelector<HTMLDivElement>(".eye1");
      const eye2 = document.querySelector<HTMLDivElement>(".eye2");
      const eye: HTMLDivElement[] = [
        eye1 as HTMLDivElement,
        eye2 as HTMLDivElement,
      ];
      //   const eye1 = document.getElementById("retina1");
      //   const eye2 = document.querySelector<HTMLDivElement>(".eye2");

      //   const eye: HTMLDivElement[] = [
      //     eye1 as HTMLDivElement,
      //     eye2 as HTMLDivElement,
      //   ];
      eye.forEach((eye) => {
        let x = eye!.getBoundingClientRect().left + eye!.clientWidth / 2;
        let y = eye!.getBoundingClientRect().top + eye!.clientHeight / 2;

        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rotation = radian * (180 / Math.PI) * -1 + 270;
        eye!.style.transform = `rotate(${rotation}deg)`;
      });
    };
    document.querySelector("body")?.addEventListener("mousemove", eyeball);
  }, []);

  return (
    <div className="animate">
      <div className="eye1">
        <span></span>
      </div>
      <div className="eye2">
        <span></span>
      </div>
      <img src="tiger.png" alt="animateImage" />
    </div>
  );
};
export default AnimateEye;
