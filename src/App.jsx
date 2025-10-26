import { useEffect , useState } from 'react';
import axios from 'axios';
import { Search } from './components/Search';
import { News } from './components/News';
import { Header } from './components/header';
import './App.css';

function App(){

  const [articles , setArticles] = useState([]);
  const [search  , setSearch] = useState('');

  // for the current date
  //const today = new Date().toISOString().split('T')[0];

  const apiKey = `a6060425be3f4ac19c6fb8ee9a680772`;

  const query = !search ?"news" : search;


  useEffect(()=>{
    const fetchNews = async()=>{
      try{
        const res = await axios.get(`https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=${apiKey}`);
        setArticles(res.data.articles);
      }catch(error){
        console.log(error);
      }     
    }
    fetchNews();
  } , [apiKey , query ]);  


  return(
    <>
      <Header />
      <Search 
        setSearch={setSearch}
      />
      {
        articles.map((news, index)=>(
          <News
            key = {index}
            news = {news}
          />
        ))
      }
    </>
  );
}

export default App;