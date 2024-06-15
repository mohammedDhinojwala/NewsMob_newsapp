import React, {useState, useEffect} from "react";
import Newsitem from "./Newsitem";
import Loader from "./loader";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=>{


  const [articles, setArticles] = useState([]);
  const [loding, setLoding] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(()=>{
    updateNews(props);
      },[])
   

    document.title =`${props.category}- NewsMOb`;
    
  // 413377f44af245538395050a7881aca8
  const updateNews =  async (props) => {
    props.setProgress(0);
     let url = `https://newsapi.org/v2/top-headlines?country=${props.country
 }&category=${props.category}&apiKey=${props.apiKey}
&page=${page + 1}&pageSize=${props.pageSize}`;

props.setProgress(30);
    let data = await fetch(url);
    let parseData = await data.json();
    props.setProgress(70);

      setArticles(parseData.articles);
      setLoding(false)
      setTotalResults(parseData.totalResults)
      
    
    props.setProgress(100);
  }

      
  
  

 

  

   const fetchMoreData = async () => {

    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}
&page=${setPage(page+1)}&pageSize=${props.pageSize}`;
setPage( page + 1)
    let data = await fetch(url);
    let parseData = await data.json();
    // setPage(page= page - 1)
    setArticles(articles.concat(parseData.articles))
    totalResults(parseData.totalResults)
   
  }
 

  


    return (
      < >
      <div className="main bg-black">
        
          <h2 className="text-center text-white "style={{padding: '90px'}}>NewsMOb - TOP HEadlines</h2>
          <div className="loader text-center ">
            {/* {loading && <Loader />} */}
          </div>
          
 <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Loader />}
        >

          <div className="container bg-black">

         
          <div className="row">
        
              { articles.map((elem) => {
                return (
                  <div className="col-md-4 my-2" key={elem.url}>
                    <Newsitem
                      title={elem.title ? elem.title.slice(0, 40) : ""}
                      description={
                        elem.description ? elem.description.slice(0, 80) : ""
                      }
                      imgUrl={elem.urlToImage}
                      newsurl={elem.url}
                      author={elem.author}
                      date={elem.publishedAt}
                      source={elem.source.name}/>
                   </div>)
                  })}
    </div>
    </div>
 </InfiniteScroll>
 </div>
 


          
      
       
      </>
    );
  

    News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "sports",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
}
export default News;
