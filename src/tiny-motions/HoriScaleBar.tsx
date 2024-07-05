import clsx from "clsx";

export default function HoriScaleBar() {
  return (
    <div className="text-center">
      <span
        className={clsx(
          "relative text-split.complementary-a-500 cursor-pointer",
          "after:absolute after:left-0 after:bottom-0",
          "after:content-[''] after:w-full after:h-[2px]",
          "after:bg-split.complementary-b-500",
          "after:transition-transform after:duration-300",
          "after:origin-right hover:after:origin-left",
          "after:scale-x-0 hover:after:scale-x-100",
        )}
      >
        g.o.a.t
      </span>
    </div>
  );
}
