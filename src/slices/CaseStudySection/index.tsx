import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";

/**
 * Props for `CaseStudySection`.
 */
export type CaseStudySectionProps = SliceComponentProps<Content.CaseStudySectionSlice>;

/**
 * Component for "CaseStudySection" Slices.
 */
const CaseStudySection = ({ slice }: CaseStudySectionProps): JSX.Element => {
  return (
    <div className="bg-[#171717] px-[84px] py-[96px] flex flex-col items-center text-white">
      <h2 className="text-4xl font-sans mb-[56px]">{slice.primary.section_title}</h2>
      <div className="max-w-[1440px] grid grid-cols-12 gap-[24px]">
        <div className="col-span-12 md:col-span-5">
          <PrismicNextImage
            className="object-cover w-full h-[400px] rounded-[16px]"
            field={slice.primary.image}
          />
        </div>
        <div className="col-span-12 md:col-span-7 md:pl-[48px]">
          <PrismicRichText
            field={slice.primary.case_study_title}
            components={{
              heading3: ({ children }) => <h3 className="text-3xl font-sans mb-[32px]">{children}</h3>,
            }}
          />
          <PrismicRichText
            field={slice.primary.case_study_description}
            components={{
              paragraph: ({ children }) => <p className="mb-[24px] font-sans">{children}</p>,
            }}
          />
          <div className="mb-[40px]">
            <label htmlFor="caseStudySelector" className="block mb-[12px] font-sans">
              Select a business size:
            </label>
            <div className="relative">
              <select 
                id="caseStudySelector"
                className="w-full bg-[#487b94] text-white border-none rounded-[8px] p-[16px] font-sans"
              >
                {slice.items.map((item, index) => (
                  <option key={`option-${index}`} value={item.business_size_option}>
                    {item.business_size_option.charAt(0).toUpperCase() + item.business_size_option.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <PrismicNextLink
            className="bg-[#41718a] text-white font-sans py-[16px] px-[32px] rounded-[8px] hover:bg-[#487b94] transition-colors"
            field={slice.primary.learn_more_link}
          >
            {slice.primary.learn_more_label}
          </PrismicNextLink>
        </div>
      </div>
    </div>
  );
};

export default CaseStudySection;