import Title from '@/laduny/components/admin/Title'
import React from 'react'
import AddButton from './_components/AddButton'
import ServiceTable from '@/laduny/components/admin/ServiceTable'

function page() {

  const services = [
    {
      id: 1,
      name: "Service 1",
      problem: "Problem 1",
      price: 50.00,
    },
    {
      id: 2,
      name: "Service 2",
      problem: "Problem 2",
      price: 75.00,
    },
    {
      id: 3,
      name: "Service 3",
      problem: "Problem 3",
      price: 100.00,
    },
  ];

  return (
    <section>
        <Title title='Service List'/>
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
                Problem
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Price
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
            {services.map((service, index) => (
              <ServiceTable key={index} {...service} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default page