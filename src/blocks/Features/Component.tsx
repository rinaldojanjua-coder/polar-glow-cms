import React from 'react'

export const FeaturesBlockComponent: React.FC<any> = (props) => {
  const { heading, image, features } = props
  return (
    <div className="container mx-auto px-4 py-16">
      {heading && <h2 className="text-3xl font-bold mb-8">{heading}</h2>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {image && <div><img src={typeof image === 'object' ? image.url : ''} alt={heading || ''} className="w-full rounded-lg" /></div>}
        <ul className="space-y-3">
          {features?.map((f: any, i: number) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-cyan-500 mt-1">✓</span>
              <span>{f.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
