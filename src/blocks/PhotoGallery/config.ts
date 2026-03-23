import type { Block } from 'payload'

export const PhotoGalleryBlock: Block = {
  slug: 'photoGallery',
  interfaceName: 'PhotoGalleryBlock',
  labels: {
    plural: 'Photo Gallery Blocks',
    singular: 'Photo Gallery Block',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'Real Results',
    },
    {
      name: 'photos',
      type: 'array',
      minRows: 1,
      maxRows: 16,
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
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
