// notice here the .on('turbolinks:load', function(){....
// this is how rails loads only the relevant part of a page.
// That is the hook on loading only the javascript for a specific page


$(document).on('turbolinks:load', function() {
    console.log('hello world from load');

    $('#hello').click(function(){
        console.log("clicked");
    })

    
});
