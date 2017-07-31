# Problems highlighted by the MVC via Backbone/jQuery Example

### PROBLEM #1: Dependency Entourage

Instantiating the view, so we can unit test involves providing or mocking the following dependencies:
* Backbone
    * Underscore
* jQuery 
    * Window
    * DOM

Even though the code is simple, unit testing is near impossible without a full browser.  Mocking a window and DOM is horrible, even with libraries like jsDom.  Therefore testing becomes far more complicated than simply writing the code, making it almost certain that it won't be done.

### PROBLEM #2: Responsibilities

This extremely simple code turns out to have at least 6 responsibilities. Each responsibility represents an aspect that needs to be unit tested:

0. Render UI: normally part of component, but left out of our contrived example.  This includes building/massaging a model, loading templates, and rendering template with the model.

1. Locate the "main" input element
2. Subscribe to "input" event of main input element
3. Get value of input element
4. Validate if *and* is present in search text
5. Locate the "and" input elements
6. Enable/Disable  "and" input elements

### PROBLEM #3: Template Volatility
Over time, changes to the template could break the code.  For instance, changing the intentionally poorly-chosen CSS class names (_main_, _and_) necessitates a change to the JavaScript code.  Regardless of the type of element selector that is used, in most cases, modifying the template structure or CSS naming necessitates a change to JavaScript code.  

### PROBLEM #4: Business logic intermingled with DOM manipulation

We don't want to waste time unit testing code that has little value to the *business*.  Since the above code mixes Business logic with DOM manipulation code, it is quite difficult to know *what exactly* should be unit tested.

This is exacerbated by the organizational move to Feature Teams.  At least with Component teams, a certain amount of expertise or insight could be accumulated over time.  Now teams must jump into unfamiliar code and tread water until they can figure out the business logic so they avoid breaking existing critical logic.  And since there are no unit tests - breakage is inevitable.  

