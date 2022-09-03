import React from "react";
import {useLocation} from "react-router-dom";
import {Helmet} from "react-helmet";

interface Props {
    children: string | JSX.Element[] | JSX.Element;
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
