import Container from "react-bootstrap/Container"
import React, {ReactElement} from "react";

type BasePageProps = {
    children: React.ReactElement | string | React.ReactElement[] | string[]
};

function BasePage(props: BasePageProps): ReactElement {
    return <Container style={{marginTop: "25px"}}>
        <h1>fortune-api web client</h1>
        {props.children}
    </Container>;
}

export default BasePage;
