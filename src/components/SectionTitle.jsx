import React from 'react'

const SectionTitle = ({heading}) => {
  return (
    <div className="md:w-3/12 mx-auto text-center my-5">
        <h3 className="text-2xl uppercase py-3 text-red-600 ">{heading}</h3>
    </div>
  )
}

export default SectionTitle
