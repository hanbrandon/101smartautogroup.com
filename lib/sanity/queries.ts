import { client, urlFor } from './client';

export interface DealItem {
  _id?: string;
  image: string;
  title: string;
  price?: string;
  tag?: string;
}

export const DEFAULT_DEALS: DealItem[] = [
  {
    image: "/featured/deal-1.png",
    title: "101 Auto Group Featured Deal 1",
    price: "Inquire for Price",
    tag: "Special Offer"
  },
  {
    image: "/featured/deal-2.png",
    title: "101 Auto Group Featured Deal 2",
    price: "Inquire for Price",
    tag: "Featured"
  }
];

export async function getFeaturedDeals(): Promise<DealItem[]> {
  try {
    if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID === 'your-project-id') {
      return DEFAULT_DEALS;
    }

    const deals = await client.fetch(`*[_type == "featuredDeal"] | order(order asc, _createdAt desc){
      _id,
      title,
      price,
      tag,
      image
    }`);

    if (!deals || deals.length === 0) {
      return DEFAULT_DEALS;
    }

    return deals.map((deal: any) => ({
      _id: deal._id,
      title: deal.title || "Featured Deal",
      price: deal.price || "Inquire for Price",
      tag: deal.tag || "Special Offer",
      image: deal.image ? urlFor(deal.image).url() : "/featured/deal-1.png"
    }));
  } catch (error) {
    console.warn("Failed to fetch deals from Sanity, using fallback:", error);
    return DEFAULT_DEALS;
  }
}
