$(document).ready(function() {
    $('#create').click(function() {
        var url = chrome.extension.getURL('templates/create.html');
        $.get(url, function(template) {
        	console.log(template);
            var rendered = Mustache.render(template);
            $('#main').html(rendered);
        });
    });
});
