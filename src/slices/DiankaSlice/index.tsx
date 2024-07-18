import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `DiankaSlice`.
 */
export type DiankaSliceProps = SliceComponentProps<Content.DiankaSliceSlice>;

/**
 * Component for "DiankaSlice" Slices.
 */
const DiankaSlice = ({ slice }: DiankaSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for dianka_slice (variation: {slice.variation})
      Slices
    </section>
  );
};

export default DiankaSlice;
