import React, { useState } from "react";
import { Button } from "react-bootstrap";

type holidayOption = "💘" | "🎄" | "🎃" | "🌭" | "🎆";
const AlPHABETICAL_ORDER: Record<holidayOption, holidayOption> = {
    "🎄": "🌭",
    "🌭": "🎃",
    "🎃": "🎆",
    "🎆": "💘",
    "💘": "🎄"
};
const MONTH_ORDER: Record<holidayOption, holidayOption> = {
    "💘": "🌭",
    "🌭": "🎃",
    "🎃": "🎄",
    "🎄": "🎆",
    "🎆": "💘"
};
export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<holidayOption>("🎃");
    function changeHolidayAlphabetically(): void {
        const newHoliday = AlPHABETICAL_ORDER[holiday];
        setHoliday(newHoliday);
    }
    function changeHolidayMonthly(): void {
        const newHoliday = MONTH_ORDER[holiday];
        setHoliday(newHoliday);
    }
    return (
        <div>
            Holiday: {holiday}
            <Button onClick={changeHolidayAlphabetically}>
                Advance by Alphabet
            </Button>
            <Button onClick={changeHolidayMonthly}>Advance by Year</Button>
        </div>
    );
}
