import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Componente principal de la aplicación
function App() {
  const [data, setData] = useState([]); // Estado para almacenar los datos
  const [loading, setLoading] = useState(true); // Estado para indicar si los datos se están cargando

  useEffect(() => {
    // Función para cargar los datos usando Axios
    const fetchData = async () => {
      try {
        const response = await axios.get('(https://jsonplaceholder.typicode.com/'); // Cambia la URL por la API que desees consultar
        setData(response.data); // Actualiza el estado con los datos recibidos
        setLoading(false); // Indica que la carga de datos ha finalizado
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(); // Llama a la función para cargar los datos al montar el componente
  }, []);

  // Componente que muestra la lista de datos
  const DataList = () => {
    return (
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    );
  };

  // Componente de carga mientras se obtienen los datos
  const Loading = () => {
    return <p>Loading...</p>;
  };

  return (
    <div>
      <h1>My React App</h1>
      {loading ? <Loading /> : <DataList />}
    </div>
  );
}

export default App;
