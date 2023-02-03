import { useState } from "react";

const buttonStyles = "rounded px-3 py-2 border";
export function PriceContainer({
  id,
  title,
  durations,
  defaultDurationIndex,
  prices,
}) {
  const [duration, setDuration] = useState(defaultDurationIndex);
  return (
    <div>
      <Heading title={title} id={id} />

      <div className="max-w-xl mx-auto">
        <div className="flex justify-center">
          <div className="inline-block">
            <div className="flex gap-2 rounded bg-zinc-800/40 p-2">
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
      <div className="grid md:grid-cols-3 gap-8 md:gap-16 mt-8 max-w-screen-lg mx-auto">
        <Price
          title="Standard"
          price={prices[0][duration]}
          duration={durations[duration]}
        />
        <Price
          title="EMS"
          price={prices[1][duration]}
          duration={durations[duration]}
        />
        <Price
          title="Seniors (60+)"
          price={prices[2][duration]}
          duration={durations[duration]}
        />
      </div>
    </div>
  );
}

export function Heading({ title, id }) {
  return (
    <h2 className="text-center text-4xl mb-16 pt-16 -mt-16" id={id}>
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
  buttonText,
}) {
  return (
    <div className="bg-zinc-800 py-16 px-8 rounded text-center hover:scale-110 trasition-all duration-150">
      <div className="text-2xl text-red-300">{title}</div>
      {subtitle && (
        <div className="uppercase tracking-wider text-sm mt-2 text-zinc-400">
          {subtitle}
        </div>
      )}
      <div className="text-5xl py-8">
        {customPrice ? customPrice : `$${price}`}
        <span className="ml-1 text-sm text-zinc-400">
          /{hour ? "hour" : `${duration} min`}
        </span>
      </div>
      <a
        href={href}
        className="rounded px-4 py-2 bg-red-700 mt-8 inline-block hover:bg-red-800"
      >
        {buttonText || "Book now"}
      </a>
    </div>
  );
}

function DurationButton({ index, currentDuration, duration, onSetDuration }) {
  return (
    <button
      type="button"
      onClick={() => onSetDuration && onSetDuration(index)}
      className={`${buttonStyles} ${
        currentDuration === index
          ? "bg-red-700 border-red-700"
          : "border-zinc-700/60 hover:bg-zinc-700"
      }`}
    >
      {duration} min
    </button>
  );
}
