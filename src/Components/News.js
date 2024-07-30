import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Loader from './Loader'
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps = {
    pageSize: 0,
    country: "in",
    category: "general"
  }

  static propTypes = {
    category: PropTypes.string,
    country: PropTypes.string,
    pageSize: PropTypes.number
  }

  constructor() {
    super()
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    }
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=adf49774b7a04daf963124d9abd015a6&page=1&pageSize=8`
    this.setState({loading: true})
    let response = await fetch(url)
    let data = await response.json()
    this.setState({
      articles: data.articles,
      totalResults: data.totalResults,
      loading: false
    })
  }

  handlePrevious = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=adf49774b7a04daf963124d9abd015a6&page=${this.state.page - 1}&pageSize=8`
    this.setState({loading: true})
    let response = await fetch(url)
    let data = await response.json()
    this.setState({
      articles: data.articles,
      page: this.state.page - 1,
      loading: false
    })
  }

  handleNext = async () => {
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / 12))) {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=adf49774b7a04daf963124d9abd015a6&page=${this.state.page + 1}&pageSize=8`
    this.setState({loading: true})
      let response = await fetch(url)
      let data = await response.json()
      this.setState({
        articles: data.articles,
        page: this.state.page + 1,
        loading: false
      })
    }
  }

  render() {
    return (
      <>
        <div className="container my-3">
          <div className="row">
            <h2 className="text-center my-3 text-light">News Monkey - Top Headlines</h2><hr style={{backgroundColor: "#fff"}} />
            {this.state.loading && <Loader />}
            {this.state.articles.map((element) => {
              return <div className="col-md-4 my-3" key={element.url}>
                <Newsitem title={(element.title ? element.title: "").slice(0, 45)+"..."} description={(element.description ? element.description : "no description...").slice(0, 90)} imageURL={element.urlToImage} URL={element.url} />
              </div>
            })}
          </div>
          <hr style={{color: "#fff"}} />
          <div className="container-fluid d-flex justify-content-between py-4">
            <button onClick={this.handlePrevious} disabled={this.state.page <= 1} className="btn btn-light" type="button">&larr; Previous</button>
            <p className="text-light">Pages {this.state.page} of {Math.ceil(this.state.totalResults / 12)}</p>
            <button disabled={this.state.page >= Math.ceil(this.state.totalResults / 12)} onClick={this.handleNext} className="btn btn-light" type="button">Next &rarr;</button>
          </div>
        </div>
      </>
    )
  }
}

export default News
