import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `BoldTextSlice`.
 */
export type BoldTextSliceProps =
  SliceComponentProps<Content.BoldTextSliceSlice>;

/**
 * Component for "BoldTextSlice" Slices.
 */
const BoldTextSlice = ({ slice }: BoldTextSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="bg-[#ffffff] text-black font-sans p-20">
        <div className="max-w-[1440px] mx-auto grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-start-2 md:col-span-10">
            <div className="text-center text-4xl md:text-5xl font-bold mb-12">
              <PrismicRichText field={slice.primary.title} />
            </div>
            <div className="md:text-center text-xl md:leading-normal leading-loose mb-12">
              <PrismicRichText field={slice.primary.description} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoldTextSlice;
