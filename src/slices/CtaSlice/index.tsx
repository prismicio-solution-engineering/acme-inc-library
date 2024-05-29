import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `CtaSlice`.
 */
export type CtaSliceProps = SliceComponentProps<Content.CtaSliceSlice>;

/**
 * Component for "CtaSlice" Slices.
 */
const CtaSlice = ({ slice }: CtaSliceProps): JSX.Element => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <PrismicRichText field={slice.primary.title} />
        </div>

        <div className="mt-10 flex items-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <>{slice.primary.label}</>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CtaSlice;
