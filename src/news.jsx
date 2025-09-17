import React, { useState, useEffect } from 'react';
import axios from 'axios';


export const Livenews = () => {
  const [result, setResult] = useState([]);
  const [category, setCategory] = useState("Technology"); // default category

  const apiKey = "2fcd1980e33349f39008d563f19bff87";
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(url);
        setResult(data.data.articles);
      } catch (err) {
        console.error("Error fetching news:", err);
      }
    };
    fetchData();
  }, [category]); // runs when category changes

  return (
    <>
      {/* Navbar */}
      <nav >
        <h1>🔴 LIVE NEWS  {category.charAt(0).toUpperCase() + category.slice(1)}</h1>

        <ul style={{ display: "flex", listStyle: "none", gap: "20px", margin: 0, padding: 0 }}>
          <li><button onClick={() => setCategory("sports")} >Sports</button></li>
          <li><button onClick={() => setCategory("business")} >Business</button></li>
          
          <li><button onClick={() => setCategory("technology")} >Technology</button></li>
          <li><button onClick={() => setCategory("health")} >Health</button></li>
         <li>
  
   
</li>
        </ul>
      </nav>
<div className='newscontainer'>

  <div className='newscard' >
        {result.length > 0 ? (
          result.map((values, index) => (
            <div  className='card' key={index} >
              
<img
  className="newsimg"
  src={values.urlToImage ? values.urlToImage : "/public/loadingimage.png"}
  alt={values.title || "News image"}
/>
<p ><strong>Published:</strong> {values.publishedAt}</p>

              <h4>{values.title}</h4>
              
              <p>{values.description || "No description available"}</p>
<a href={values.url} target="_blank" rel="noopener noreferrer">
  Read Full Article
</a>

            </div>
          ))
        ) : (
          <p>No news available for this category.</p>
        )}
      </div>
</div>
      
      
    </>
  );
};
