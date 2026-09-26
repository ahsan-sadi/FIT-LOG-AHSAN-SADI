import React from "react";

import Image from "next/image";
import CardImage from "@/assets/CardImage.png";
import Time from "@/assets/Time.png";
import Calorier from "@/assets/Calories.png";
import Rating from "@/assets/Rating.png";
import Link from "next/link";

const WorkOutCard = ({ data }) => {
  //   console.log(data);
  return (
    <>
      <div className="card border border-transparent rounded-xl overflow-hidden cursor-pointer">
        <Link href={`/workouts/${data.id}`}>
          <div className="img relative w-full h-48">
            <Image
              className="object-cover"
              src={CardImage}
              alt="Card Image"
              fill
            ></Image>
          </div>
          <div className="information bg-[#20242E] p-6">
            <div className="badges flex gap-2">
              {data.muscleGroups.map((badge, idx) => (
                <h2
                  key={idx}
                  className="font-inter font-bold text-[11px] text-black bg-brand py-0.5 px-2.5 rounded "
                >
                  {badge}
                </h2>
              ))}

              {/* <h2 className="font-inter font-bold text-[11px] text-black bg-brand py-0.5 px-2.5 rounded ">
              ARMS
            </h2> */}
            </div>
            <h2 className="font-oswald text-lg font-bold text-primary leading-7 mt-2">
              {data.name}
            </h2>
            <h3 className="font-inter text-[12px] text-secondary leading-4 mt-2">
              {data.equipment}
            </h3>
            <div className="info flex gap-4 pt-3 border-t border-t-[#9ca3af28] border-t-solid mt-2">
              <div className="time flex gap-0.5 items-center">
                <Image src={Time} alt="Time"></Image>
                <h3 className="font-inter text-[12px] text-secondary leading-4">
                  {data.duration} min
                </h3>
              </div>
              <div className="calories flex gap-0.5 items-center">
                <Image src={Calorier} alt="Calories"></Image>
                <h3 className="font-inter text-[12px] text-secondary leading-4">
                  {data.caloriesBurned} kcal
                </h3>
              </div>
              <div className="flex gap-0.5 items-center">
                <Image src={Rating} alt="Rating"></Image>
                <h3 className="font-inter text-[12px] text-secondary leading-4">
                  {data.rating}
                </h3>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default WorkOutCard;
