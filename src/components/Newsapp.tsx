import { useState } from "react";
import Card from "./Card"
import { useEffect } from "react";
const Newsapp = () => {
    const [search, setSearch]=useState("india");
    const [newsData,setNewsData]=useState(null);
    

useEffect(() => {
  getData();
}, []);

    const API_KEY="e2515404e76946e5aeef9b92c55c862e";
    const getData = async (query?: string) => {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${query || search}&apiKey=${API_KEY}`
  );
  const jsonData = await response.json();
  setNewsData(jsonData.articles);
};

        const userInput = (event: React.MouseEvent<HTMLButtonElement>) => {
        setSearch(event.currentTarget.value); 
    };


    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
     console.log(e.target.value);
     setSearch(e.target.value);
};

  return (
    <div>
        <nav>
            <div>
                <h1>Trendy News</h1>
            </div>
            <ul>
  <a href="#" onClick={(e) => { e.preventDefault(); getData("all"); }}>All News</a>
  <a href="#" onClick={(e) => { e.preventDefault(); getData("trending"); }}>Trending</a>
</ul>

            <div className="searchBar">
                <input type="text" placeholder="Search News" value={search} onChange={handleInput} />
                <button onClick={() => getData()}>Search</button>

            </div>
        </nav>
        <div>
            <p className="head">Stay Update with Trendy News</p>
        </div>
        <div className="categorybtn">
        <button onClick={userInput} value="sports">Sports</button>
        <button onClick={userInput} value="politics">Politics</button>
        <button onClick={userInput} value="entertainment">Entertainment</button>
        <button onClick={userInput} value="health">Health</button>
        <button onClick={userInput} value="fitness">Fitness</button>
        </div>
        <div>
            {newsData ? <Card data={newsData} /> : <p>Loading...</p>}
            
        </div>
    </div>
  )
}

export default Newsapp