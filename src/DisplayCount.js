import { useRecoilValue } from "recoil";
import { counterState } from "./counterState";
import { numberOfClicksSelector } from "./numberOfClicksSelector";

export const DisplayCount = () => {
    const clicksData = useRecoilValue(numberOfClicksSelector);

    return (
        <h2>Number of clicks: {clicksData}</h2>
    )
}