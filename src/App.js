import React from 'react' 
import CitySelector from './CitySelector';
import './App.css'; 
import {Container} from 'react-bootstrap'; 
import UseFetch from './UseFetch'; 
import {API_Key, Base} from './keys'; 
import WeatherList from './WeatherList'; 
const App = () => { 
  const {data,error, isLoading, setUrl} = UseFetch(); 
  const getcontent = () =>{ 
    if (error) return <h2>Error when fetching: {error}</h2> 
    if(!data && isLoading) return <h2>LOADING..</h2> 
    if(!data) return null; 
    return <WeatherList weathers={data.list} />
  };
  return (
    <Container className="App"> 
       <CitySelector onSearch={(city) => setUrl(`${Base}/data/2.5/forecast?q=${city}&cnt=5&appid=${API_Key}&units=metric`)}/>  
          {getcontent()}
    </Container>
  );
};

export default App;
