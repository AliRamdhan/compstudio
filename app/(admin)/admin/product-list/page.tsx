import Title from '@/laduny/components/admin/Title'
import React from 'react'
import AddButton from './_components/AddButton'
import ProductTable from '@/laduny/components/admin/ProductTable'

function page() {
    const products = [
        {
          id: 1,
          name: 'Product 1',
          price: 10,
          link: 'https://tokopedia.link/Mm3K1r1bjJb',
        },
        {
          id: 2,
          name: 'Product 2',
          price: 20,
          link: 'https://example.com/product2',
        },
        {
          id: 3,
          name: 'Product 3',
          price: 30,
          link: 'https://example.com/product3',
        },
      ];
  return (
    <section>
        <Title title='Product List'/>
        <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="text-center">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Id
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Price
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Link
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Action
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                <AddButton />
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 text-center">
            {products.map((product, index) => (
              <ProductTable key={index} {...product} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default page