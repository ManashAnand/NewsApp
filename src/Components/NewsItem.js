import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newUrl, author, date, source } =
      this.props;

    return (
      <>
        <div className="my-3">
          <div className="card">
          <div >
            <span className=" badge rounded-pill bg-danger " style={{display:"flex",justifyContent:"flex-end",position:"absolute",right:0}} >
                    {source}
                  </span>
            <img src={imageUrl} className="card-img-top" alt="..." />
          </div>
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">
                {description}
              </p>
              <p className="card-text">
                <small className="text-muted">
                  By {author ? author : "Unknown"} on{" "}
                  {new Date(date).toUTCString()}
                </small>
              </p>

              <a href={newUrl} target="_blank" className="btn btn-sm btn-dark">
                Read more
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
