import './News.css';

export function News({news}){
  return(
    <>
      <div className='news-div'>
        <h1>{news.title}</h1>
        <a href={news.url} target='_blank'>
          <img src={news.urlToImage} alt={news.title} className='news-img'/>
        </a>
        <p>{news.description}</p>
      </div>
    </>
  );
}