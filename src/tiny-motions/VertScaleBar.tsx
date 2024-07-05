import clsx from "clsx";

export default function VertScaleBar() {
  return (
    <div className="text-center">
      <span
        className={clsx(
          "text-4xl text-analogous-a-500 leading-none cursor-pointer",
          "transition-all duration-300",
          "shadow-[inset_0_-0.35em_0_theme(colors.analogous.a.50)]",
          "hover:shadow-[inset_0_-1.15em_0_theme(colors.analogous.a.50)]",
        )}
      >
        o.m.g
      </span>
    </div>
  );
}
