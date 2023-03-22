import { useState } from "react";
import { FormatPhone } from "./FormatPhone";

const buttonStyles = "px-3 py-2";
export function PriceContainer({
  id,
  title,
  durations,
  defaultDurationIndex,
  prices,
  href,
  contactUs,
}: {
  id: string;
  title: string;
  durations: number[];
  defaultDurationIndex: number;
  prices: number[][];
  href: string;
  contactUs?: boolean;
}) {
  const [duration, setDuration] = useState(defaultDurationIndex);
  return (
    <div>
      <Heading title={title} id={id} />

      <div className="mx-auto max-w-xl">
        <div className="flex justify-center">
          <div className="inline-block">
            <div className="flex overflow-hidden rounded bg-zinc-200 dark:bg-zinc-800">
              {durations.map((durationItem, i) => {
                return (
                  <DurationButton
                    key={i}
                    index={i}
                    duration={durationItem}
                    currentDuration={duration}
                    onSetDuration={(e) => setDuration(e)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 grid max-w-screen-lg gap-8 md:grid-cols-3 md:gap-16">
        <Price
          title="Standard"
          price={prices[0][duration]}
          duration={durations[duration]}
          href={href}
          contactUs={contactUs}
        />
        <Price
          title="EMS"
          price={prices[1][duration]}
          duration={durations[duration]}
          href={href}
          contactUs={contactUs}
        />
        <Price
          title="Seniors (60+)"
          price={prices[2][duration]}
          duration={durations[duration]}
          href={href}
          contactUs={contactUs}
        />
      </div>
    </div>
  );
}

export function Heading({ title, id }) {
  return (
    <h2 className="mb-16 -mt-32 pt-32 text-center text-4xl" id={id}>
      {title}
    </h2>
  );
}

export function Price({
  title,
  subtitle,
  price,
  customPrice,
  duration,
  hour,
  href,
  contactUs,
}: {
  title: string;
  subtitle: string;
  price: number;
  customPrice?: string;
  duration: number;
  hour?: boolean;
  href: string;
  contactUs?: boolean;
}) {
  return (
    <div className="trasition-all rounded  border border-zinc-200 py-16 px-8 text-center shadow duration-150 hover:scale-110 dark:border-zinc-800 dark:bg-zinc-800">
      <div className="text-2xl text-red-600 dark:text-red-300">{title}</div>
      {subtitle && (
        <div className="mt-2 text-sm uppercase tracking-wider text-zinc-400">
          {subtitle}
        </div>
      )}
      <div className="py-8 text-5xl">
        {customPrice ? customPrice : `$${price}`}
        <span className="ml-1 text-sm text-zinc-600 dark:text-zinc-400">
          /{hour ? "hour" : `${duration} min`}
        </span>
      </div>
      {contactUs && (
        <>
          <div className="mt-8 -mb-6 text-xs uppercase text-zinc-600">
            Contact Us
          </div>

          <div className="mt-8 hidden md:block">
            Call or text: <FormatPhone />
          </div>
        </>
      )}

      <a
        target="_blank"
        href={href}
        className={`mt-8 inline-block rounded bg-red-700 px-4 py-2 text-zinc-100 hover:bg-red-800 ${
          contactUs ? "md:hidden" : ""
        }`}
      >
        {contactUs ? "Send a text" : "Book now"}
      </a>
    </div>
  );
}

function DurationButton({ index, currentDuration, duration, onSetDuration }) {
  return (
    <button
      type="button"
      onClick={() => onSetDuration && onSetDuration(index)}
      className={`${
        index > 0 ? "border-l border-black/10 dark:border-white/10" : ""
      } ${buttonStyles} ${
        currentDuration === index
          ? "bg-red-700 text-zinc-100"
          : "hover:bg-zinc-400 dark:hover:bg-zinc-700"
      }`}
    >
      {duration} min
    </button>
  );
}
