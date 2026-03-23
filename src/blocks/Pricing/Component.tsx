import React from 'react'

export const PricingBlockComponent: React.FC<any> = (props) => {
  const { heading, subtitle, tiers } = props
  return (
    <div className="container mx-auto px-4 py-16">
      {heading && <h2 className="text-3xl font-bold text-center mb-4">{heading}</h2>}
      {subtitle && <p className="text-center text-gray-600 mb-12">{subtitle}</p>}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers?.map((tier: any, i: number) => (
          <div key={i} className={`bg-white p-8 shadow-md border-t-4 ${tier.highlighted ? 'border-t-blue-500' : 'border-t-gray-200'}`}>
            <h3 className="text-lg font-semibold mb-2">{tier.name}</h3>
            <div className="text-3xl font-bold text-blue-500 mb-1">{tier.price}</div>
            {tier.duration && <div className="text-sm text-gray-500 mb-3">{tier.duration}</div>}
            {tier.description && <p className="text-gray-600 text-sm">{tier.description}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}
