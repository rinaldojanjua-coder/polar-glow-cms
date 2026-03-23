import type { Block } from 'payload'

export const AreaInfoBlock: Block = {
  slug: 'areaInfo',
  interfaceName: 'AreaInfoBlock',
  labels: {
    plural: 'Area Info Blocks',
    singular: 'Area Info Block',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'image',
      type: 'text',
      admin: {
        description: 'Path to area image (e.g. /images/eagle-river.jpg)',
      },
    },
    {
      name: 'neighborhoods',
      type: 'array',
      admin: {
        initCollapsed: false,
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'highlights',
      type: 'array',
      admin: {
        initCollapsed: false,
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'text',
          required: true,
        },
        {
          name: 'icon',
          type: 'text',
          defaultValue: '✓',
        },
      ],
    },
  ],
}
