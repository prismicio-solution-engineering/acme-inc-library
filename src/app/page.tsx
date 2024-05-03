import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices/index"
import Header from "@/components/Header";
import { Metadata } from "next";
import { notFound } from "next/navigation";


export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("homepage").catch(()=>{return null});

  return {
    title: page && page.data.meta_title,
    description: page && page.data.meta_description,
  };
}

export default async function Page({ }) {
  const client = createClient();

  const page = await client.getSingle("homepage").catch(()=>notFound());
  const header = await client.getSingle("header").catch(()=>notFound());

  return(
  <>
    <Header {...header}/>
    <SliceZone slices={page.data.slices} components={components}/>;
  </>
  )
}