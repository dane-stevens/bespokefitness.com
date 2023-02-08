import { Icon } from "@iconify/react";
import { useState } from "react";
import { useInterval } from "~/hooks/interval";

const TESTIMONIALS = [
  ["Darren is a great guy and quite literally hits the spots.", "Iain S"],
  ["Darren is a first rate trainer & therapist.", "Leanne L"],
  [
    "Darren is extremely knowledgeable and his experience is evident in his ability to locate the exact trigger point that needs to be released.",
    "Dane S",
  ],
  [
    "I have seen an Osteopath for many years.  I am new to Gravenhurst and was somewhat hesitant about trying someone new here; believing that no one would come close to my Osteopath in Whitby.  To my pleasant surprise, I found Darren to be a terrific practitioner.   He is a healer- and I really hope you have an opportunity to be treated by him.",
    "Diane M",
  ],
  [
    "Only one visit so far but was great had no pain in areas looked at since the visit 😄 Going back for more👍 …",
    "Ruby C",
  ],
  ["Fantastic osteopath. Would highly recommend!", "Clayton E"],
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [testimonials, setTestimonials] = useState(TESTIMONIALS);

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
      {testimonials.map((testimonial, i) => {
        return (
          <div
            key={i}
            className={`${
              index === i ? "opacity-1" : "opacity-0"
            } absolute top-0 bottom-0 left-0 right-0 m-8 flex items-center justify-center transition-all duration-1000 md:m-16`}
          >
            <div>
              <blockquote
                // className="text-center text-sm italic"
                className={`text-center italic ${
                  testimonial[0].length > 300
                    ? "text-sm"
                    : testimonial[0].length > 200
                    ? "text-md"
                    : testimonial[0].length > 120
                    ? "text-lg md:text-xl lg:text-2xl"
                    : testimonial[0].length > 60
                    ? "text-xl md:text-2xl lg:text-3xl"
                    : "text-2xl md:text-3xl lg:text-5xl"
                }`}
              >
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
