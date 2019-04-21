const socket    = io('http://localhost:8080');

socket.on('emoHtml', msg => {
    msg = msg.split(";")
    val = msg[5]%10
    $('#framediv').html(`<img src="/frames/fig${val}.png?${msg[5]}" height="450">`);
    // ? value keeps the url unique, while accessing the file with link before ?, this helps to beat cached images with old url
    $('#content').html(`<h2>${msg[0]}</h2><h4>${msg[1]}</h4>`);
    $('#content2').html(`<h2>${msg[2]}</h2><h4>${msg[3]}</h4>`);

});