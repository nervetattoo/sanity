import * as React from 'react'
import PackageIcon from 'part:@sanity/base/package-icon'
import SanityStatusDialog from './SanityStatusDialog'

import {Props} from './types'

import * as styles from './SanityStatus.module.css'

function formatUpdateLabel(len: number) {
  if (len === 1) return ' 1 update'
  return `${len} updates`
}

function SanityStatus(props: Props) {
  console.log(props)

  const {dialogOpen, onDialogClose, onDialogOpen, severity, versions, versionsStatus} = props

  if (!versionsStatus || versionsStatus.isUpToDate) {
    // Do not show if there's nothing to update
    return null
  }

  const {isUpToDate} = versionsStatus
  const outdated = versionsStatus.outdated || []

  return (
    <div className={styles[severity || 'root']}>
      {dialogOpen && (
        <SanityStatusDialog
          severity={severity}
          outdated={outdated}
          onClose={onDialogClose}
          versions={versions}
        />
      )}
      <button className={styles.button} onClick={onDialogOpen} type="button">
        <div className={styles.buttonInner} tabIndex={-1}>
          {isUpToDate ? (
            <span>Up to date</span>
          ) : (
            <span>
              <PackageIcon /> {formatUpdateLabel(outdated.length)}
            </span>
          )}
        </div>
      </button>
    </div>
  )
}

export default SanityStatus
