import clsx from "clsx";
import "./BouncingText.css";
import React from "react";

export default function BouncingText() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <BouncingText.Component>Free Shipping</BouncingText.Component>
      <BouncingText.Component repeatDelayMs={2000}>
        〇円🈚 免费配送
      </BouncingText.Component>
    </div>
  );
}

BouncingText.Component = ({
  repeat = true,
  repeatDelayMs = 1000,
  children,
}: { repeat?: number | boolean; repeatDelayMs?: number; children: string }) => {
  const chars = [...children.trim()];
  const minTotalDuration = 1000;
  const avgDuration = Math.max(minTotalDuration / chars.length, 100);
  const [key, setKey] = React.useState(repeat);

  const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

  const handleAnimEnd = async () => {
    await sleep(repeatDelayMs);
    if (typeof key === "number" && key > 0) return setKey(key - 1);
    if (typeof key === "boolean" && repeat) setKey((o) => !o);
  };

  return (
    <div
      className={clsx(
        "uppercase",
        "[&>span]:inline-block",
        "[&>span]:animate-[bouncing-text_linear]",
      )}
    >
      {
        chars.reduce(
          (acc, cur, i) => {
            if (/\s+/.test(cur)) {
              acc.els.push(cur);
              acc.spacesCount++;
            } else {
              const j = i - acc.spacesCount;
              acc.els.push(
                <span
                  key={`${key}-${cur}-${j.toString()}`}
                  style={{
                    animationDuration: `${avgDuration}ms`,
                    animationDelay: `${j * avgDuration}ms`,
                  }}
                  onAnimationEnd={i === chars.length - 1 ? handleAnimEnd : null}
                >
                  {cur}
                </span>,
              );
            }
            return acc;
          },
          { els: [], spacesCount: 0 },
        ).els
      }
    </div>
  );
};
