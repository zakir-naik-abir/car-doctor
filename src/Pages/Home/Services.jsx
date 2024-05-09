import { useEffect, useState } from "react"
import ServiceCard from "./ServiceCard";
import axios from "axios";

const Services = () => {

  const [services, setServices] = useState([]);

  const url = 'https://car-doctor-server-seven-gold.vercel.app/services';
  useEffect( () =>{
    // fetch(url)
    // .then(res => res.json())
    // .then(data => setServices(data))
    axios.get(url, {withCredentials: true})
    .then(res => {
      setServices(res.data);
    })
  },[url])
  

  return (
    <div className="mt-4">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-orange-600">Our Services</h3>
        <h2 className="text-5xl">Our Service Area</h2>
        <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          services?.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
        }
      </div>
    </div>
  )
}

export default Services