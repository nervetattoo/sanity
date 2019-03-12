import React from 'react'
import PropTypes from 'prop-types'
import styles from './Tutorial.css'

class Tutorial extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    posterUrl: PropTypes.string,
    avatarUrl: PropTypes.string,
    authorName: PropTypes.string,
    durationText: PropTypes.string
  }

  render() {
    const {title, posterUrl, avatarUrl, authorName} = this.props

    return (
      <div className={styles.root}>
        <img className={styles.poster} src={posterUrl} />
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.author}>
          <img className={styles.avatar} src={avatarUrl} />
          <div>
            <div className={styles.authorName}>{authorName}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Tutorial
