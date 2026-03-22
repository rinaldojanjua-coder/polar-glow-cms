import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const ServicesBlock: Block = {
  slug: 'services',
  interfaceName: 'ServicesBlock',
  labels: {
    plural: 'Services Blocks',
    singular: 'Services Block',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'Our Services',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'services',
      type: 'array',
      minRows: 1,
      maxRows: 8,
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'icon',
          type: 'select',
          defaultValue: 'wrench',
          options: [
            { label: 'Wrench', value: 'wrench' },
            { label: 'Home', value: 'home' },
            { label: 'Shield', value: 'shield' },
            { label: 'Droplets', value: 'droplets' },
            { label: 'Sparkles', value: 'sparkles' },
            { label: 'Leaf', value: 'leaf' },
            { label: 'Star', value: 'star' },
            { label: 'Check', value: 'check' },
          ],
        },
        {
          name: 'link',
          type: 'text',
          admin: {
            description: 'Optional URL to a dedicated page for this service',
          },
        },
      ],
    },
  ],
}
