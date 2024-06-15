import React from "react";


const Newsitem= (props)=> {

    let { title, description, imgUrl, newsurl, author, date } = props;
    return (
      <div>
        <div className="card  " style={{height: "65vh",}}>
          <span
            className="position-absolute top-0  translate-middle badge rounded-pill bg-danger "
            style={{ left: "95%", zIndex: "1" }}
          >
            {props.source}
          </span>
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>

            <p className="card-text">{description}... </p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "unknown" : author} on{" "}
                {new Date(date).toGMTString()}{" "}
              </small>
            </p>
            <a href={newsurl} className="btn btn-primary btn-dark">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
 
}

export default Newsitem;
