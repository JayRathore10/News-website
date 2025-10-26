import { Link } from 'react-router-dom';
import './News.css';

export function News({ news , index}) {
  return (
    <div className="news-div">
      <Link to={`/news/${index}`} rel="noopener noreferrer">
        <img src={news.urlToImage} alt='favicon.png' className="news-img" />
      </Link>
      <div className="news-des">
        <Link to={`/news/${index}`} className="news-heading">{news.title}</Link>
        <p>{news.description}</p>
      </div>
    </div>
  );
}
