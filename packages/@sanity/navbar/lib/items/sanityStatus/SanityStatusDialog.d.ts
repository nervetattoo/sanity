/// <reference types="react" />
import { PackageStatus, Severity, Versions } from './types';
interface Props {
    onClose: () => void;
    outdated: PackageStatus[];
    severity: Severity | null;
    versions: Versions;
}
declare function SanityStatusDialog(props: Props): JSX.Element;
export default SanityStatusDialog;
