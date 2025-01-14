import filled from "./assets/Star_fill.svg"
import star from "./assets/Star.svg";
export default function Card({c}){
    return (
      <div className="card">
        <p className="pop">{c.popular?"Popular":null}</p>
        <img src={c.image} alt="coffe pic" />
        <div className="cardName">
          <p>{c.name}</p>
          <span>{c.price}</span>
        </div>
        <div className="rate ">
          {c.rating === null ? (
            <div className="star">
              <img src={star} />
              <p>No ratings</p>
            </div>
          ) : (
            <div className="star">
              <img src={filled} /> <p className="votes">({c.votes} votes)</p>
            </div>
          )}
          <p>{c.available? "": "Sold out"}</p>
        </div>
      </div>
    );

}