import type { Block } from 'payload'

export const FeaturesBlock: Block = {
  slug: 'features',
  interfaceName: 'FeaturesBlock',
  labels: {
    plural: 'Features Blocks',
    singular: 'Features Block',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      defaultValue: "What's Included",
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Image displayed next to the features list',
      },
    },
    {
      name: 'features',
      type: 'array',
      minRows: 1,
      maxRows: 12,
      admin: {
        initCollapsed: false,
      },
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
