import type { Block } from 'payload'

export const ProcessBlock: Block = {
  slug: 'process',
  interfaceName: 'ProcessBlock',
  labels: {
    plural: 'Process Blocks',
    singular: 'Process Block',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'Our Process',
    },
    {
      name: 'steps',
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
