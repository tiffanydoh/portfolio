import React from "react";
import { Card } from "primereact/card";
import { Carousel } from "primereact/carousel";

interface ExperienceBoxProps {
  position: string;
  company: string;
  content: any;
  duration: string;
}

export default function ExperienceBox({
  position,
  company,
  content,
  duration,
}: ExperienceBoxProps) {
  return (
    <Card
      title={position}
      subTitle={`${duration} | ${company}`}
      className="bg-gray-100 border-2 border-black"
    >
      <p> {content}</p>
    </Card>
  );
}
