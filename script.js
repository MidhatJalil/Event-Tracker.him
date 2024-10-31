//Click Event

let count = 0; 
function clickMe() {
    
    count++; 
    document.getElementById('count').innerText = `Click Count: ${count}`;
}

//Mouse Event

let mouseBox = document.getElementById('box');
let result1 = document.getElementById('result1');

mouseBox.addEventListener('mousemove', function (position) {
    let X = position.clientX;
    let Y = position.clientY;
    result1.innerText = `Mouse Position: (${X} , ${Y})`
})

//Keyboard Event

let Key = document.getElementById('key');
let response = document.getElementById('response');
Key.addEventListener('keydown', function (keyPress) {
    response.innerText = `${keyPress.key}`
})



function reset() {
    document.getElementById('key').textContent = "";
    const inputField = document.getElementById('key');
    inputField.value = '';
}

//Focus and blur Event

function updateFocusStatus(status) {
    const message = document.getElementById('message-focus');
    message.textContent = `Focus Status: ${status}`;
}

// Window Resize Events
let widthouput = document.getElementById('width#');
let heightouput = document.getElementById('height#');
function size() {
    widthouput.innerText = window.innerWidth;
    heightouput.innerText = window.innerHeight;
}
size();
window.onresize = size;


//Submit Event

let submitForm = document.getElementById('form')
submitForm.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('status').innerText = `Form Status: Submitted`;
});

function resetForm() {
    document.getElementById('form').reset(); 
    document.getElementById('status').textContent = 'Submission Status: Not Submitted'; 
}


//Drag and drop event

function handleDragStart() {
    const dragStatus = document.getElementById('dragStatus');
    dragStatus.textContent = 'Drag Status: Dragging'; 
}

function handleDragEnd() {
    const dragStatus = document.getElementById('dragStatus');
    dragStatus.textContent = 'Drag Status: Ended'; 
}

//Media Event

const video = document.getElementById('video');
    const mediaStatus = document.getElementById('mediaStatus');

    video.onplay = () => {
        mediaStatus.textContent = 'Media Status: Playing'; 
    };

    video.onpause = () => {
        mediaStatus.textContent = 'Media Status: Paused'; 
    };

    video.onended = () => {
        mediaStatus.textContent = 'Media Status: Ended'; 
    };