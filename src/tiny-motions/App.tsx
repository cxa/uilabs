import clsx from "clsx";
import { AsteriskIcon, CodeXmlIcon } from "lucide-react";

import Layout from "../common/Layout";
import { SRC_ROOT } from "../common/constants";
import BouncingText from "./BouncingText";
import HoriScaleBar from "./HoriScaleBar";
import ToggleExpandDropdown from "./ToggleExpandDropdown";
import VertScaleBar from "./VertScaleBar";

const bgBorderColors = [
  ["bg-base-50/10", "border-base-50/30"],
  ["bg-complementary-50/10", "border-complementary-50/30"],
  ["bg-split.complementary-a-50/10", "border-split.complementary-a-50/30"],
  ["bg-split.complementary-b-50/10", "border-split.complementary-b-50/30"],
  ["bg-triadic-a-50/10", "border-triadic-a-50/30"],
  ["bg-triadic-b-50/10", "border-triadic-a-50/30"],
  ["bg-tetradic-a-50/10", "border-tetradic-a-50/30"],
  ["bg-tetradic-b-50/10", "border-tetradic-b-50/30"],
  ["bg-tetradic-c-50/10", "border-tetradic-c-50/30"],
  ["bg-analogous-a-50/10", "border-analogous-a-50/30"],
  ["bg-analogous-b-50/10", "border-analogous-b-50/30"],
  ["bg-grey-50/10", "border-grey-50/30"],
];

const getRandomBgBorderColor = () =>
  bgBorderColors[Math.floor(bgBorderColors.length * Math.random())];

export default function App() {
  return (
    <Layout className="p-5">
      <div
        className={clsx(
          "grid gap-5 items-center",
          "[grid-auto-rows:min-content,minmax(25vh,35vh)] grid-flow-row-dense",
          "grid-cols-[repeat(auto-fit,minmax(280px,1fr))]",
        )}
      >
        <Box srcFilename="HoriScaleBar.tsx" reference="https://www.faizur.com/">
          <HoriScaleBar />
        </Box>

        <Box srcFilename="VertScaleBar.tsx" reference="https://danmall.com/">
          <VertScaleBar />
        </Box>

        <Box
          srcFilename="ToggleExpandDropdown.tsx"
          reference="https://x.com/proskuaaa/status/1791438947668590916"
        >
          <ToggleExpandDropdown />
        </Box>

        <Box srcFilename="BouncingText.tsx" reference="https://roccofridge.com">
          <BouncingText />
        </Box>

        {Array.from({ length: 20 }).map((_, i) => (
          <Box
            key={i.toString()}
            style={{
              minHeight: `${25 + Math.trunc(Math.random() * 15)}vh`,
            }}
          />
        ))}
      </div>
    </Layout>
  );
}

const Box = ({
  className,
  children,
  srcFilename,
  reference,
  ...props
}: React.ComponentProps<"div"> & {
  srcFilename?: string;
  reference?: string;
}) => {
  return (
    <div
      className={clsx(
        "border-[0.5rem] pt-6 p-2",
        getRandomBgBorderColor(),
        className,
      )}
      {...props}
    >
      {children}

      <div
        className={clsx(
          "flex gap-2 justify-end mt-4",
          "[&_a]:transition-all",
          "[&_a]:opacity-25 [&_a:hover]:opacity-100",
          "[&_a]:-rotate-0 [&_a:hover]:rotate-12",
        )}
      >
        {srcFilename && (
          <a href={`${SRC_ROOT}/tiny-motions/${srcFilename}`} title="Source">
            <CodeXmlIcon strokeWidth={1} className="size-5" />
          </a>
        )}
        {reference && (
          <a href={reference} title="Reference">
            <AsteriskIcon strokeWidth={1} className="size-5" />
          </a>
        )}
      </div>
    </div>
  );
};
