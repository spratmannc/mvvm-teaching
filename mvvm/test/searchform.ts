import { SearchForm } from "../business/SearchForm";

import * as chai from "chai";
let expect: Chai.ExpectStatic = chai.expect;
let assert: Chai.AssertStatic = chai.assert;

console.log("-------------------------------");
console.log(`Test Run: ${new Date().toTimeString()}`);

describe("Search Form", () => {

    let sut: SearchForm;

    before(() => {
        sut = new SearchForm();
        sut.searchCriteria = "Alaina and Marlie";
    });

    it("disables AND search boxes when the term 'and' appears in search criteria", () => {

        // tslint:disable-next-line:no-unused-expression
        expect(sut.disallowAndTermEntry).to.be.true;

    });

    it("enables AND search boxes when the term 'and' is removed", () => {

        sut.searchCriteria = "Alaina Morgan";

        // tslint:disable-next-line:no-unused-expression
        expect(sut.disallowAndTermEntry).to.be.false;

    });

});