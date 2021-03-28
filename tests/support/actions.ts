import expect from "expect";

import { Day } from "../../src/lib/Day";

function setGivenDay(this: any, givenDay: string) {
    this.today = givenDay;
}

function askIfItsFriday(this: any) {
    this.newDay = new Day();
    this.actualAnswer = this.newDay.isItFriday(this.today);
}

function checkIfItsFriday(this: any, expectedAnswer: string) {
    expect(this.actualAnswer).toBe(expectedAnswer);
}

export { askIfItsFriday, checkIfItsFriday, setGivenDay };
