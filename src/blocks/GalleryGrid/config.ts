import type { Block } from 'payload'

export const GalleryGridBlock: Block = {
  slug: 'galleryGrid',
  interfaceName: 'GalleryGridBlock',
  labels: {
    plural: 'Gallery Grid Blocks',
    singular: 'Gallery Grid Block',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'Our Real Work',
    },
    {
      name: 'subheading',
      type: 'text',
    },
    {
      name: 'images',
      type: 'array',
      minRows: 1,
      maxRows: 30,
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'src',
          type: 'text',
          required: true,
          admin: {
            description: 'Image path (e.g. /images/detail-work-1.jpg)',
          },
        },
        {
          name: 'alt',
          type: 'text',
          defaultValue: 'Polar Glow Detailing work',
        },
      ],
    },
  ],
}
