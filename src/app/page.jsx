import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import CardImage from "@/assets/CardImage.png";
import Time from "@/assets/Time.png";
import Calorier from "@/assets/Calories.png";
import Rating from "@/assets/Rating.png";

export default function Home() {
  return (
    <>
      <Hero />
      {/* Library Section Start */}
      <section className="the-library container mx-auto my-16">
        <h2 className="font-oswald font-bold text-3xl leading-9 text-primary">
          THE LIBRARY
        </h2>
        <h3 className="font-inter text-sm text-secondary leading-5">
          Twelve lifts covering every major muscle group.
        </h3>
        <div className="cards grid grid-cols-3 gap-6 my-8">
          <div className="card border border-transparent rounded-xl overflow-hidden">
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
                <h2 className="font-inter font-bold text-[11px] text-black bg-brand py-0.5 px-2.5 rounded ">
                  CHEST
                </h2>
                <h2 className="font-inter font-bold text-[11px] text-black bg-brand py-0.5 px-2.5 rounded ">
                  ARMS
                </h2>
              </div>
              <h2 className="font-oswald text-lg font-bold text-primary leading-7 mt-2">
                BARBELL BENCH PRESS
              </h2>
              <h3 className="font-inter text-[12px] text-secondary leading-4 mt-2">
                Barbell, Bench
              </h3>
              <div className="info flex gap-4 pt-3 border-t border-t-[#9ca3af28] border-t-solid mt-2">
                <div className="time flex gap-0.5 items-center">
                  <Image src={Time} alt="Time"></Image>
                  <h3 className="font-inter text-[12px] text-secondary leading-4">
                    25 min
                  </h3>
                </div>
                <div className="calories flex gap-0.5 items-center">
                  <Image src={Calorier} alt="Calories"></Image>
                  <h3 className="font-inter text-[12px] text-secondary leading-4">
                    180 kcal
                  </h3>
                </div>
                <div className="flex gap-0.5 items-center">
                  <Image src={Rating} alt="Rating"></Image>
                  <h3 className="font-inter text-[12px] text-secondary leading-4">
                    4.8
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
      </section>
      {/* Library Section End */}
    </>
  );
}
