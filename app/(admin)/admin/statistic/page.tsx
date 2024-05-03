import CardLineChart from '@/laduny/components/admin/CardLineChart';
import React from 'react'

function page() {

  const data = [10, 20, 30, 40, 50];
  const labels = ['A', 'B', 'C', 'D', 'E'];

  return (
    <section className='p-6 bg-white'>
      <div className='grid grid-cols-3 gap-6'>
        <CardLineChart/>
      </div>
    </section>
  )
}

export default page