import { useParams } from 'react-router-dom';
import './NewsDesPage.css';

export function NewsDesPage({  articles }) {

  let {id} = useParams();
  const news = articles[id];

  if(!news) return (
    <p>News Not found</p>
  )

  return (
    <>
      <div className="des-news-div" >
        <div className="des-news-des">
          <h1 href={news.url} className="des-news-heading">{news.title}</h1>
        </div>
        <img src={news.urlToImage} alt='favicon.png' className="des-news-img" />
        <div className='des-news-content'>
          {news.content}
        </div>
      </div>
    </>
  );
}