/* 7ONSHO — page intro, independent room soundtrack, layered final sounds */
document.addEventListener("DOMContentLoaded",()=>{
  const intro=document.getElementById("intro"),enter=document.getElementById("enterMuseum"),home=document.getElementById("homeContent");
  const video=document.getElementById("podcastVideo"),placeholder=document.getElementById("videoPlaceholder");
  if(intro&&enter&&home){
    enter.addEventListener("click",()=>{intro.classList.add("is-leaving");home.classList.remove("is-hidden");document.body.classList.remove("intro-active");setTimeout(()=>intro.hidden=true,900);});
  }
  if(video&&placeholder){
    video.addEventListener("loadedmetadata",()=>placeholder.style.display="none");
    video.addEventListener("error",()=>placeholder.style.display="flex");
    if(video.readyState>=1)placeholder.style.display="none";
  }
  const audio=document.querySelector(".room-audio"),toggle=document.querySelector(".track-toggle");
  if(audio&&toggle){
    toggle.addEventListener("click",async()=>{
      if(audio.paused){try{await audio.play();toggle.textContent="Ⅱ";toggle.classList.add("is-playing");}catch(e){console.info("Check room audio file:",audio.src,e);}}
      else{audio.pause();toggle.textContent="▶";toggle.classList.remove("is-playing");}
    });
    audio.addEventListener("ended",()=>{toggle.textContent="▶";toggle.classList.remove("is-playing");});
  }
  document.querySelectorAll(".ambient-toggle").forEach(button=>{
    const sound=new Audio(button.dataset.sound);sound.loop=true;sound.preload="none";
    button.addEventListener("click",async()=>{
      if(sound.paused){try{await sound.play();button.classList.add("is-playing");button.querySelector("span").textContent="Ⅱ";}catch(e){console.info("Check ambient sound file:",sound.src,e);}}
      else{sound.pause();sound.currentTime=0;button.classList.remove("is-playing");button.querySelector("span").textContent="▶";}
    });
    window.addEventListener("pagehide",()=>sound.pause());
  });
});
