import userConfig from 'part:@sanity/navbar/config'
import defaultConfig from '../../parts/config'
import {Config} from '../../types'

let config: Config

if (userConfig === defaultConfig) {
  config = defaultConfig
} else {
  config = {
    ...defaultConfig,
    ...userConfig
  }
}

export default config
