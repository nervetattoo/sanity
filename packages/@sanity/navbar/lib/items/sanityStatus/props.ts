import VersionChecker from 'part:@sanity/base/version-checker'
import userStore from 'part:@sanity/base/user'
import {createEventHandler} from 'react-props-stream'
import {combineLatest, merge, Observable, of} from 'rxjs'
import {catchError, distinctUntilChanged, filter, map, startWith, switchMap} from 'rxjs/operators'
import * as versions from 'sanity:versions'

import {PackageStatus, Props, VersionCheckerResponse, VersionsStatus} from './types'

const [dialogOpenNext$, nextDialogOpen] = createEventHandler()

const dialogOpenInitial$ = of(false)
const dialogOpen$ = merge(dialogOpenInitial$, dialogOpenNext$ as any) as Observable<boolean>

const levels = ['low', 'medium', 'high']
const getHighestLevel = (outdated: PackageStatus[]) =>
  outdated.reduce(
    (acc, packageStatus) =>
      Math.max(acc, packageStatus.severity ? levels.indexOf(packageStatus.severity) : 0),
    0
  )

const user$ = userStore.currentUser.pipe(map((snapshot: any) => snapshot.user))

const adminUser$ = user$.pipe(filter((user: any) => user.role === 'administrator'))

const checkedVersions$: Observable<VersionCheckerResponse> = adminUser$.pipe(
  switchMap(() => VersionChecker.checkVersions())
)

const versionsStatus$: Observable<VersionsStatus | null> = checkedVersions$.pipe(
  map(({result}) => result),
  catchError(error => of({error})),
  startWith(null)
)

const severity$ = versionsStatus$.pipe(
  map(versionsStatus => {
    // Set 'high' severity when versions are no longer supported
    if (versionsStatus && !versionsStatus.isSupported) {
      return 'high'
    }
    // Set highest level found in `outdated` package status array
    return versionsStatus && versionsStatus.outdated
      ? levels[getHighestLevel(versionsStatus.outdated)]
      : null
  }),
  distinctUntilChanged()
)

const MOCK = true

export const props$: Observable<Props> = MOCK
  ? of({
      onDialogClose: () => nextDialogOpen(false),
      onDialogOpen: () => nextDialogOpen(true),
      severity: 'low',
      dialogOpen: true,
      versionsStatus: {
        isSupported: true,
        isUpToDate: false,
        outdated: [
          {name: '@sanity/base', version: '0.140.8', latest: '0.140.9'},
          {name: '@sanity/code-input', version: '0.140.3', latest: '0.140.9'},
          {name: '@sanity/components', version: '0.140.8', latest: '0.140.9'},
          {name: '@sanity/core', version: '0.140.8', latest: '0.140.9'},
          {name: '@sanity/default-layout', version: '0.140.8', latest: '0.140.9'},
          {name: '@sanity/desk-tool', version: '0.140.8', latest: '0.140.9'},
          {name: '@sanity/vision', version: '0.140.8', latest: '0.140.9'},
          {name: '@sanity/cli', version: '0.140.8', latest: '0.140.9'}
        ]
      },
      versions: {
        '@sanity/base': '0.140.8',
        '@sanity/block-content-to-react': '2.0.6',
        '@sanity/client': '0.140.8',
        '@sanity/code-input': '0.140.3',
        '@sanity/color-input': '0.140.3',
        '@sanity/components': '0.140.8',
        '@sanity/core': '0.140.8',
        '@sanity/default-layout': '0.140.8',
        '@sanity/default-login': '0.140.3',
        '@sanity/desk-tool': '0.140.8',
        '@sanity/mutator': '0.140.0',
        '@sanity/production-preview': '0.140.0',
        '@sanity/storybook': '0.140.3',
        '@sanity/vision': '0.140.8',
        '@sanity/cli': '0.140.8'
      }
    })
  : combineLatest(dialogOpen$, versionsStatus$, severity$).pipe(
      map(([dialogOpen, versionsStatus, severity]: [boolean, any, string | any]) => ({
        dialogOpen,
        onDialogClose: () => nextDialogOpen(false),
        onDialogOpen: () => nextDialogOpen(true),
        severity,
        versions,
        versionsStatus
      }))
    )
