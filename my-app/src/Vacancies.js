// import axios from 'axios';
//  import { useEffect, useState } from 'react';



//   const VacanciesList = () => { 
//     const [vacancies, setVacancies] = useState([]);
  
//    useEffect(() => { axios.get('http://localhost:1337/api/vacancies', {
//           headers: {
//             Authorization: 'Bearer dc004373854e467840b7e6392c86f2f9f53cd6062d6dba4217b16e1e35e6d33fa9e8c58ae3598097249f88e357eb30d0d970ce06f52c885ffad895105badd680aaf9248d888d685158abf810ba609b22c7f40b3fc8f62158ffe83a79146efa158716441fef778f7c1ba1c9ca37c2fa2f74d739bb2e452e80dee1b9fa871508a4', // Замените YOUR_API_TOKEN на ваш токен
//           },
//         })
//     .then(response => setVacancies(response.data)) 
//     .catch(error => console.error(error));
//      }, []); 
     


//      return ( 
//      <div> {
//         vacancies.map(vacancy => ( <div key={vacancy.id}> <h2>{vacancy.title}</h2>
//       <p>{vacancy.description}</p> </div> ))
//       } </div> 
//       );
//       } 
      
      
//       export default VacanciesList;


import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Vacancies = () => {
  const [vacancies, setVacancies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Функция для получения данных из API Strapi
    const fetchVacancies = async () => {
      try {
        // Отправка GET-запроса с использованием API-токена
        const response = await axios.get('http://localhost:1337/api/vacancies', {
          headers: {
            Authorization: 'Bearer dc004373854e467840b7e6392c86f2f9f53cd6062d6dba4217b16e1e35e6d33fa9e8c58ae3598097249f88e357eb30d0d970ce06f52c885ffad895105badd680aaf9248d888d685158abf810ba609b22c7f40b3fc8f62158ffe83a79146efa158716441fef778f7c1ba1c9ca37c2fa2f74d739bb2e452e80dee1b9fa871508a4', // Замените YOUR_API_TOKEN на ваш токен
          },
        });

        // Установка полученных данных в state
        setVacancies(response.data.data);
        setLoading(false);
      } catch (err) {
        // Обработка ошибок
        setError(err);
        setLoading(false);
      }
    };

    // Вызов функции при загрузке компонента
    fetchVacancies();
  }, []);

  // Отображение состояния загрузки, ошибки или данных
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Vacancies</h1>
      <ul>
        {vacancies.map((vacancy) => (
          <li key={vacancy.id}>
            <h2>{vacancy.Title}</h2>
            <p>{vacancy.Description}</p>
            <p>Salary: {vacancy.Salary}</p>
            <p>Location: {vacancy.Location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Vacancies;
