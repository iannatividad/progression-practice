import { Given, When, Then } from "@cucumber/cucumber";

import {
    askIfItsFriday,
    checkIfItsFriday,
    setGivenDay,
} from "../support/actions";

Given("today is {string}", setGivenDay);

When("I ask whether it's Friday yet", askIfItsFriday);

Then("I should be told {string}", checkIfItsFriday);
