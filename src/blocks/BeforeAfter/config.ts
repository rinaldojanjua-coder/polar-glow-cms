import type { Block } from 'payload'

export const BeforeAfterBlock: Block = {
  slug: 'beforeAfter',
  interfaceName: 'BeforeAfterBlock',
  labels: {
    plural: 'Before/After Blocks',
    singular: 'Before/After Block',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'See the Difference',
    },
    {
      name: 'subheading',
      type: 'text',
      defaultValue: 'Drag the slider to see real before and after results from our detailing work.',
    },
    {
      name: 'pairs',
      type: 'array',
      minRows: 1,
      maxRows: 10,
      admin: {
        initCollapsed: false,
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'beforeImage',
          type: 'text',
          required: true,
          admin: {
            description: 'Path to before image',
          },
        },
        {
          name: 'afterImage',
          type: 'text',
          required: true,
          admin: {
            description: 'Path to after image',
          },
        },
      ],
    },
  ],
}
