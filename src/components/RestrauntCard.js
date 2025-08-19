
const RestrauntCard = (props) => {
  const {resData} = props;

  const {cloudinaryImageId, name, sla, cuisines, avgRating} = resData?.info;
  
  return (
    <div className="card-body" style= {{
  backgroundColor : "#f0f0f0"
}}>
    <div className="res-img">
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId}></img>
    </div>
    <div className="res-info">
      <h3>{name}</h3>
      <h4>{sla.deliveryTime}</h4>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating}</h5>
    </div>
  </div>
  )
}

export default RestrauntCard;   