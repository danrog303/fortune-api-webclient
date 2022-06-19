import React from 'react';
import BasePage from "../components/wrappers/BasePage";
import PoolChoiceFetch from "../components/fetchers/PoolChoiceFetch";

function MainPage(): React.ReactElement {
    return <BasePage>
        <p>Choose fortune-pool you want to check:</p>

        <PoolChoiceFetch />
    </BasePage>;
}

export default MainPage;
