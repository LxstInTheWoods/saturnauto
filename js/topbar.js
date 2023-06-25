for (const [x, v] of Object.entries(document.getElementsByTagName('a'))){
    if (v.className != "ign")
    {
    v.addEventListener('mouseenter', ()=>{
        v.animate([{color:"rgb(66, 0, 219)"}], {duration:250, fill:"forwards"})
    })
    v.addEventListener('mouseleave', ()=>{
        v.animate([{color:"white"}], {duration:250, fill:"forwards"})
    })
}
}