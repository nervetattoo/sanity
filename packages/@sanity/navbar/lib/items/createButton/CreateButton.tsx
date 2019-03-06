import * as React from 'react'
import PlusIcon from 'part:@sanity/base/plus-icon'

import * as styles from './CreateButton.module.css'

function CreateButton() {
  return (
    <button className={styles.root}>
      <PlusIcon />
    </button>
  )
}

export default CreateButton
