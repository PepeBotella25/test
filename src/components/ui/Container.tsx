import React from "react";
import "./Container.scss";
import {classNames} from "../../utils/Utils";
import Grid from "./Grid";

interface Props {
    className?: string;
    children: ComponentChildren;
}

export default function Container(props: Props) {
    const { children, className } = props;
    return (
        <Grid className={"containerGrid"}>
            <Grid className={classNames(className, "content")}>
                {children}
            </Grid>
        </Grid>
    );
}
