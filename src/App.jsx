import { useEffect , useState } from 'react';
import axios from 'axios';
import './App.css';

function App(){

  const [articles , setArticles] = useState([]);

  const apiKey = `a6060425be3f4ac19c6fb8ee9a680772`;

  useEffect(()=>{
    const fetchNews = async()=>{
      try{
        const res = await axios.get(`https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=${apiKey}`);
        setArticles(res.data.articles);
        console.log(res.data.articles);
      }catch(error){
        console.log(error);
      }     
    }
    fetchNews();
  } , [apiKey]);  

  return(
    <>
      {
        articles.map((news, index)=>(
           <p
            key={index}
          >
            {news.title}
          </p>
        ))
      }
    </>
  );
}

export default App;