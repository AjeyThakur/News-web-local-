import React, { Component } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
export default class News extends Component {

    static defaultProps = {
        country: 'in',
        category: 'general',
        pagesize: 9

    }
    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
        pagesize: PropTypes.number

    }

    constructor() {
        super();

        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }

    }
    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=19b0d952104e4e028e4ba9bcf77e9caa&page=${this.state.page}&pagesize=${this.props.pagesize}`
        let data = await fetch(url);
        let parsedata = await data.json()
        this.setState({ articles: parsedata.articles, totalResults: parsedata.totalResults })



    }
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=19b0d952104e4e028e4ba9bcf77e9caa&page=${this.state.page}&pagesize=${this.props.pagesize}`
        let data = await fetch(url);
        let parsedata = await data.json()
        this.setState({
            articles: this.state.articles.concat(parsedata.articles),
            totalResults: parsedata.totalResults

        })



    }
    async componentDidMount() {
        this.updateNews();
    }

    // handlenextclk = async () => {

    //     if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {

    //     } else {

    //         // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=19b0d952104e4e028e4ba9bcf77e9caa&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`
    //         // let data = await fetch(url);
    //         // let parsedata = await data.json()
    //         // this.setState({
    //         //     page: this.state.page + 1,
    //         //     articles: parsedata.articles
    //         // })
    //         this.updateNews();
    //         this.setState({
    //             page: this.state.page - 1
    //         })

    //     }

    // }

    // handleprvclk = async () => {
    //     // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=19b0d952104e4e028e4ba9bcf77e9caa&page=${this.state.page - 1}&pagesize=${this.props.pagesize}`
    //     // let data = await fetch(url);
    //     // let parsedata = await data.json()
    //     // this.setState({
    //     //     page: this.state.page - 1,
    //     //     articles: parsedata.articles
    //     // })
    //     this.updateNews();
    //     this.setState({
    //         page: this.state.page - 1
    //     })

    // }

    render() {
        return (
            <>

                <h1 className='container my-3 text-center'>Newsapp Top Headlines</h1>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<h4 className='text-center' >Loading...</h4>}
                >
                    <div className="container">
                        <div className='row'>
                            {this.state.articles.map((element) => {

                                return <div className='col-4' key={element.url} >
                                    <NewsItem tittle={element.title} description={element.description} imgurl={element.urlToImage} newsurl={element.url} source={element.source.name} />
                                </div>

                            })}
                        </div>
                    </div>
                </InfiniteScroll>
                {/* <div className='container d-flex justify-content-between '>
                    <button type="button" disabled={this.state.page <= 1} onClick={this.handleprvclk} className="btn btn-dark"> 	&larr; </button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} onClick={this.handlenextclk} className="btn btn-dark"> 	&rarr; </button>
                </div> */}


            </>
        )
    }
}
