import React from "react";
import "./Grid.scss";
import {classNames} from "../../utils/Utils";

interface Props {
    className?: string;
    children: ComponentChildren;
}

export default function Grid(props: Props) {
    const { className, children } = props;

    return (
        <div className={classNames("grid", className)}>
            {children}
        </div>
    );
}
