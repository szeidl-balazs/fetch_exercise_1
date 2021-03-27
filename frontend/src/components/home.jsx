import React, {useState, useEffect} from 'react';
import PersonData from './PersonData';

function Home() {  
  /*const user = '10';*/
  const [data, setData] = useState([]);
  const [input, setInput] = useState('1');   

  const url = `https://jsonplaceholder.typicode.com/users/${input}`
  
  const inputHandler = (e) => {
    setInput(e.target.value);
  }     

  useEffect(() => {
      fetch(url)
      .then(response => response.json())
      .then(json => setData(json))
  }, [url]);
          
     
     console.log(data.address);
     /*console.log(`name: ${data.name}, email: ${data.email}, city: ${data.address.city}`);*/
     /*console.log(data.address.city);*/

    return (
      <div className='home-wrapper'>
        <input type="text" placeholder="write the user ID" onChange={inputHandler}/>
        <div>
         <PersonData         
          name={data.name}         
          phone={data.phone}
          email={data.email}
          
          />
        </div>        
      </div>
    );
}


export default Home;
