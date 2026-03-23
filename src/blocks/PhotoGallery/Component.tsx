import React from 'react'

export const PhotoGalleryBlockComponent: React.FC<any> = (props) => {
  const { heading, photos } = props
  return (
    <div className="container mx-auto px-4 py-16">
      {heading && <h3 className="text-xl font-bold text-center mb-8">{heading}</h3>}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {photos?.map((p: any, i: number) => (
          <div key={i} className="aspect-square overflow-hidden">
            <img
              src={typeof p.image === 'object' ? p.image.url : ''}
              alt={p.alt || 'Detailing work'}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
