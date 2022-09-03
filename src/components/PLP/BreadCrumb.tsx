import React from "react";
import Row from "../ui/Row";
import "./Breadcrumb.scss";
import {useGetCategoryQuery} from "../../services/Categories";
import {classNames} from "../../utils/Utils";

interface Props {
    categoryId: string;
}

export default function BreadCrumb(props: Props) {
    const { categoryId } = props;
    const { data: categories, isLoading } = useGetCategoryQuery({ id: categoryId });

    if(isLoading || !categories?.length) {
        return <></>;
    }

    return (
        <Row className={"breadcrumb"}>
            {categories.map(({ name }, index) => {
                const isLast = index === categories.length - 1;
                return (
                    <span key={index} className={classNames(isLast && "last")}>
                        {name}
                        {!isLast && <span className={"separator"}>{">"}</span>}
                    </span>
                );
            })}
        </Row>
    );
}
