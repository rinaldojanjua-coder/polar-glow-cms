import type { Block } from 'payload'

export const PricingBlock: Block = {
  slug: 'pricing',
  interfaceName: 'PricingBlock',
  labels: {
    plural: 'Pricing Blocks',
    singular: 'Pricing Block',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'Pricing',
    },
    {
      name: 'subtitle',
      type: 'text',
      defaultValue: 'Transparent pricing with no hidden fees. All prices include mobile service.',
    },
    {
      name: 'tiers',
      type: 'array',
      minRows: 1,
      maxRows: 6,
      admin: {
        initCollapsed: false,
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
          name: 'highlighted',
          type: 'checkbox',
          defaultValue: false,
          admin: {
            description: 'Highlight this tier with accent color',
          },
        },
      ],
    },
  ],
}
