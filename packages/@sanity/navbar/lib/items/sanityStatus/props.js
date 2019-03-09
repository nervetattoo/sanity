"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const version_checker_1 = require("part:@sanity/base/version-checker");
const user_1 = require("part:@sanity/base/user");
const react_props_stream_1 = require("react-props-stream");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const versions = require("sanity:versions");
const [dialogOpenNext$, nextDialogOpen] = react_props_stream_1.createEventHandler();
const dialogOpenInitial$ = rxjs_1.of(false);
const dialogOpen$ = rxjs_1.merge(dialogOpenInitial$, dialogOpenNext$);
const levels = ['low', 'medium', 'high'];
const getHighestLevel = (outdated) => outdated.reduce((acc, packageStatus) => Math.max(acc, packageStatus.severity ? levels.indexOf(packageStatus.severity) : 0), 0);
const user$ = user_1.default.currentUser.pipe(operators_1.map((snapshot) => snapshot.user));
const adminUser$ = user$.pipe(operators_1.filter((user) => user.role === 'administrator'));
const checkedVersions$ = adminUser$.pipe(operators_1.switchMap(() => version_checker_1.default.checkVersions()));
const versionsStatus$ = checkedVersions$.pipe(operators_1.map(({ result }) => result), operators_1.catchError(error => rxjs_1.of({ error })), operators_1.startWith(null));
const severity$ = versionsStatus$.pipe(operators_1.map(versionsStatus => {
    // Set 'high' severity when versions are no longer supported
    if (versionsStatus && !versionsStatus.isSupported) {
        return 'high';
    }
    // Set highest level found in `outdated` package status array
    return versionsStatus && versionsStatus.outdated
        ? levels[getHighestLevel(versionsStatus.outdated)]
        : null;
}), operators_1.distinctUntilChanged());
const MOCK = false;
const MOCK_PROPS = {
    severity: 'low',
    versionsStatus: {
        isSupported: true,
        isUpToDate: false,
        outdated: [
            { name: '@sanity/base', version: '0.140.8', latest: '0.140.9' },
            { name: '@sanity/code-input', version: '0.140.3', latest: '0.140.9' },
            { name: '@sanity/components', version: '0.140.8', latest: '0.140.9' },
            { name: '@sanity/core', version: '0.140.8', latest: '0.140.9' },
            { name: '@sanity/default-layout', version: '0.140.8', latest: '0.140.9' },
            { name: '@sanity/desk-tool', version: '0.140.8', latest: '0.140.9' },
            { name: '@sanity/vision', version: '0.140.8', latest: '0.140.9' },
            { name: '@sanity/cli', version: '0.140.8', latest: '0.140.9' }
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
};
exports.props$ = MOCK
    ? dialogOpen$.pipe(operators_1.map(dialogOpen => (Object.assign({}, MOCK_PROPS, { dialogOpen, onDialogClose: () => nextDialogOpen(false), onDialogOpen: () => nextDialogOpen(true) }))))
    : rxjs_1.combineLatest(dialogOpen$, versionsStatus$, severity$).pipe(operators_1.map(([dialogOpen, versionsStatus, severity]) => ({
        dialogOpen,
        onDialogClose: () => nextDialogOpen(false),
        onDialogOpen: () => nextDialogOpen(true),
        severity,
        versions,
        versionsStatus
    })));

//# sourceMappingURL=props.js.map
