import React, { useState, useEffect } from "react";
import Card from './Card.jsx'
import './App.css'

function App() {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState(true);
  const [seconds, setSeconds] = useState(10);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const controller = new AbortController();

    async function loadPost() {
      try {
        setStatus("loading");
        const response = await fetch(
          "https://api.freeapi.app/api/v1/public/youtube/videos",
          { signal: controller.signal }
        );
        let data = await response.json();
      data=data['data']['data']
           setPosts(data)
          
        
      
        
        console.log(posts,'6')
        setStatus("success");
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          setStatus("error");
        }
 
      }
      setLoading(false);
    }
    loadPost();
    
 

    return () => {
      controller.abort()
    }
  },[]);

  

  return (
    <>
 
  <div className="cont">             
  {loading ? 
      <p>Loading...</p>
     : 
      posts.map((item,index) => 
        
          <Card link={`https://www.youtube.com/embed/${item.items.id}`} description={item.items.snippet.title} />
        
      )
    }
                          
                            
      </div>
                
          
              
            
        
    </>
  );
}


export default App;
