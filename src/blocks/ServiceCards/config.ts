import type { Block } from 'payload'

export const ServiceCardsBlock: Block = {
  slug: 'serviceCards',
  interfaceName: 'ServiceCardsBlock',
  labels: {
    plural: 'Service Cards Blocks',
    singular: 'Service Cards Block',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'Our Services',
    },
    {
      name: 'subheading',
      type: 'text',
    },
    {
      name: 'cards',
      type: 'array',
      minRows: 1,
      maxRows: 12,
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'price',
          type: 'text',
          required: true,
        },
        {
          name: 'duration',
          type: 'text',
        },
        {
          name: 'description',
          type: 'text',
        },
        {
          name: 'image',
          type: 'text',
          admin: {
            description: 'Path to image (e.g. /images/detail-work-3.jpg)',
          },
        },
        {
          name: 'link',
          type: 'text',
          admin: {
            description: 'URL to link to (e.g. /trucks-small-cars)',
          },
        },
      ],
    },
  ],
}
