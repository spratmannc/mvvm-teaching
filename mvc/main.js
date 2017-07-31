
/**
 * Super simple, contrived example of a backbone form that 
 * simply disables several other search term forms when 
 */
var SearchForm = Backbone.View.extend({
    events: {
        "input .main": "onMainChanged"
    },
 
    onMainChanged: function(e) {
        var mainInput = $(e.target);
        var textVal = mainInput.val();
        var containsAnd = new RegExp(/and/i).test(textVal);
        this.$el.find('.and').prop('disabled', containsAnd);
    }

});


// startup
$(function() {

    // initialize the form
    var component = new SearchForm({
        el: $("#main")
    });

});


