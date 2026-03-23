import type { Block } from 'payload'

export const StatsBannerBlock: Block = {
  slug: 'statsBanner',
  interfaceName: 'StatsBannerBlock',
  labels: {
    plural: 'Stats Banner Blocks',
    singular: 'Stats Banner Block',
  },
  fields: [
    {
      name: 'stats',
      type: 'array',
      minRows: 1,
      maxRows: 8,
      admin: {
        initCollapsed: false,
      },
      fields: [
        {
          name: 'value',
          type: 'text',
          required: true,
        },
        {
          name: 'label',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
