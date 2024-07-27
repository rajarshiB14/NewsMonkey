import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
  articles = [
    {
      "source": {
        "id": "cbs-news",
        "name": "CBS News"
      },
      "author": "CBS News",
      "title": "Alabama quarterback Jalen Milroe previews college football season, talks new coach",
      "description": "The University of Alabama's Jalen Milroe, a widely considered Heisman Trophy contender, discusses the upcoming college football season and preparing under a new coach after the legendary Nick Saban retired.",
      "url": "https://www.cbsnews.com/video/alabama-quarterback-jalen-milroe-previews-college-football-season-talks-new-coach/",
      "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2024/07/25/51571ef4-c651-4ddf-bd1c-077df3e9aa92/thumbnail/1200x630/7c14f549f0a9457df20fe7c7ef8c8a6c/0725-cmo-jalinmilroe-mid.jpg?v=5501038cbc281520ff9fdc308faab7dc",
      "publishedAt": "2024-07-25T13:37:00+00:00",
      "content": "Watch CBS News\r\nCopyright ©2024 CBS Interactive Inc. All rights reserved.\r\nGet browser notifications for breaking news, live events, and exclusive reporting.\r\nNot NowTurn On"
    },
    {
      "source": {
        "id": "four-four-two",
        "name": "FourFourTwo"
      },
      "author": "Ryan Dabbs",
      "title": "'It's very important': Liverpool legend John Barnes underlines significant impact 867,000 people have on English football",
      "description": "Liverpool legend John Barnes joined volunteers for an evening to highlight the important work they do across the country",
      "url": "https://www.fourfourtwo.com/news/its-very-important-liverpool-legend-john-barnes-underlines-significant-impact-867000-people-have-on-english-football",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/wfHMuswYfJbmcaihdaiNjk-1200-80.jpg",
      "publishedAt": "2024-07-25T09:41:19Z",
      "content": "Liverpool legend John Barnes has underlined the importance of the FA's 867,000-strong network of volunteers by heading down to MSB Woolton on Merseyside, the largest amateur club in the UK. \r\nWith ov… [+3302 chars]"
    },
    {
      "source": {
        "id": "four-four-two",
        "name": "FourFourTwo"
      },
      "author": "Joe Mewis",
      "title": "Why is the Olympic football not just being played in Paris?",
      "description": "The Paris 2024 Olympics football tournament is underway, but the action has kicked off in Saint-Etienne and the French capital",
      "url": "https://www.fourfourtwo.com/news/why-is-the-olympic-football-not-just-being-played-in-paris",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/pwwGu8wbTaWw6MFPxCs5vD-1200-80.jpg",
      "publishedAt": "2024-07-24T16:24:55Z",
      "content": "Hot on the heels of Euro 2024 and the Copa America, the summer's third major tournament is underway. \r\nWhile the Paris 2024 Olympics opening ceremony does not take place until Friday evening, the men… [+2339 chars]"
    },
    {
      "source": {
        "id": "bleacher-report",
        "name": "Bleacher Report"
      },
      "author": "David Kenyon",
      "title": "Unique Stats from the 2023 College Football Regular Season",
      "description": "Numbers are an integral part of college football. Whether you're previewing games, ranking teams or picking an award winner, statistics help shape the story.…",
      "url": "https://bleacherreport.com/articles/10100739-unique-stats-from-the-2023-college-football-regular-season",
      "urlToImage": "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1702319871/sdx1wjlqkcqz3anqfabp.jpg",
      "publishedAt": "2023-12-12T12:00:00Z",
      "content": "Zach Bolinger/Icon Sportswire via Getty Images\r\nSpeaking of Iowa...\r\nWhat makes the Hawkeyes' stellar defensive season even more impressive is how much the team desperately needed it.\r\nAmong the many… [+711 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
      "description": "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
      "urlToImage": "https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif",
      "publishedAt": "2020-04-27T07:20:43Z",
      "content": "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]"
    }
  ]
  constructor() {
    super()
    this.state = {
      articles: this.articles,
      loading: false
    }
  }
  render() {
    return (
      <div className="container my-3">
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <Newsitem title={element.title.slice(0, 45)} description={element.description.slice(0, 80)} imageURL={element.urlToImage} URL={element.url} />
            </div>
          })}
        </div>
      </div>
    )
  }
}

export default News
