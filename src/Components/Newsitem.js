import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let {title, description, imageURL, URL} = this.props
        return (
            <div>
                <div className="card" style={{width: "18rem", backgroundColor: "#000"}}>
                    <img src={!imageURL?"https://images.hindustantimes.com/img/2024/07/26/550x309/kam_1721995938393_1721995943481.jpeg":imageURL} className="card-img-top" alt="..." />
                        <div className="card-body" style={{color: "#fff", backgroundColor: "rgb(24, 24, 24)"}}>
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href={URL} className="btn btn-outline-light btn-sm">Read more...</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default Newsitem
