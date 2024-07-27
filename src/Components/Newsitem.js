import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let {title, description, imageURL, URL} = this.props
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src={imageURL} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href={URL} className="btn btn-primary">Red more...</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default Newsitem
