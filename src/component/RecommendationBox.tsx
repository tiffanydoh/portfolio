import React from "react";
import { Card } from "primereact/card";

interface RecommendationBoxProps {
  name: string;
  position: string;
  company: string;
  content: string;
}

export default function RecommendationBox({
  name,
  position,
  company,
  content,
}: RecommendationBoxProps) {
  return (
    <Card
      title={name}
      subTitle={`${position} | ${company}`}
      className="bg-gray-100 border-2 border-black"
    >
      <p> {content}</p>
    </Card>
  );
}
