/* Listen for messages from the parent window */
window.addEventListener('message', event => {
    if(event.data.angle || event.data.rep){
        return;
    }
    else if (event.data.exercise){
        exercise = event.data.exercise;
        console.log('data exercise in iframe ', event.data.exercise)
    }
    else if (event.data.startTest){
        startTest = event.data.startTest;
        console.log('StratTest  ', event.data.startTest)
    }
    else if (event.data.restart){
        console.log('restart ')
        exerciseStep = 0;
        repCount = 0;
        startTest = false;
    }
});