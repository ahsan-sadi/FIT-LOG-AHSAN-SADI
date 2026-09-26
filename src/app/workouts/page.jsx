import React from "react";
import Image from "next/image";
import CardImage from "@/assets/CardImage.png";
import Time from "@/assets/Time.png";
import Calorier from "@/assets/Calories.png";
import Rating from "@/assets/Rating.png";
import WorkOutCard from "@/components/WorkOutCard";

const getData = async () => {
  let res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  let workData = res.json();
  return workData;
};

export const WorkOuts = async () => {
  const data = await getData();
  console.log(data);

  return (
    <>
      {/* Library Section Start */}
      <section className="the-library container mx-auto my-16">
        <h2 className="font-oswald font-bold text-3xl leading-9 text-primary">
          THE LIBRARY
        </h2>
        <h3 className="font-inter text-sm text-secondary leading-5">
          Twelve lifts covering every major muscle group.
        </h3>
        <div className="cards grid grid-cols-3 gap-6 my-8">
          {data.map((worker) => (
            <WorkOutCard key={worker.id} data={worker} />
          ))}
        </div>
      </section>
      {/* Library Section End */}
    </>
  );
};
