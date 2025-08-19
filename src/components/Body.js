import resObj from "../utils/Mockdata";      // ✅ correct
import RestrauntCard from "./RestrauntCard";

const Body = () => {
  return(
    <div className="body">
      <div className="search-bar">
        Search 
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

        {resObj.map((restraunt) =>{
          return <RestrauntCard resData={restraunt} key={restraunt.info.id}/>
        })}
        
      </div>
    </div>
  )
}

export default Body;