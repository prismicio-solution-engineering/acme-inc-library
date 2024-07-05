import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `MillsSlice`.
 */
export type MillsSliceProps = SliceComponentProps<Content.MillsSliceSlice>;

/**
 * Component for "MillsSlice" Slices.
 */
const MillsSlice = ({ slice }: MillsSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for mills_slice (variation: {slice.variation})
      Slices
    </section>
  );
};

export default MillsSlice;
