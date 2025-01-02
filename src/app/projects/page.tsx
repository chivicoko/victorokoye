import Link from 'next/link'
import React from 'react'

const Leads = () => {
  return (
    <>
      <p>ProjectsTable</p> <br />
      <Link href='/projects/single-lead' className='py-2 px-3 bg-blue-600 hover:bg-blue-500 text-white rounded-sm my-2'>Single Project</Link> <br />
    </>
  )
}

export default Leads