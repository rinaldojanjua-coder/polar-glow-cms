import type { Block } from 'payload'

export const ContactInfoBlock: Block = {
  slug: 'contactInfo',
  interfaceName: 'ContactInfoBlock',
  labels: {
    plural: 'Contact Info Blocks',
    singular: 'Contact Info Block',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'Contact Information',
    },
    {
      name: 'showForm',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Show the contact form alongside the info',
      },
    },
  ],
}
