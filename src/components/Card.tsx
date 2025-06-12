type NewsItem = {
  title: string;
  description: string;
  urlToImage: string;
  url: string;
};

type CardProps = {
  data: NewsItem[];
};
const Card = ({data}: CardProps) => {
    console.log("Data is received",data);
  return (
    <div className="cardContainer">
  {data.map((curItem, index) =>
    curItem.urlToImage ? (
      <div className="card" key={index}>
        <img src={curItem.urlToImage} alt={curItem.title} />
        <div className="content">
          <a className="title" href={curItem.url}>{curItem.title}</a>
          <p>{curItem.description}</p>
          <button onClick={() => window.open(curItem.url, "_blank")}>Read More</button>
        </div>
      </div>
    ) : null 
  )}
</div>

  );
}

export default Card