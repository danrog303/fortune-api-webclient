import FortunePool from "./models/FortunePool";
import {FETCH_POOLS_ENDPOINT} from "./api-endpoints";

async function fetchFortunePools(): Promise<FortunePool[]> {
    const response = await window.fetch(FETCH_POOLS_ENDPOINT);
    return await response.json();
}

export default fetchFortunePools;
