import resObj from "../utils/Mockdata";   
import { useState } from "react";
import RestrauntCard from "./RestrauntCard";

const Body = () => {
  const[listOfRestraunt, setlistOfRestraunt] = useState(resObj);
  return(
    <div className="body">
      <div className="filter-btn">
        <button id="button1" onClick={()=> {
          const filteredList = listOfRestraunt.filter((rest) => rest.info.avgRating > 4);
          setlistOfRestraunt(filteredList);
        }}> Top Rated Restraunt</button>
      </div>

      <div className="Restraunt-container">
        {/* <Restraunt_card resData = {resObj[0]} />
        <Restraunt_card resData = {resObj[1]} />
        <Restraunt_card resData = {resObj[2]} />
        <Restraunt_card resData = {resObj[3]} />
        <Restraunt_card resData = {resObj[4]} />
        <Restraunt_card resData = {resObj[5]} />
        <Restraunt_card resData = {resObj[6]} />
        <Restraunt_card resData = {resObj[7]} />
        <Restraunt_card resData = {resObj[8]} />
        <Restraunt_card resData = {resObj[9]} /> */}

        {listOfRestraunt.map((restraunt) =>{
          return <RestrauntCard resData={restraunt} key={restraunt.info.id}/>
        })}
        
      </div>
    </div>
  )
}

export default Body;