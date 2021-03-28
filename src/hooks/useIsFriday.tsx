import React, { useEffect, useState } from "react";

import { Day } from "../lib/Day";

export const useIsFriday = () => {
    const [isFridayToday, setIsFridayToday] = useState<string>("");

    useEffect(() => {
        checkIfFriday();
    }, []);

    function checkIfFriday() {
        const { isItFriday } = new Day();

        const today = new Date().getDay();

        const tmpToday: string = today === 5 ? "Friday" : "";

        setIsFridayToday(isItFriday(tmpToday));
    }

    return isFridayToday;
};
