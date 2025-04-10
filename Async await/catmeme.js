const userLeft = false;
const userWatchingCatMeme = false;

function watchTutorialCallback(callback, errorCallback) {
    if(userLeft) {
        errorCallback({
            name: 'User Left',
            message: ':('
        });
    } else if(userWatchingCatMeme) {
        errorCallback({
            name: 'User Watching Cat Meme',
            message: 'Web Development Tutorial'
        });
    } else {
        callback('Thumbs up and subscribe!');
    }
}

watchTutorialCallback((message) => {
    console.log('Success: ' + message);
}, (error) => { 
    console.log(error.name + ' ' + error.message);
} )



function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if(userLeft) {
            reject({
                name: 'User Left',
                message: ':('
            });
        } else if(userWatchingCatMeme) {
            reject({
                name: 'User Watching Cat Meme',
                message: 'Web Development Tutorial'
            });
        } else {
            resolve('Thumbs up and subscribe!');
        }
    })
    
}



watchTutorialPromise().then((message) => {
    console.log('Success: ' + message)
}).catch( (error) => { 
    console.log(error.name + ' ' + error.message);
} )