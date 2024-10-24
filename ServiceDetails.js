import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  const services = [
    { id: 1, name: 'Design' },
    { id: 2, name: 'Development' },
    { id: 3, name: 'Research' },
  ];

  return (
    <div>
      <h1>Our Services</h1>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            <Link to={`/services/${service.id}`}>{service.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;