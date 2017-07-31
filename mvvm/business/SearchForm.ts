
/**
 * Form containing search box and other fields used to enter
 * terms to be And-ed with the search criteria
 */
export class SearchForm {

    private _pattern = new RegExp(/and/i);

    /** Main Search Criteria */
    searchCriteria: string;

    /** Returns true if "And" term appears in search criteria */
    get disallowAndTermEntry(): boolean {
      return this._pattern.test(this.searchCriteria);
    }

}