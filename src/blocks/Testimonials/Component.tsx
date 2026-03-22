import React from 'react'

export const TestimonialsBlock: React.FC<any> = (props) => {
  const { heading, testimonials } = props

  return (
    <div className="container mx-auto px-4 py-16 bg-gray-50">
      {heading && <h2 className="text-3xl font-bold text-center mb-12">{heading}</h2>}
      {testimonials && testimonials.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t: any, i: number) => (
            <div key={i} className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-600 italic mb-4">"{t.quote}"</p>
              <div className="font-semibold">{t.author}</div>
              {t.location && <div className="text-sm text-gray-500">{t.location}</div>}
              {t.rating && <div className="text-yellow-500">{'★'.repeat(t.rating)}</div>}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
