import React from "react";
import "./Container.scss";
import {classNames} from "../../utils/Utils";

interface Props {
    className?: string;
    children: JSX.Element[] | JSX.Element;
}

export default function Container(props: Props) {
    const { children, className } = props;
    return (
        <div className={classNames("container", className)}>
            {children}
        </div>
    );
}
