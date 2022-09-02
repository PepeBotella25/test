import React, {Fragment} from "react";
import Row from "../ui/Row";
import "./Breadcrumb.scss";
import {useGetCategoryQuery} from "../../services/Categories";

interface Props {
    categoryId: string;
}

export default function BreadCrumb(props: Props) {
    const { categoryId } = props;
    const { data: categories, isLoading } = useGetCategoryQuery({ id: categoryId });

    if(isLoading || !categories) {
        return <Fragment />;
    }

    return (
        <Row className={"breadcrumb"}>
            {categories.map(({ name }) => name).join(" > ")}
        </Row>
    );
}
