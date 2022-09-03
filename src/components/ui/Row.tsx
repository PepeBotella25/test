import React from "react";
import {classNames} from "../../utils/Utils";
import "./Row.scss";

interface Props {
    className?: string;
    children: ComponentChildren;
}

export default function Row(props: Props) {
    const { children, className } = props;
    return (
        <div className={classNames("row", className)}>
            {children}
        </div>
    );
}
