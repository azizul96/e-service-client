import React from 'react'
import { Link } from 'react-router-dom'


const ServiceCard = ({service}) => {
  return (
    <div className="">
        <Link to={`service/${service.id}`}>
        <div className="text-center bg-[#03ab9c] pt-2 rounded-lg">
            <div className="mx-1 bg-white rounded-lg">
                <div className="flex justify-center items-center text-red-500 text-2xl">
                    <img src={service.image} alt="" className='mt-5 mb-5 h-20 w-auto'/>
                </div>
                <p className=" pb-2 text-md font-bold">{service.name}</p>
            </div>
        </div>
        </Link>
    </div>
  )
}

export default ServiceCard
