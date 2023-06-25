document.getElementById("mainintrosplit").animate([{width:"50%"}], {duration:500, fill:"forwards"});


//typewrite info 


async function typewrite(string, element) {
    const eledef = document.getElementById(element)
    const str = string
    var build = ""

    for (const x of str)
    {
        let p = new Promise((r) =>{
            build += x
            eledef.textContent = build
            setTimeout(() => {
                r()
            }, 10);
        })
        await p.then((r)=>{})
    }
  };
  typewrite('Service at your home - 7 Days a week - Fair pricing', "typewrite1");

  (function(){ //fade arrows
    const element = document.getElementById("down")
    const animinfo = {duration:250, fill:"forwards"}

    function FadeIn(){
        element.animate([{opacity:1}], animinfo)
        setTimeout(() => {
            FadeOut()
        }, .6 * 1000);
    }

    function FadeOut(){
        element.animate([{opacity:0}], animinfo)
        setTimeout(() => {
            FadeIn()
        }, .6 * 1000);
    }

    FadeOut()


  }())
