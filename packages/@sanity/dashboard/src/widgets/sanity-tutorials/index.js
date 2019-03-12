import React from 'react'
import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import {get} from 'lodash'
import {distanceInWords} from 'date-fns'
import Tutorial from './Tutorial'

import styles from './index.css'

const client = sanityClient({
  projectId: '3do82whm',
  dataset: 'production',
  useCdn: true
})

const builder = imageUrlBuilder(client)

const query = `
  *[_id == 'dashboardFeed-v1'] {
    items[]-> {
      _id,
      title,
      poster,
      youtubeURL,
      "presenter": authors[0]-> {name, mugshot, bio},
      guideOrTutorial-> {
        title,
        slug,
        "presenter": authors[0]-> {name, mugshot, bio},
        _createdAt
      }
    }
  }[0]
`

function createUrl(slug) {
  return `https://www.sanity.io/guide/${slug.current}`
}

class SanityTutorials extends React.Component {
  state = {
    feedItems: []
  }

  componentDidMount() {
    client.fetch(query).then(response => {
      this.setState({
        feedItems: response.items
      })
    })
  }

  render() {
    const {feedItems} = this.state
    return (
      <>
        <header className={styles.header}>
          <h1 className={styles.title}>Guides & tutorials</h1>
        </header>
        <ul className={styles.tutorials}>
          {feedItems.map(feedItem => {
            if (!feedItem.title) {
              return null
            }
            const presenter = feedItem.presenter || get(feedItem, 'guideOrTutorial.presenter') || {}
            const date = get(feedItem, 'guideOrTutorial._createdAt')
            return (
              <Tutorial
                key={feedItem._id}
                title={feedItem.title}
                hasVideo={!!feedItem.youtubeURL}
                href={createUrl(get(feedItem, 'guideOrTutorial.slug'))}
                presenterName={presenter.name}
                presenterSubtitle={`${distanceInWords(new Date(date), new Date())} ago`}
                posterURL={builder
                  .image(feedItem.poster)
                  .height(240)
                  .url()}
              />
            )
          })}
        </ul>
      </>
    )
  }
}

export default {
  name: 'sanity-tutorials',
  component: SanityTutorials
}
