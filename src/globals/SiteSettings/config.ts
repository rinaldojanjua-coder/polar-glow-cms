import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site Settings',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Globals',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Business Info',
          fields: [
            {
              name: 'siteName',
              type: 'text',
              defaultValue: 'Polar Glow Detailing',
              required: true,
            },
            {
              name: 'tagline',
              type: 'text',
              defaultValue: "Alaska's Premier Auto Detailing",
            },
            {
              name: 'description',
              type: 'textarea',
              defaultValue: 'Professional mobile interior auto detailing in Eagle River, Alaska. We come to you! Every detail includes shampoo.',
            },
            {
              name: 'phone',
              type: 'text',
              defaultValue: '(760) 213-9943',
            },
            {
              name: 'email',
              type: 'text',
            },
            {
              name: 'address',
              type: 'text',
              defaultValue: 'Eagle River, AK 99577',
            },
            {
              name: 'hours',
              type: 'text',
              defaultValue: 'Mon–Sat 7am–6pm',
            },
            {
              name: 'sundayHours',
              type: 'text',
              defaultValue: 'Sun: Closed',
            },
            {
              name: 'bookingUrl',
              type: 'text',
              defaultValue: 'https://book.squareup.com/appointments/i29sd6gimvwp8t/location/L61N64Z45B3R9/services?buttonTextColor=ffffff&color=4a749b&locale=en&referrer=so',
              admin: {
                description: 'Square booking URL',
              },
            },
            {
              name: 'logo',
              type: 'upload',
              relationTo: 'media',
            },
          ],
        },
        {
          label: 'Service Areas',
          fields: [
            {
              name: 'serviceAreas',
              type: 'text',
              defaultValue: 'Eagle River, Anchorage, Palmer, Wasilla',
              admin: {
                description: 'Comma-separated list of service areas',
              },
            },
            {
              name: 'serviceAreasList',
              type: 'array',
              admin: {
                initCollapsed: true,
                description: 'Individual service area pages',
              },
              fields: [
                { name: 'name', type: 'text', required: true },
                { name: 'slug', type: 'text', required: true },
              ],
            },
          ],
        },
        {
          label: 'Social Media',
          fields: [
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
                    { label: 'TikTok', value: 'tiktok' },
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
          ],
        },
        {
          label: 'Homepage Content',
          fields: [
            {
              name: 'statsBar',
              type: 'array',
              defaultValue: [
                { value: '500+', label: 'Cars Detailed' },
                { value: '5.0', label: 'Star Rating' },
                { value: '10+', label: 'Years Experience' },
                { value: '100%', label: 'Satisfaction' },
              ],
              admin: { initCollapsed: true },
              fields: [
                { name: 'value', type: 'text', required: true },
                { name: 'label', type: 'text', required: true },
              ],
            },
            {
              name: 'whyChooseUs',
              type: 'array',
              admin: { initCollapsed: true },
              fields: [
                { name: 'title', type: 'text', required: true },
                { name: 'description', type: 'text', required: true },
              ],
            },
            {
              name: 'testimonials',
              type: 'array',
              admin: { initCollapsed: true },
              fields: [
                { name: 'quote', type: 'textarea', required: true },
                { name: 'author', type: 'text', required: true },
                { name: 'location', type: 'text' },
                { name: 'rating', type: 'number', defaultValue: 5, min: 1, max: 5 },
              ],
            },
            {
              name: 'ctaHeading',
              type: 'text',
              defaultValue: 'Ready for a Fresh Interior?',
            },
            {
              name: 'ctaSubtext',
              type: 'textarea',
              defaultValue: 'Book your mobile interior detail today. We come to you in Eagle River, Anchorage, Palmer, and Wasilla. Every detail includes shampoo!',
            },
          ],
        },
        {
          label: 'Footer',
          fields: [
            {
              name: 'footerDescription',
              type: 'textarea',
              defaultValue: 'Professional mobile interior auto detailing in Eagle River, Alaska. We bring the showroom shine to your driveway with professional-grade products and meticulous technique.',
            },
            {
              name: 'copyrightText',
              type: 'text',
              defaultValue: 'Polar Glow Detailing. All rights reserved.',
            },
          ],
        },
      ],
    },
  ],
}
