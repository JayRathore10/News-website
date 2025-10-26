import './News.css';

export function News({ news }) {
  return (
    <div className="news-div">
      <a href={news.url} target="_blank" rel="noopener noreferrer">
        <img src={news.urlToImage} alt={news.title} className="news-img" />
      </a>
      <div className="news-des">
        <h1 className="news-heading">{news.title}</h1>
        <p>{news.description}</p>
      </div>
    </div>
  );
}
