declare module '*.svg' {
    import {SVGProps} from 'react';

    export const ReactComponent: FunctionComponent<SVGProps<SVGSVGElement>>;

    const src: string;
    export default src;
}

declare module '*.jpeg';
declare module '*.webp';
