import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import SectionTitle from '../components/SectionTitle'
import ServiceCard from '../components/ServiceCard';

const Home = () => {
  const [allService, setAllService] = useState([]);

    useEffect(()=>{
        fetch("service.json")
        .then(res => res.json())
        .then(data => setAllService(data))
    },[])

  return (
    <main>
      <Banner/>
      <section className='container mx-auto px-4 mt-10'>
        <SectionTitle heading="All Services"/>
        <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 container mx-auto mt-10'>
          {
            allService?.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
          }
        </div>
      </section>
      
    </main>
  )
}

export default Home
