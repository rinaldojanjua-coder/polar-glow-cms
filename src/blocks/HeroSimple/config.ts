import type { Block } from 'payload'

export const HeroSimpleBlock: Block = {
  slug: 'heroSimple',
  interfaceName: 'HeroSimpleBlock',
  labels: {
    plural: 'Hero Simple Blocks',
    singular: 'Hero Simple Block',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'subheading',
      type: 'text',
    },
    {
      name: 'backgroundImage',
      type: 'text',
      admin: {
        description: 'Path to background image (e.g. /images/hero-car.jpg)',
      },
    },
  ],
}
