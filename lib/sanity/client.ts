import { createClient } from '@sanity/client';
import createImageUrlBuilder from '@sanity/image-url';
import { projectId, dataset, apiVersion } from './config';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
});

const builder = createImageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
