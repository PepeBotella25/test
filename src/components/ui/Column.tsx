import React from "react";
import {classNames} from "../../utils/Utils";
import "./Column.scss";

interface Props {
    className?: string;
    children: ComponentChildren;
}

export default function Column(props: Props) {
    const { children, className } = props;
    return (
        <div className={classNames("column", className)}>
            {children}
        </div>
    );
}
