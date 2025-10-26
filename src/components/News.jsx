import './News.css';

export function News({ news }) {
  return (
    <div className="news-div">
      <a href={news.url} target="_blank" rel="noopener noreferrer">
        <img src={news.urlToImage} alt='favicon.png' className="news-img" />
      </a>
      <div className="news-des">
        <a href={news.url} className="news-heading">{news.title}</a>
        <p>{news.description}</p>
      </div>
    </div>
  );
}
