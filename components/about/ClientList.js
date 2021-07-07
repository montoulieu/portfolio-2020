import React from 'react';
import clients from '../../json/clients.json';

function ClientList() {
  return (
    <div>
      <h2 className="text-blue-300 text-3xl text-center italic">Worked with:</h2>
      <ul className="blue-filter flex flex-row items-end justify-center">
        {clients.map((client) => (
          <li className="px-4">
            <img
              src={client.logo}
              className={`${client.height ? client.height : 'h-10'}`}
              alt="client logo"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientList;
