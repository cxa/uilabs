import Logo from "react:/src/common/favicon.svg";
import clsx from "clsx";
import type React from "react";

export default function Layout({
  className,
  children,
}: { className?: string; children: React.ReactNode }) {
  return (
    <section
      className={clsx(
        'before:content-[""] before:fixed before:z-20',
        "before:top-0 before:bottom-0",
        "before:left-safe-or-6 md:before:left-safe-or-12",
        "sm:before:w-[1px] before:bg-grey-50",
        'after:content-[""] after:fixed after:z-20',
        "after:top-0 after:bottom-0",
        "after:right-safe-or-6 md:after:right-safe-or-12",
        "sm:after:w-[1px] after:bg-grey-50",
        className,
      )}
      style={{
        // @ts-ignore
        "--header-height": "calc(env(safe-area-inset-top) + 44px)",
        "--footer-height": "calc(env(safe-area-inset-bottom) + 44px)",
      }}
    >
      <header
        className={clsx(
          "fixed z-10 top-0 left-0 right-0",
          "h-[--header-height]",
          "grid place-content-center",
          "pt-safe border-b border-grey-50",
          "backdrop-blur-sm bg-white/10",
        )}
      >
        <Logo className="size-6" />
      </header>
      <main
        className={clsx(
          "relative z-0",
          "pt-[--header-height] pb-[--footer-height]",
          "px-safe sm:px-safe-or-6  md:px-safe-or-12",
        )}
      >
        {children}
      </main>
      <footer
        className={clsx(
          "fixed z-10 right-0 bottom-0 left-0",
          "h-[--footer-height]",
          "grid place-content-center",
          "pb-safe border-t border-grey-50",
          "backdrop-blur-sm bg-white/10",
        )}
      >
        <div>
          <a href="/">realazy</a>'s <a href="/uilabs">UI labs</a>{" "}
          <span className="text-grey-500">·</span> since 2024
        </div>
      </footer>
    </section>
  );
}
