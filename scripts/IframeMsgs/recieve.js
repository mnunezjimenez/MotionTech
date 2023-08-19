/* Listen for messages from the parent window */
window.addEventListener('message', event => {
    if(event.data.angle || event.data.rep){
        return;
    }
    else if (event.data.exercise){
        console.log('data exercise ', event.data.exercise)
    }
});