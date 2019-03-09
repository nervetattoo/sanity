import * as React from 'react'

import * as styles from './Search.module.css'

function Search() {
  return (
    <div className={styles.root}>
      <input type="text" placeholder="Search" />
    </div>
  )
}

export default Search
