export function classNames(...classes: (string | false | null | undefined)[]) {
    return classes.filter(c => !!c).join(" ");
}

export function getCurrencyFormatter(currency: string) {
    const formatter = new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency,
    });

    return (amount: number) => formatter.format(amount);
}
