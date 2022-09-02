export function classNames(...classes: (string | null | undefined)[]) {
    return classes.filter(c => !!c).join(" ");
}
