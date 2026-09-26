import React from "react";
import WorkOutCard from "@/components/WorkOutCard";

const getData = async () => {
  let res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  let workData = await res.json();
  return workData;
};

export default async function WorkOuts() {
  const data = await getData();

  return (
    <>
      {/* Library Section Start */}
      <section
        id="library"
        className="
          the-library
          container
          mx-auto
          my-10
          px-4
          sm:my-12
          sm:px-6
          lg:my-16
          lg:px-0
        "
      >
        <h2
          className="
            font-oswald
            text-2xl
            font-bold
            leading-8
            text-primary
            sm:text-3xl
            sm:leading-9
          "
        >
          THE LIBRARY
        </h2>

        <h3
          className="
            font-inter
            text-[12px]
            leading-5
            text-secondary
            sm:text-sm
          "
        >
          Twelve lifts covering every major muscle group.
        </h3>

        <div
          className="
            cards
            my-6
            grid
            grid-cols-1
            gap-4
            sm:my-7
            sm:grid-cols-2
            sm:gap-5
            lg:my-8
            lg:grid-cols-3
            lg:gap-6
          "
        >
          {data.map((worker) => (
            <WorkOutCard key={worker.id} data={worker} />
          ))}
        </div>
      </section>
      {/* Library Section End */}
    </>
  );
}
