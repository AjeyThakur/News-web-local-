import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { tittle, description, imgurl, newsurl, source } = this.props;
        return (
            <>


                <div className="card my-3" >
                    <span className="  position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {source}
                    </span>
                    <img className="card-img-top" src={!imgurl ? "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg" : imgurl} alt=". . ." />
                    <div className="card-body">
                        <h5 className="card-title">{tittle} </h5>
                        <p className="card-text">{description}</p>
                        <a href={newsurl} rel="noopener noreferrer" target='_blank' className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>



            </>
        )
    }
}
