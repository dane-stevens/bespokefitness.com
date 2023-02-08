import { Icon } from "@iconify/react";
import { useState } from "react";
import { useInterval } from "~/hooks/interval";

const TESTIMONIALS = [
  ["Darren is a great guy and quite literally hits the spots..", "Iain S"],
  ["Darren is a first rate trainer & therapist.", "Leanne L"],
];

shuffle(TESTIMONIALS);
export function Testimonials() {
  const [index, setIndex] = useState(0);
  useInterval(() => {
    setIndex(index === TESTIMONIALS.length - 1 ? 0 : index + 1);
  }, 1000 * 10);
  return (
    <div className="relative mt-16 h-[400px] justify-center rounded border border-zinc-200 shadow dark:border-transparent dark:bg-zinc-800 md:h-[300px] lg:h-[300px]">
      {/* <div className="mt-8 text-center text-2xl text-zinc-400">Testimonial</div> */}
      <div className="absolute -top-[32px] left-0 right-0 h-[64px] w-full text-center text-[96px] text-zinc-300 dark:text-zinc-600">
        <div className="mx-auto h-[72px] w-[72px] rounded-full border-4 border-zinc-50 bg-zinc-200 dark:border-zinc-900 dark:bg-zinc-800 ">
          <Icon
            icon="mdi:format-quote-close"
            width={64}
            height={64}
            className="text-zinc-400"
          />
        </div>
      </div>
      {/* <div className="absolute -bottom-[48px] -right-[48px] h-[96px] w-[96px] text-center text-[96px] text-zinc-300  dark:text-zinc-600">
        "
      </div> */}
      {TESTIMONIALS.map((testimonial, i) => {
        return (
          <div
            key={i}
            className={`${
              index === i ? "opacity-0" : "opacity-1"
            } absolute top-0 bottom-0 left-0 right-0 m-8 flex items-center justify-center transition-all duration-1000 md:m-16`}
          >
            <div>
              <blockquote className="text-center text-2xl italic md:text-3xl lg:text-5xl">
                {testimonial[0]}
              </blockquote>
              <cite className="mt-8 block text-center">- {testimonial[1]}</cite>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
