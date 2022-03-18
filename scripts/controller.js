window.addEventListener('load', eventBinder);
import {getSongs} from './ajax.js';

function eventBinder()
{
     document.querySelector('#search').addEventListener('click', searchSongs);
}

function searchSongs(){
    let singer = document.querySelector('#singer').value;
    console.log('hey1', singer);
    if(singer && singer.length>0)
    {
        let load = document.querySelector('#loading');
        console.log(load);
        load.className = '';
        console.log(load);
        console.log('hey');
        getSongs(singer ,  convertData);
    }
}

function convertData(json){
    let songs = JSON.parse(json);

    console.log("converted data is", songs);
    const allSongs = songs['results'];

    printSongs(allSongs);
};

function printSongs(allSongs)
{
    let outputDiv = document.querySelector(".output");
    outputDiv.innerHTML = '';

    allSongs.map(song=>{

        const div = document.createElement('div');
        let image = document.createElement('img');
        image.src = song['artworkUrl100'];
        // console.log(image);
        div.append(image);

        let audio = document.createElement('audio');
        audio.controls = true ; 
        audio.src = song['previewUrl'];
        div.append(audio);

        outputDiv.append(div);
    })
};