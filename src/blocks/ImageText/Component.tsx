import React from 'react'

export const ImageTextBlock: React.FC<any> = (props) => {
  const { heading, text, imagePosition } = props

  return (
    <div className="container mx-auto px-4 py-16">
      <div className={`flex flex-col md:flex-row gap-8 items-center ${imagePosition === 'right' ? 'md:flex-row-reverse' : ''}`}>
        <div className="flex-1">
          {heading && <h2 className="text-3xl font-bold mb-4">{heading}</h2>}
          {text && <p className="text-gray-600">{text}</p>}
        </div>
        <div className="flex-1">
          <div className="bg-gray-200 rounded-lg aspect-video" />
        </div>
      </div>
    </div>
  )
}
