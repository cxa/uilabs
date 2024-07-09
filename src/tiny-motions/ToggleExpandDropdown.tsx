import { useClickAway, useMeasure } from "@uidotdev/usehooks";
import clsx from "clsx";
import { motion } from "framer-motion";
import { CheckIcon, ChevronDownIcon } from "lucide-react";
import React from "react";

const values = [
  "Artificial",
  "Quantum computing",
  "Sustainable development",
  "Climate change mitigation",
  "Biodiversity",
];

const colors = [
  "text-base-500 hover:bg-base-50",
  "text-complementary-500 hover:bg-complementary-50",
  "text-analogous-b-500 hover:bg-analogous-b-50",
  "text-split.complementary-b-500 hover:bg-split.complementary-b-50",
  "text-triadic-a-500 hover:bg-triadic-a-50",
];

export default function ExpandedSelect() {
  const [selected, setSelected] = React.useState(values[0]);
  const [isOpen, setOpen] = React.useState(false);
  const [btnRef, btnBounds] = useMeasure();
  const [listRef, listBounds] = useMeasure();
  const ref = useClickAway<React.ElementRef<typeof motion.div>>(() =>
    setOpen(false),
  );

  return (
    <div className="relative z-50 min-h-10">
      <motion.div
        ref={ref}
        className={clsx(
          "absolute top-0 left-2",
          "bg-white border  border-grey-200 rounded-lg overflow-hidden",
        )}
      >
        <button
          type="button"
          className={clsx(
            "w-full p-2 pl-4 whitespace-nowrap",
            "flex gap-2 items-center justify-between",
            colors[values.indexOf(selected)],
          )}
          onClick={() => setOpen((o) => !o)}
        >
          <span ref={btnRef}>{selected}</span>
          <ChevronDownMotion
            strokeWidth={1.5}
            className={clsx("size-5")}
            animate={{ rotate: isOpen ? "180deg" : "0deg" }}
          />
        </button>

        <motion.div
          animate={{
            width: isOpen ? "auto" : btnBounds.width,
            height: listBounds.height,
          }}
          className="overflow-hidden"
        >
          <div ref={listRef} className={clsx(isOpen ? "h-auto" : "h-0")}>
            <ul className="border-t border-grey-100 py-2">
              {values.map((v, i) => (
                <li
                  key={v}
                  className={clsx(
                    "flex gap-4 items-center justify-between",
                    "pl-4 p-2 whitespace-nowrap cursor-pointer",
                    colors[i],
                  )}
                  onClick={() => {
                    setSelected(v);
                    setOpen(false);
                  }}
                >
                  {v}
                  {v === selected ? (
                    <CheckIcon strokeWidth={2} className="size-4" />
                  ) : (
                    <span className="block size-4" />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

const ChevronDown = React.forwardRef<
  React.ComponentRef<typeof ChevronDownIcon>,
  React.ComponentPropsWithoutRef<typeof ChevronDownIcon>
>((props, ref) => <ChevronDownIcon ref={ref} {...props} />);

const ChevronDownMotion = motion(ChevronDown);
