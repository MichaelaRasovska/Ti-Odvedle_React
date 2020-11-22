import React, { useEffect, useState } from 'react';
import { database } from '../../db.js';

export const Catalogue = (props) => {
  const [peopleData, setPeopleData] = useState([]); //vytvořím si stav, do kterého si stáhnu data z databáze jako pole

  useEffect(() => {
    return database.collection('people').onSnapshot((query) => {
      setPeopleData(
        query.docs.map((doc) => {
          const data = doc.data(); //vytvořím si proměnnou data, do té uložím data z documents z firebasu
          data.id = doc.id; //do proměnné data.id si uložím id dat z firebasu
          return data;
        }),
      );
    });
  }, []); //useEffect volám při načtení stránky, ale onSnapshot updatuje data při změně

  return (
    <>
      <section className="Catalogue">
        <ul>
          {peopleData.map((item) => {
            return (
              <li key={item.id}>
                {item.name2}, {item.age} let: {item.description}
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};
