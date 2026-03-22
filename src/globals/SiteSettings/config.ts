import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site Settings',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'siteName',
      type: 'text',
      defaultValue: 'AK Gutter Gals',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
      defaultValue: '907-599-0123',
    },
    {
      name: 'email',
      type: 'text',
    },
    {
      name: 'address',
      type: 'textarea',
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'socialLinks',
      type: 'array',
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'platform',
          type: 'select',
          options: [
            { label: 'Facebook', value: 'facebook' },
            { label: 'Instagram', value: 'instagram' },
            { label: 'Google', value: 'google' },
            { label: 'Yelp', value: 'yelp' },
          ],
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'serviceAreas',
      type: 'text',
      defaultValue: 'Anchorage, Eagle River, Girdwood, Palmer, Wasilla',
      admin: {
        description: 'Comma-separated list of service areas',
      },
    },
  ],
}
