
function Movie(props){
    const {
        Title,
        ImdbID,
        Year,
        Poster,
        Type
    } = props
    return  <div id={ImdbID} className="card movie">
    <div className="card-image">
      <img src={Poster}/>
      <span className="card-title">{Title}</span>
     
    </div>
    <div className="card-content">
      <p>Год: {Year} <span >{Type}</span></p>
    </div>
  </div>
}
export {Movie}