import React from "react";
import {useEffect, useState} from "react";
import FortunePool from "../../api/models/FortunePool";
import fetchFortunePools from "../../api/fetch-fortune-pools";
import PoolChoiceForm from "../forms/PoolChoiceForm";
import LoadingIndicator from "../common/LoadingIndicator";
import ErrorIndicator from "../common/ErrorIndicator";


function PoolChoiceFetch() {
    const [loadedPools, setLoadedPools] = useState<FortunePool[]>([]);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        if (loadedPools.length > 0 || error != null) {
            return;
        }

        (async () => {
            try {
                const pools = await fetchFortunePools();
                setLoadedPools(pools);
            } catch(err) {
                setError(err as Error);
            }
        })();
    }, [loadedPools, error]);

    return <React.Fragment>
        {error && <ErrorIndicator message={error.message} onTryAgain={() => setError(null)} />}
        {(!error && loadedPools.length > 0 && <PoolChoiceForm availablePools={loadedPools} />)}
        {(!error && loadedPools.length === 0) && <LoadingIndicator />}
    </React.Fragment>;
}

export default PoolChoiceFetch;
