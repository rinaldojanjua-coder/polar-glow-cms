import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'

const isAdmin = ({ req: { user } }: any) => user?.role === 'admin'

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    admin: authenticated,
    create: isAdmin,
    delete: isAdmin,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['name', 'email', 'role'],
    useAsTitle: 'name',
    hidden: ({ user }: any) => user?.role !== 'admin',
  },
  auth: true,
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'role',
      type: 'select',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Editor', value: 'editor' },
      ],
      defaultValue: 'editor',
      required: true,
      admin: {
        description: 'Admins can manage users. Editors can only edit content.',
      },
    },
  ],
  timestamps: true,
}
