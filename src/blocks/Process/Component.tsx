import React from 'react'

export const ProcessBlockComponent: React.FC<any> = (props) => {
  const { heading, steps } = props
  return (
    <div className="container mx-auto px-4 py-16">
      {heading && <h2 className="text-3xl font-bold text-center mb-12">{heading}</h2>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps?.map((step: any, i: number) => (
          <div key={i} className="relative p-6">
            <div className="text-5xl font-black text-blue-100 absolute top-2 left-4">{String(i + 1).padStart(2, '0')}</div>
            <div className="relative pt-8">
              <p className="text-gray-600 text-sm">{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
