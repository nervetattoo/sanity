import { Observable } from 'rxjs';
import { ContainerProps, Props } from './types';
export declare function toPropsStream(props$: Observable<ContainerProps>): Observable<Props>;
