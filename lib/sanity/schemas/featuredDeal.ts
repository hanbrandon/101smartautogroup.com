import { defineField, defineType } from 'sanity';

export const featuredDeal = defineType({
  name: 'featuredDeal',
  title: 'Featured Deal',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price / Subtitle',
      type: 'string',
      initialValue: 'Inquire for Price',
    }),
    defineField({
      name: 'tag',
      title: 'Tag / Badge',
      type: 'string',
      initialValue: 'Special Offer',
    }),
    defineField({
      name: 'image',
      title: 'Deal Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
});
