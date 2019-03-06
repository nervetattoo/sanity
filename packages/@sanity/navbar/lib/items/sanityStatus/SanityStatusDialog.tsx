import * as React from 'react'
import Dialog from 'part:@sanity/components/dialogs/default'

import {PackageStatus, Severity, Versions} from './types'

import * as styles from './SanityStatusDialog.module.css'

interface Props {
  onClose: () => void
  outdated: PackageStatus[]
  severity: Severity | null
  versions: Versions
}

function ucfirst(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function SanityStatusDialog(props: Props) {
  const {onClose, outdated} = props
  return (
    <Dialog isOpen onClose={onClose} onClickOutside={onClose}>
      <div className={styles.content}>
        <table className={styles.versionsTable}>
          <thead>
            <tr>
              <th>Module name</th>
              <th>Installed</th>
              <th>Wanted</th>
              <th>Importance</th>
            </tr>
          </thead>
          <tbody>
            {outdated.map(pkg => (
              <tr key={pkg.name}>
                <td>{pkg.name}</td>
                <td>{pkg.version}</td>
                <td>{pkg.latest}</td>
                <td>{ucfirst(pkg.severity || 'low')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Dialog>
  )
}

export default SanityStatusDialog
