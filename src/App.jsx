import { useEffect, useState } from 'react';
import axios from 'axios';
import { Search } from './components/Search';
import { News } from './components/News';
import { Header } from './components/Header';
import { Routes, Route } from 'react-router-dom';
import { NewsDesPage } from './pages/NewsDesPage';
import './App.css';

function App() {

  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState('');

  // for the current date
  //const today = new Date().toISOString().split('T')[0];

  // const apiKey = `a6060425be3f4ac19c6fb8ee9a680772`;

  // const query = !search ? "news" : search;


  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(`/api/news?q=${search || "news"}`);
        setArticles(res.data.articles);
      } catch (error) {
        console.log(error);
      }
    }
    fetchNews();
  }, [search]);


  return (
    <>
      <Header />
      <Search
        setSearch={setSearch}
      />

      <Routes>
        <Route path='/'
          element={
            articles.map((news, index) => (
              <News
                key={index}
                news={news}
                index = {index}
              />
            ))
          }
        />
        <Route path='/news/:id'
          element={
            <NewsDesPage  articles={articles}/>
          }
        />
        </Routes>
    </>
  );
}

export default App;