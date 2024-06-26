// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *Header → Links*
 */
export interface HeaderDocumentDataLinksItem {
  /**
   * Label field in *Header → Links*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.links[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * link field in *Header → Links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: header.links[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Content for Header documents
 */
interface HeaderDocumentData {
  /**
   * Company Name field in *Header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.company_name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  company_name: prismic.KeyTextField;

  /**
   * Links field in *Header*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: header.links[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  links: prismic.GroupField<Simplify<HeaderDocumentDataLinksItem>>;
}

/**
 * Header document from Prismic
 *
 * - **API ID**: `header`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HeaderDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HeaderDocumentData>,
    "header",
    Lang
  >;

type HomepageDocumentDataSlicesSlice =
  | RenaudSliceSlice
  | CtaSliceSlice
  | FaqSliceSlice
  | TeamSectionSlice;

/**
 * Content for HomePage documents
 */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *HomePage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Title field in *HomePage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *HomePage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *HomePage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * HomePage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

type PageDocumentDataSlicesSlice = never;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

export type AllDocumentTypes = HeaderDocument | HomepageDocument | PageDocument;

/**
 * Primary content in *FaqSlice → Primary*
 */
export interface FaqSliceSliceDefaultPrimary {
  /**
   * Section Title field in *FaqSlice → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Enter the title for the Faq section
   * - **API ID Path**: Faq_slice.primary.section_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  section_title: prismic.KeyTextField;
}

/**
 * Primary content in *FaqSlice → Items*
 */
export interface FaqSliceSliceDefaultItem {
  /**
   * Question field in *FaqSlice → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Enter the question
   * - **API ID Path**: Faq_slice.items[].question
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  question: prismic.KeyTextField;

  /**
   * Answer field in *FaqSlice → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Enter the answer
   * - **API ID Path**: Faq_slice.items[].answer
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  answer: prismic.KeyTextField;
}

/**
 * Default Variation variation for FaqSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default variation of the Faq Slice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FaqSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FaqSliceSliceDefaultPrimary>,
  Simplify<FaqSliceSliceDefaultItem>
>;

/**
 * Slice variation for *FaqSlice*
 */
type FaqSliceSliceVariation = FaqSliceSliceDefault;

/**
 * FaqSlice Shared Slice
 *
 * - **API ID**: `Faq_slice`
 * - **Description**: A Faq section
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FaqSliceSlice = prismic.SharedSlice<
  "Faq_slice",
  FaqSliceSliceVariation
>;

/**
 * Primary content in *CtaSlice → Primary*
 */
export interface CtaSliceSliceDefaultPrimary {
  /**
   * Title field in *CtaSlice → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cta_slice.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Label field in *CtaSlice → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cta_slice.primary.label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Default variation for CtaSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CtaSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CtaSliceSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *CtaSlice*
 */
type CtaSliceSliceVariation = CtaSliceSliceDefault;

/**
 * CtaSlice Shared Slice
 *
 * - **API ID**: `cta_slice`
 * - **Description**: CtaSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CtaSliceSlice = prismic.SharedSlice<
  "cta_slice",
  CtaSliceSliceVariation
>;

/**
 * Primary content in *RenaudSlice → Primary*
 */
export interface RenaudSliceSliceDefaultPrimary {
  /**
   * Titre field in *RenaudSlice → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: renaud_slice.primary.titre
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  titre: prismic.RichTextField;

  /**
   * Description field in *RenaudSlice → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: renaud_slice.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Default variation for RenaudSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RenaudSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<RenaudSliceSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *RenaudSlice*
 */
type RenaudSliceSliceVariation = RenaudSliceSliceDefault;

/**
 * RenaudSlice Shared Slice
 *
 * - **API ID**: `renaud_slice`
 * - **Description**: RenaudSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RenaudSliceSlice = prismic.SharedSlice<
  "renaud_slice",
  RenaudSliceSliceVariation
>;

/**
 * Primary content in *TeamSection → Primary*
 */
export interface TeamSectionSliceDefaultPrimary {
  /**
   * Section Title field in *TeamSection → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Our Team
   * - **API ID Path**: team_section.primary.section_title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  section_title: prismic.TitleField;
}

/**
 * Primary content in *TeamSection → Items*
 */
export interface TeamSectionSliceDefaultItem {
  /**
   * Name field in *TeamSection → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Name of the team member
   * - **API ID Path**: team_section.items[].name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Position field in *TeamSection → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Position of the team member
   * - **API ID Path**: team_section.items[].position
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  position: prismic.KeyTextField;

  /**
   * Profile Picture field in *TeamSection → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: team_section.items[].profile_picture
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  profile_picture: prismic.ImageField<never>;
}

/**
 * Default Variation variation for TeamSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default variation displaying team members with their names, positions, and profile pictures.
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TeamSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TeamSectionSliceDefaultPrimary>,
  Simplify<TeamSectionSliceDefaultItem>
>;

/**
 * Slice variation for *TeamSection*
 */
type TeamSectionSliceVariation = TeamSectionSliceDefault;

/**
 * TeamSection Shared Slice
 *
 * - **API ID**: `team_section`
 * - **Description**: The Team Section is made of a card for each team member, each card contains a name, a position, and a profile picture.
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TeamSectionSlice = prismic.SharedSlice<
  "team_section",
  TeamSectionSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HeaderDocument,
      HeaderDocumentData,
      HeaderDocumentDataLinksItem,
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      AllDocumentTypes,
      FaqSliceSlice,
      FaqSliceSliceDefaultPrimary,
      FaqSliceSliceDefaultItem,
      FaqSliceSliceVariation,
      FaqSliceSliceDefault,
      CtaSliceSlice,
      CtaSliceSliceDefaultPrimary,
      CtaSliceSliceVariation,
      CtaSliceSliceDefault,
      RenaudSliceSlice,
      RenaudSliceSliceDefaultPrimary,
      RenaudSliceSliceVariation,
      RenaudSliceSliceDefault,
      TeamSectionSlice,
      TeamSectionSliceDefaultPrimary,
      TeamSectionSliceDefaultItem,
      TeamSectionSliceVariation,
      TeamSectionSliceDefault,
    };
  }
}
