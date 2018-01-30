
export default (props) => {
return (
    <div  className="card border-primary col-lg-3 offset-lg-1">
      <style jsx>{`
        .card{
          margin: 10px;
          padding:0px!important;
        }
      `}</style>
      <h3 className="card-header">{props.name}</h3>
      <div className="card-body">
        <h5 className="card-title">{props.full_name}</h5>
      </div>
      <div className="card-body">
        <p className="card-text">{props.description}</p>
      </div>
    </div>
    )
}