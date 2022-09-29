import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  capitalizeFirstLetter = (str) => {
    const str2 = str.charAt(0).toUpperCase() + str.slice(1);
    return str2;
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults:0,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )}-News App`;
  }
  
  UpdateNews = async () => {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.countryCode}&category=${this.props.category}&apikey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    
    this.props.setProgress(30);
    let data = await fetch(url);
    let parsedData = await data.json();
    
    this.props.setProgress(70);
    // console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
    this.props.setProgress(100);
  };

  async componentDidMount() {
    this.UpdateNews();
  }

  fetchMoreData = async () => {
   this.setState({page:this.state.page+1});
   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.countryCode}&category=${this.props.category}&apikey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };

  render() {
    return (
      <>
          <h3 className="my-2 text-center" >
            News App -/ Top {this.capitalizeFirstLetter(this.props.category)}{" "}
            Headlines{" "}
          </h3>
          {  this.state.loading && <Spinner/>}

          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.at.length !== this.state.totalResults}
            loader={<Spinner/>}
          >

            <div className="container">   
            <div className="row">
              {this.state.articles.map((ele) => {
                return (
                  <div className="col-md-4" key={ele.url}>
                    <NewsItem
                      title={ele.title ? ele.title.slice(0, 60) : ""}
                      description={
                        ele.description ? ele.description.slice(0, 88) : ""
                      }
                      imageUrl={ele.urlToImage}
                      newUrl={ele.url}
                      author={ele.author}
                      date={ele.publishedAt}
                      source={ele.source.name}
                    />
                  </div>
                );
              })}
            </div>
        </div>
          </InfiniteScroll>
        </>
    );
  }
}

export default News;
