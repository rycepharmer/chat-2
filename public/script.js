const socket = io();

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    socket.emit('chat message', document.querySelector('#m').value);
    document.querySelector('#m').value = '';
});

socket.on('chat message', (msg) => {
    const li = document.createElement('li');
    li.textContent = msg;
    document.querySelector('#messages').appendChild(li);
});
