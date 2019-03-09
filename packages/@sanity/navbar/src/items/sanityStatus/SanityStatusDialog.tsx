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
  const {onClose, outdated, severity} = props
  const title = severity !== 'low' ? 'The Studio is outdated' : `${outdated.length} updates available`
  return (
    <Dialog isOpen onClose={onClose} onClickOutside={onClose} title={title}>
      <div className={styles.content}>
        <table className={styles.versionsTable}>
          <thead>
            <tr>
              <th>Module name</th>
              <th>Current</th>
              <th>Latest</th>
              <th>Severity</th>
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
      <pre className={styles.syntax}>
        <span className={styles.commentSyntax}>{`# First update Sanity CLI`}</span>
        {`\nnpm install @sanity/cli -g\n\n`}
        <span className={styles.commentSyntax}>{`# Then upgrade Sanity Studio`}</span>
        {`\nsanity upgrade`}
      </pre>
    </Dialog>
  )
}

export default SanityStatusDialog
