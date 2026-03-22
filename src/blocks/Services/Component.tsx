import React from 'react'

export const ServicesBlock: React.FC<any> = (props) => {
  const { heading, services } = props

  return (
    <div className="container mx-auto px-4 py-16">
      {heading && <h2 className="text-3xl font-bold text-center mb-12">{heading}</h2>}
      {services && services.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service: any, i: number) => (
            <div key={i} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              {service.description && <p className="text-gray-600 mb-4">{service.description}</p>}
              {service.price && <p className="text-lg font-bold text-blue-600">{service.price}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
