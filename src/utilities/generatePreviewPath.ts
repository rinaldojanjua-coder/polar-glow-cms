import { PayloadRequest, CollectionSlug } from 'payload'

const collectionPrefixMap: Partial<Record<CollectionSlug, string>> = {
  posts: '/blog',
  pages: '',
}

type Props = {
  collection: keyof typeof collectionPrefixMap
  slug: string
  req: PayloadRequest
}

export const generatePreviewPath = ({ collection, slug }: Props) => {
  if (slug === undefined || slug === null) {
    return null
  }

  const prefix = collectionPrefixMap[collection] ?? ''
  const astroUrl = process.env.ASTRO_URL || 'http://localhost:4321'

  // Point to the Astro frontend
  if (slug === 'home' && collection === 'pages') {
    return `${astroUrl}/`
  }

  return `${astroUrl}${prefix}/${slug}`
}
