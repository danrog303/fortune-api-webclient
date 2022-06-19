import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import {useEffect} from "react";

type ErrorIndicatorProps = {
    message: string | null,
    onTryAgain?: () => void | null
}

function ErrorIndicator(props: ErrorIndicatorProps) {
    useEffect(() => {console.log(props.onTryAgain)});

    return <Alert variant="danger">
        <h2>Error!</h2>
        {props.message ?? "Some error occured!"}
        <div>
            {props.onTryAgain && <Button variant="primary" onClick={props.onTryAgain} children="Try again" />}
        </div>
    </Alert>;
}

export default ErrorIndicator;
