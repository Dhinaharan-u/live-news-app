import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
export const Livenews = () => {
 const [result,setResult]=useState([])



const url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2fcd1980e33349f39008d563f19bff87"
useEffect(()=>{
  const fetchData=async()=>{
    
    // const data=await getapi.json()
   //setResult(data.articles) 
   
   const data= await axios.get(url)
   setResult(data.data.articles)

}
  fetchData()
},[])

console.log(result);



return(
  <>
  <h1>Live News</h1>

<div className='container'>{ result.map((values,index)=>{return(
<div key={index} className='contents'>
<h2> Published Date:{values.publishedAt}</h2><hr></hr>
<h3>Description:{values.description}</h3>
  <img  className='newsimg' src={values.urlToImage} alt='Image not available'></img>
<a href={values.url}>click to see the visualize</a>;

<p>{ values? values.content:<p>not available</p> }</p>
</div>
)})
    
    
    }</div>



</>

)
}
