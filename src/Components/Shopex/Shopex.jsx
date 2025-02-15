import { useEffect, useState } from 'react';
import axios from 'axios';
import HomeTitle from '../HomeTitle/HomeTitle';
import Container from '../../Container/Container';

const Shopex = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/Shopex.json')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <HomeTitle text="What Shopex Offer!" />
      <Container>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {data.map((item, index) => (
            <div key={index} className='w-full'>
              <div className="flex flex-col items-center justify-center p-6 bg-white shadow-md rounded-lg">
                <div className="mb-4">
                  <img src={item.img} alt={item.title} className="w-full h-auto" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{item.title}</h3>
                <p className="text-gray-400 text-center">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}

export default Shopex;
