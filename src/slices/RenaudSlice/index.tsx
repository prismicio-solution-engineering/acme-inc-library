import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `RenaudSlice`.
 */
export type RenaudSliceProps = SliceComponentProps<Content.RenaudSliceSlice>;

/**
 * Component for "RenaudSlice" Slices.
 */
const RenaudSlice = ({ slice }: RenaudSliceProps): JSX.Element => {
  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <div className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"><PrismicRichText field={slice.primary.titre} /></div>
        <div className="mt-6 text-lg leading-8 text-gray-600">
        <PrismicRichText field={slice.primary.description} />
        </div>
      </div>
    </div>
  );
};

export default RenaudSlice;
