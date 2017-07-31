# MVVM Solution using Angular

In the included code, the problems introduced by the MVC example are solved:

### PROBLEM #1: Dependency Entourage
Unit testing is enabled by isolating the [SearchForm](business/searchform.ts) to its own business object.  Since the business object has no dependencies on the DOM, Window, or even Angular itself, it can be thoroughly exercised in a [set of unit tests](test/searchform.ts) that can run quickly in a CI process.

### PROBLEM #2: Responsibilities
### PROBLEM #4: Business logic intermingled with DOM manipulation
This solution delegates the DOM inspection, tracking and manipulation functionality to Angular itself, thereby reducing the responsibilities of the component.  

As a result, the Angular component itself contains no code other than the decorator/metadata configuration.  As such, it does not require unit tests, as all the critical behaviors can be exercised in the Business object.  

### PROBLEM #3: Template Volatility
By using data binding provided by Angular, the business object now has no reason to be aware of the UI template.  That enables reuse of the business object across many variations of the UI (perhaps due to regional or other business concerns).

### Additional Benefits
* The amount of code that the engineer must write greatly decreased.  
    - Decreases Typos and other logical errors
    - Clarifies business logic
    - Naturally increases developer velocity

