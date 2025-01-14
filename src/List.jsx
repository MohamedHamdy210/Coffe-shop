import { useEffect,useState } from "react";
import Card  from "./Card";
export default function List(){
    const [coffe,setCoffe]=useState([])
    const [content, setContent] = useState([]);
    
    useEffect(()=>{
        fetch(
          "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
        )
          .then((response) => response.json())
          .then((data) => {
            setCoffe(data)
          })
          
    },[])
    const allCards =coffe.map(c=><Card key={c.id} c={c}/>)
    const availableCards=coffe.map(c=>    c.available==true? <Card key={c.id} c={c}/>:null
    )
    const handleAll=() =>{
        setContent(allCards)
    }
    const handleAvailable = () => {
      setContent(availableCards);
    };
    return (
   <div className="list">
     <div className="info">
         <h1>Our Collection</h1>
         <p>
           Introducing our Coffee Collection, a selection of unique coffees <br /> from
           different roast types and origins, expertly roasted in small <br /> batches and
           shipped fresh weekly.
         </p>
     </div>
     <div className="buttons">
       <button onClick={handleAll} id={content.length===0?"all":null}  >All Products</button>
       <button onClick={handleAvailable}>Available Now</button>
     </div>
     <div className="coffes">
        {content.length===0?allCards:content}
     </div>
   </div>
 );   
}