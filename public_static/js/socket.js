const socket    = io('http://localhost:8080');

// $('form').submit(function(){
//     socket.emit('realtime emotion', $('#m').val());
//     $('#m').val('');
//     return false;
// });

socket.on('keyHtml', msg => {
    $('#content').html(`${msg}`);
    console.log(msg)
});

socket.on('keyHtml2', msg => {
    $('#content2').html(`${msg}`);
    console.log(msg)
});