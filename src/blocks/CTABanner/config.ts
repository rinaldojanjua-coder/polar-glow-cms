import type { Block } from 'payload'

export const CTABannerBlock: Block = {
  slug: 'ctaBanner',
  interfaceName: 'CTABannerBlock',
  labels: {
    plural: 'CTA Banner Blocks',
    singular: 'CTA Banner Block',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'Ready to Get Started?',
    },
    {
      name: 'subheading',
      type: 'text',
      defaultValue: 'Contact us for a free estimate. We come to you anywhere in the Eagle River and Anchorage area.',
    },
    {
      name: 'primaryButtonText',
      type: 'text',
      defaultValue: 'Book Now',
    },
    {
      name: 'primaryButtonUrl',
      type: 'text',
      defaultValue: 'https://book.squareup.com/appointments/i29sd6gimvwp8t/location/L61N64Z45B3R9/services?buttonTextColor=ffffff&color=4a749b&locale=en&referrer=so',
    },
    {
      name: 'secondaryButtonText',
      type: 'text',
      defaultValue: 'Call (760) 213-9943',
    },
    {
      name: 'secondaryButtonUrl',
      type: 'text',
      defaultValue: 'tel:7602139943',
    },
    {
      name: 'style',
      type: 'select',
      defaultValue: 'dark',
      options: [
        { label: 'Dark', value: 'dark' },
        { label: 'Light', value: 'light' },
      ],
    },
  ],
}
