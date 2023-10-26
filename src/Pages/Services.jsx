import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5500/services')
        .then(res => res.json())
        .then(data => {
            setServices(data)
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    return (
        <div>
            <div className="text-center space-y-3">
                <h3 className="text-2xl font-bold text-orange-600">Our Services</h3>
                <h2 className="text-4xl font-bold">Our Services Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
                <p>Services: {services.length}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
                    
                    {
                        services.map(service => <Service key={service._id} service={service}></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;