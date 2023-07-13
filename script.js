let audio=new Audio('songs/Friends.mp3');
// new Audio(`songs/Friends.mp3`);
// let audio2=new Audio('songs[i].path');
// let audio=new Audio('songs/Friends.mp3');
let songs=[
    {Name:"Friends-Annie Marie",Duration:"3:51",path:`songs/Friends.mp3`,coverpath:`covers/Friends.png`},
    {Name:"Perfect-Ed Sheeran",Duration:"4:39",path:`songs/Perfect-Ed Sheeran.mp3`,coverpath:`covers/Perfect-Ed Sheeran.png`},
    {Name:"Billy Currington - must be doing something right !",Duration:"4:03",path:`songs/Billy Currington - must be doing something right !.mp3`,coverpath:`covers/Billy Currington - must be doing something right !.jpeg`},
    {Name:"Thomas Rhett - Die A Happy Man",Duration:"4:03",path:`songs/Thomas Rhett - Die A Happy Man.mp3`,coverpath:`covers/Billy Currington - must be doing something right !.jpeg`}
]
// let body=document.querySelector(body);
let bottom=document.querySelector('.bottom');
let songitem=Array.from(document.getElementsByClassName('songitem'));
let nav=document.querySelector('.navbar')
let name=document.querySelector('.name');
let tobeadded=document.querySelector('.tobeadded');
let progressbar=document.querySelector('.progressbar')
let totalduration=document.querySelector('#totalduration')
let played=document.querySelector('#played')
let prevsong=document.querySelector('.fa-step-backward')
let nextsong=document.querySelector('.fa-step-forward')
let isPlaying=false;
tobeadded.innerHTML=`<i class="fas  iconstoplay fa-play"></i>`;


// for(let i=0;i<songs.length;i++){
    // let i=0;
    // prevsong.addEventListener('click',()=>{
        //     if(i!=0){
            //         i--;
            //         songs[i];
            //     }
            // })
            // }
            
            for (let i=0;i<songitem.length;i++){
                // console.log(i,songitem[i])
                songitem[i].getElementsByTagName('img')[0].src=songs[i].coverpath;
                songitem[i].querySelector('#songname').innerText=songs[i].Name;
                // // let path=songs[i].path;
                // let audtest=new Audio(songs[i].path);
                // // audtest.play()
                // console.log(parseInt(audtest.duration));
                // let total=parseInt(audtest.duration);
                // let totmins=parseInt(total/60);
                // let totsecs=parseInt(total%60);
                // let s;
                // if(totsecs<=9){
                //     s=totmins+":0"+totsecs
                    
                // }else{
                    
                //     s=totmins+":"+totsecs
                // }
                songitem[i].querySelector('span').innerText=songs[i].Duration;
                
                
            }
            let removegif =()=>{
                for (let i=0;i<songitem.length;i++){
                    
                    songitem[i].getElementsByTagName('img')[0].src=songs[i].coverpath;
                    // e.target.getElementsByTagName('img').src='cover';
                }
            }
            var index=0;
            let songitemclicked;
            var array=[];
            for(Element of songitem){
                
                Element.addEventListener('click',(e)=>{
                    removegif();
                    e.target.parentElement.getElementsByTagName('img')[0].src='MusicPlaying.gif';
                    songitemclicked=e.target.parentElement;
                    array.push(songitemclicked);
                    
                    index=parseInt(songitemclicked.id)
                    audio.src=songs[index].path;
                    // audio.src=songs[index].path;
                    // isPlaying=false;
                    if(audio.currentTime==audio.duration){
                        // name.innerHTML=`<img src="MusicPaused.png" height="40px" alt="" srcset="">
                        // <span id="textname">Friends - Annie Marie</span>`;
            tobeadded.innerHTML=`<i class="fas iconstoplay fa-pause"></i>`;
            audio.currentTime=0;
            audio.play();
            isPlaying=true;
            
        }
        else if(isPlaying && array[array.length-1] != array[array.length-2]){
            audio.play()
            // removegif() 
            // let songname=songs[i].Name;
            // name.innerHTML=`<img src="MusicPaused.png" height="40px" alt="" srcset="">
            // <span id="textname">${songs[index].Name}</span>`;
            // tobeadded.innerHTML=`<i class="fas iconstoplay fa-play"></i>`;
            name.innerHTML=`<img src="MusicPlaying.gif" height="40px" alt="" srcset="">
            <span id="textname">${songs[index].Name}</span>`;
            tobeadded.innerHTML=`<i class="fas iconstoplay fa-pause"></i>`;
        }
        
        else{
            
            audio.play();
            if(audio.currentTime!=0){
                songitemclicked.getElementsByTagName('img')[0].src='MusicPlaying.gif'
            }
            isPlaying=true;
            name.innerHTML=`<img src="MusicPlaying.gif" height="40px" alt="" srcset="">
            <span id="textname">${songs[index].Name}</span>`;
            tobeadded.innerHTML=`<i class="fas iconstoplay fa-pause"></i>`;
        }
        
        
        // let audiotobeplayed=new Audio(`${songs[]}`)
        // console.log(songitemclicked)
    })
}





tobeadded.addEventListener('click',function(e){
    if(audio.currentTime==audio.duration){
        // name.innerHTML=`<img src="MusicPaused.png" height="40px" alt="" srcset="">
        // <span id="textname">Friends - Annie Marie</span>`;
        tobeadded.innerHTML=`<i class="fas iconstoplay fa-pause"></i>`;
        audio.currentTime=0;
        audio.play();
        isPlaying=true;
        
    }
    else
    if(isPlaying){
        audio.pause();
        isPlaying=false;
        removegif()
        // let songname=songs[i].Name;
        name.innerHTML=`<img src="MusicPaused.png" height="40px" alt="" srcset="">
        <span id="textname">${songs[index].Name}</span>`;
        tobeadded.innerHTML=`<i class="fas iconstoplay fa-play"></i>`;
    }
    
    else{
        if(index==0){
            songitem[0].getElementsByTagName('img')[0].src='MusicPlaying.gif'

        }
        audio.play();
        if(audio.currentTime!=0){
            songitemclicked.getElementsByTagName('img')[0].src='MusicPlaying.gif'
        }
        isPlaying=true;
        name.innerHTML=`<img src="MusicPlaying.gif" height="40px" alt="" srcset="">
        <span id="textname">${songs[index].Name}</span>`;
        tobeadded.innerHTML=`<i class="fas iconstoplay fa-pause"></i>`;
    }
});
progressbar.addEventListener('change',()=>{
    audio.currentTime=(progressbar.value/10000)*audio.duration
})

audio.addEventListener('timeupdate', ()=>{
    if(audio.currentTime==audio.duration){
        name.innerHTML=`<img src="MusicPaused.png" height="40px" alt="" srcset="">
        <span id="textname">${songs[index].Name}</span>`;
        tobeadded.innerHTML=`<i class="fas iconstoplay fa-play"></i>`;
        
    }
    let progress=(audio.currentTime/audio.duration)*10000
    let total=audio.duration;
    let totmins=parseInt(total/60);
    let totsecs=parseInt(total%60);
    let audioplayed=parseInt(audio.currentTime);
    let audioplayedmins=parseInt(audio.currentTime/60);
    let audioplayedsecs=parseInt(audio.currentTime%60);
    if(audioplayedsecs<=9){
        played.innerHTML=`${audioplayedmins}:0${audioplayedsecs}`
        
    }else{
        played.innerHTML=`${audioplayedmins}:${audioplayedsecs}`
        
    }if(totsecs<=9){
        
        totalduration.innerHTML=`${totmins}:0${totsecs}`
    }else{
        
        totalduration.innerHTML=`${totmins}:${totsecs}`
    }
    progressbar.value=progress;
    bottom.style.background=`linear-gradient(${audio.currentTime/audio.duration*360}deg,rgb(12, 1, 14), rgb(${(255-((audio.currentTime/audio.duration)*255))-204}, ${28+audio.currentTime*0.6}, ${audio.currentTime+56}))`;
    // audio.=progressbar.value;
    document.body.style.background=`rgb(${(255-((audio.currentTime/audio.duration)*255))-204}, ${28+audio.currentTime*0.6}, ${audio.currentTime+56})`;
    nav.style.background=`rgb(${(255-((audio.currentTime/audio.duration)*255))-204}, ${28+audio.currentTime*0.6}, ${audio.currentTime+56})`;
})
if(index==songs.length-1){
    nextsong.style.color=`rgba(255, 255, 255, 0.418)`
}   
nextsong.addEventListener('click',()=>{
    // if(i!=songs.length-1){
    //     i++
    if(index<songs.length-1){
        nextsong.style.color=`white`
        audio.src=songs[++index].path;
        // audio.play();
        audio.play();
            if(audio.currentTime!=0){
                songitemclicked.getElementsByTagName('img')[0].src='MusicPlaying.gif'
            }
            isPlaying=true;
            name.innerHTML=`<img src="MusicPlaying.gif" height="40px" alt="" srcset="">
            <span id="textname">${songs[index].Name}</span>`;
            tobeadded.innerHTML=`<i class="fas iconstoplay fa-pause"></i>`;
        removegif()
        songitem[index].getElementsByTagName('img')[0].src='MusicPlaying.gif';
    }
    else{
        // nextsong.style.color=`rgba(255, 255, 255, 0.418)`
    }
    // }
})
prevsong.addEventListener('click',()=>{
    // if(i!=songs.length-1){
        //     i++
        if(index>0){
            prevsong.style.color=`white`
            audio.src=songs[--index].path;
            // audio.play();
            removegif()
            songitem[index].getElementsByTagName('img')[0].src='MusicPlaying.gif';
        audio.play();
        if(audio.currentTime!=0){
            songitemclicked.getElementsByTagName('img')[0].src='MusicPlaying.gif'
        }
        isPlaying=true;
        name.innerHTML=`<img src="MusicPlaying.gif" height="40px" alt="" srcset="">
        <span id="textname">${songs[index].Name}</span>`;
        tobeadded.innerHTML=`<i class="fas iconstoplay fa-pause"></i>`;
    }
    else{
        // prevsong.style.color=`rgba(255, 255, 255, 0.418)`
    }
    // }
})
// if(index==0){
//     prevsong.style.color=`rgba(255, 255, 255, 0.418)`
// }
// else{
//     prevsong.style.color=`rgb(255,255,255`
// }