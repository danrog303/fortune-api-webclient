import React, {FormEvent, useEffect, useState} from "react";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import FortunePool from "../../api/models/FortunePool";
import {Navigate} from "react-router-dom";

type PoolChoiceFormProps = {
    availablePools: FortunePool[]
};

function PoolChoiceForm(props: PoolChoiceFormProps): React.ReactElement {
    const [chosenPoolName, setChosenPoolName] = useState<string>("");
    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

    useEffect(() => {
        if (props.availablePools.length > 0 && chosenPoolName === "") {
            setChosenPoolName(props.availablePools[0].name)
        }
    }, [chosenPoolName, props.availablePools]);

    function formSubmitHandle(event: FormEvent) {
        event.preventDefault();
        setFormSubmitted(true);
    }

    return <form onSubmit={formSubmitHandle}>
        {formSubmitted && <Navigate to={`/pool/${encodeURIComponent(chosenPoolName)}`} />}

        <Form.Text>Detected public pools:</Form.Text>
        <Form.Select onChange={event => setChosenPoolName(event.target.value)}>
            {
                props.availablePools.map(elem =>
                <option key={elem.name} value={elem.name}>{elem.name} ({elem.description})</option>)
            }
        </Form.Select>

        <Form.Text>Chosen pool:</Form.Text>
        <Form.Control value={chosenPoolName} onChange={event => setChosenPoolName(event.target.value)} />

        <Button type="submit" variant="success" style={{"marginTop": "15px"}}>Show entry</Button>
    </form>;
}

export default PoolChoiceForm;
