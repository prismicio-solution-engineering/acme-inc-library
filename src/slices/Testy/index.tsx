import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Testy`.
 */
export type TestyProps = SliceComponentProps<Content.TestySlice>;

/**
 * Component for "Testy" Slices.
 */
const Testy = ({ slice }: TestyProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for testy (variation: {slice.variation}) Slices
    </section>
  );
};

export default Testy;
