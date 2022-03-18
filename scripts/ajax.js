
 export function getSongs(singerName ,  convertData){
    var xmlHttpRequest = new XMLHttpRequest();
    const URL = `https://itunes.apple.com/search?term=${singerName}&limit=10`;
   
    xmlHttpRequest.onreadystatechange = function(){
        console.log(this.readyState);
        if(this.readyState== 4 && this.status == 200)
        {
            document.querySelector('#loading').className='hide';
            console.log('data is',  this.responseText , 'type is' , typeof(this.responseText))
            convertData(this.responseText);

        }
    }

    xmlHttpRequest.open('GET', URL , true);
    xmlHttpRequest.send(null);
    

}