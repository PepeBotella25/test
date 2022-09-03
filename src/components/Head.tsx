import React from "react";
import {useLocation} from "react-router-dom";
import {Helmet} from "react-helmet-async";

interface Props {
    children: ComponentChildren;
}

export default function Head(props: Props) {
    const { children } = props;
    const { pathname } = useLocation();

    return (
        <Helmet>
            {children}
            <link rel="canonical" href={pathname} />
        </Helmet>
    );
}
