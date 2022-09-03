declare module "*.html" {
    const content: string;
    export default content;
}

declare module "*.png" {
    const content: string;
    export default content;
}

type ComponentChildren = string | JSX.Element | (string | JSX.Element)[];
