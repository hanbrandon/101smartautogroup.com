import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { featuredDeal } from './lib/sanity/schemas/featuredDeal';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '0wr4b0hj';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
  basePath: '/studio',
  name: '101AutoGroup_Studio',
  title: '101 Auto Group Studio',
  projectId,
  dataset,
  plugins: [structureTool()],
  schema: {
    types: [featuredDeal],
  },
});
