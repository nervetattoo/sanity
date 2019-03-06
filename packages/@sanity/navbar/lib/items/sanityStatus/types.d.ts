export interface VersionCheckerResult {
    isSupported: boolean;
    isUpToDate: boolean;
}
export interface VersionCheckerResponse {
    hash: string;
    result: VersionCheckerResult;
}
export declare type Severity = 'low' | 'medium' | 'high';
export interface PackageStatus {
    name: string;
    version: string;
    latest: string;
    severity?: Severity;
}
export interface VersionsStatus {
    isSupported?: boolean;
    isUpToDate?: boolean;
    outdated?: PackageStatus[];
    error?: Error;
}
export interface Versions {
    [key: string]: string;
}
export interface Props {
    dialogOpen: boolean;
    onDialogClose: () => void;
    onDialogOpen: () => void;
    severity: Severity | null;
    versionsStatus: VersionsStatus | null;
    versions: Versions;
}
