import React from 'react';
import BasePage from "../components/wrappers/BasePage";
import {Link, useParams} from "react-router-dom";

type EntryDisplayPageParams = {
    poolName: string
}

function EntryDisplayPage() {
    const {poolName} = useParams<EntryDisplayPageParams>();

    return <BasePage>
        <p>Todo: fetch <strong>{poolName!!}</strong></p>
        <Link to="/">Go back to the main page.</Link>
    </BasePage>;
}

export default EntryDisplayPage;
