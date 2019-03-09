import {project as projectConfig} from 'config:sanity'
import * as logo from 'part:@sanity/base/brand-logo?'
import * as React from 'react'

import * as styles from './Branding.module.css'

function Branding() {
  const projectName = (projectConfig && projectConfig.name) || <>Untitled Studio</>
  const Logo = logo ? logo.default : logo
  return (
    <a className={styles.root} href="/">
      {Logo && (
        <div className={styles.logoWrapper}>
          <Logo />
        </div>
      )}
      {!Logo && <div className={styles.projectNameWrapper}>{projectName}</div>}
    </a>
  )
}

export default Branding
