import React from "react";
import {classNames} from "../../utils/Utils";
import "./Column.scss";

interface Props {
    className?: string;
    children: string | JSX.Element[] | JSX.Element;
}

export default function Column(props: Props) {
    const { children, className } = props;
    return (
        <div className={classNames("column", className)}>
            {children}
        </div>
    );
}
