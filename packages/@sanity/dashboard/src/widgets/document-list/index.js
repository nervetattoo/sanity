import React from 'react'
import PropTypes from 'prop-types'
import {IntentLink} from 'part:@sanity/base/router'
import {SanityDefaultPreview} from 'part:@sanity/base/preview'
import QueryContainer from 'part:@sanity/base/query-container'
import Spinner from 'part:@sanity/components/loading/spinner'
import schema from 'part:@sanity/base/schema'
import Button from 'part:@sanity/components/buttons/default'
import styles from './index.css'

function stringifyArray(array) {
  return `["${array.join('","')}"]`
}

class DocumentList extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    types: PropTypes.array,
    query: PropTypes.string
  }

  static defaultProps = {
    title: 'Last created',
    types: null,
    query: null
  }

  assembleQuery = () => {
    const {query, types} = this.props

    if (query) {
      return query
    }
    if (types) {
      return `*[!(_id in path("_.**")) && !(_id in path("drafts.**")) && _type in ${stringifyArray(
        types
      )}] | order(_createdAt desc) [0...10]`
    }
    return `*[!(_id in path("_.**")) && !(_id in path("drafts.**")) && _type != 'sanity.imageAsset'] | order(_createdAt desc) [0...10]`
  }

  render() {
    const {title, types} = this.props
    const query = this.assembleQuery()

    return (
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <ul className={styles.list}>
          <QueryContainer query={query}>
            {({result, loading, error, onRetry}) => {
              if (loading) {
                return <Spinner center message="Loading items…" />
              }
              const items = result ? result.documents : []
              return items.map(item => {
                const type = schema.get(item._type)

                return (
                  <IntentLink key={item._id} intent="edit" params={{type: item._type, id: item._id}}>
                    <SanityDefaultPreview layout="default" type={type} value={item} key={item._id} />
                  </IntentLink>
                )
              })
            }}
          </QueryContainer>
        </ul>
        <div className={styles.buttonContainer}>
          <Button bleed color="primary" kind="simple">
            {types && types.length === 1 ? `Create new ${types[0]}` : 'Create new document'}
          </Button>
        </div>
      </div>
    )
  }
}

export default {
  name: 'document-list',
  component: DocumentList
}
