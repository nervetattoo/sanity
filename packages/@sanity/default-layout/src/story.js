/* eslint-disable no-console */
/* eslint-disable react/jsx-no-bind */

import React from 'react'
import {storiesOf} from 'part:@sanity/storybook'
import {withKnobs, text, boolean, number} from 'part:@sanity/storybook/addons/knobs'
import Branding from './components/Branding'
import NotFound from './components/NotFound'
import SearchField from './components/SearchField'
import SearchResults from './components/SearchResults'

import NavBarStyles from './components/styles/NavBar.css'
import DefaultLayoutStyles from './components/styles/DefaultLayout.css'

storiesOf('[tool] Default layout')
  .addDecorator(withKnobs)
  .add('Branding', () => {
    return (
      <div className={DefaultLayoutStyles.navBar}>
        <div className={NavBarStyles.root}>
          <div className={NavBarStyles.branding}>
            <Branding />
          </div>
        </div>
      </div>
    )
  })
  .add('Not Found', () => {
    return <NotFound />
  })
  .add('Search Field (mobile)', () => {
    const hasResults = boolean('hasResults', false, 'props')
    const items = hasResults ? ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'] : []
    const query = text('query', '', 'props')

    return (
      <div style={{background: '#444', height: '100vh'}}>
        <div style={{background: '#fff', margin: '0 auto', position: 'relative'}}>
          <SearchField
            isBleeding
            isFocused={boolean('isFocused', false, 'props')}
            isOpen={boolean('isOpen', false, 'props')}
            results={
              <SearchResults
                activeIndex={number('activeIndex', -1, 'props')}
                isLoading={boolean('isLoading', false, 'props')}
                items={items}
                query={query}
                renderItem={key => (
                  <div key={key} style={{padding: '0.75em 1em'}}>
                    {key}
                  </div>
                )}
              />
            }
            value={query}
            onChange={() => console.log('change')}
          />
        </div>
      </div>
    )
  })
  .add('Search Field (desktop)', () => {
    const hasResults = boolean('hasResults', false, 'props')
    const items = hasResults ? ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'] : []
    const query = text('query', '', 'props')

    return (
      <div>
        <div className={DefaultLayoutStyles.navBar}>
          <div className={NavBarStyles.root}>
            <div className={NavBarStyles.search}>
              <SearchField
                hotkeys={['F']}
                isFocused={boolean('isFocused', false, 'props')}
                isOpen={boolean('isOpen', false, 'props')}
                results={
                  <SearchResults
                    activeIndex={number('activeIndex', -1, 'props')}
                    isLoading={boolean('isLoading', false, 'props')}
                    items={items}
                    query={query}
                    renderItem={key => (
                      <div key={key} style={{padding: '0.5em 0.75em'}}>
                        {key}
                      </div>
                    )}
                  />
                }
                value={query}
                onChange={() => console.log('change')}
              />
            </div>
          </div>
        </div>
      </div>
    )
  })
