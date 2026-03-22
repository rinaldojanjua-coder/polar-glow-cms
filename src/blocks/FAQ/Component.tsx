import React from 'react'

export const FAQBlock: React.FC<any> = (props) => {
  const { heading, faqs } = props

  return (
    <div className="container mx-auto px-4 py-16">
      {heading && <h2 className="text-3xl font-bold text-center mb-12">{heading}</h2>}
      {faqs && faqs.length > 0 && (
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq: any, i: number) => (
            <details key={i} className="bg-white rounded-lg shadow-md p-4">
              <summary className="font-semibold cursor-pointer">{faq.question}</summary>
              <p className="mt-3 text-gray-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      )}
    </div>
  )
}
