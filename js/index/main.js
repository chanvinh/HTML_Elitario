//--------------------------------------------------------------------------------------------------------------------------------
function bars() {
    //click vào icon Bars nav thì sẽ toggle
    $(".icon-bars i").click( () => {
        $(".navJS-full").toggleClass("toggleNavJS-full")
        $("body").toggleClass("togglebodyOverflow")
        $(".background-full").toggleClass("toggleBackground")
    })

    //click vào nút X và background thì remove Toggle
    $(".button-close i").mouseup(() => {
        $(".background-full").removeClass("toggleBackground")
        $(".navJS-full").removeClass("toggleNavJS-full")
        $("body").removeClass("togglebodyOverflow")
        $(".later-list-navJS").removeClass("toggleNavJS-laster")
        $(".first-list-navJS").removeClass("toggleNavJS-first")
    })
    $(".background-full").mouseup(() => {
        $(".background-full").removeClass("toggleBackground")
        $(".navJS-full").removeClass("toggleNavJS-full")
        $("body").removeClass("togglebodyOverflow")
        $(".later-list-navJS").removeClass("toggleNavJS-laster")
        $(".first-list-navJS").removeClass("toggleNavJS-first")
    })

    //click nav không bị mouseup
    $(".list-navJS").click( () => {
        $(".navJS-full").addClass("toggleNavJS-full")
        $(".background-full").addClass("toggleBackground")
    })

    //click vào -> kế bên li->home navJS-full thì hiện nav con
    $(".icon-right i").click( () => {
        $(".later-list-navJS").toggleClass("toggleNavJS-laster")
        $(".first-list-navJS").toggleClass("toggleNavJS-first")
    })

    //click vào << quay trở lại navJS-full
    $(".top i").click( () => {
        $(".later-list-navJS").removeClass("toggleNavJS-laster")
        $(".first-list-navJS").removeClass("toggleNavJS-first")
    })

}
bars();

function search() {
    //click vào icon search trên nav thì toggle
    $(".icon-serach i").click( () => {
        $(".formSearch").toggleClass("toggleFromSearchJS")
    })

    //click vào form input thì không bị mouseup
    $("#click-input").click( () => {
        $(".formSearch").addClass("toggleFromSearchJS")
    })

    //click vào X và form ngoài cái input thì mouseup
    $(".formSearch").mouseup( () => {
        $(".formSearch").removeClass("toggleFromSearchJS")
    })
    $(".button-close-from i").click( () => {
        $(".formSearch").removeClass("toggleFromSearchJS")
    })
}
search();

function iconPosition() {
    function icon1() {
        $(".heart1 i").click(() => {
            setTimeout(() =>{
                $(".heart1").addClass("toggleIconPosition")
            },2000)
        })
    
        $(".balance1 i").click(() => {
            setTimeout(() =>{
                $(".balance1").addClass("toggleIconPosition")
            },2000)
        })
    }
    
    function icon2() {
        $(".heart2 i").click(() => {
            setTimeout(() =>{
                $(".heart2").addClass("toggleIconPosition")
            },2000)
        })
    
        $(".balance2 i").click(() => {
            setTimeout(() =>{
                $(".balance2").addClass("toggleIconPosition")
            },2000)
        })
    }
    
    function icon3() {
        $(".heart3 i").click(() => {
            setTimeout(() =>{
                $(".heart3").addClass("toggleIconPosition")
            },2000)
        })
    
        $(".balance3 i").click(() => {
            setTimeout(() =>{
                $(".balance3").addClass("toggleIconPosition")
            },2000)
        })
    }
    
    function icon4() {
        $(".heart4 i").click(() => {
            setTimeout(() =>{
                $(".heart4").addClass("toggleIconPosition")
            },2000)
        })
    
        $(".balance4 i").click(() => {
            setTimeout(() =>{
                $(".balance4").addClass("toggleIconPosition")
            },2000)
        })
    }

    function icon5() {
        $(".heart5 i").click(() => {
            setTimeout(() =>{
                $(".heart5").addClass("toggleIconPosition")
            },2000)
        })
    
        $(".balance5 i").click(() => {
            setTimeout(() =>{
                $(".balance5").addClass("toggleIconPosition")
            },2000)
        })
    }

    function icon6() {
        $(".heart6 i").click(() => {
            setTimeout(() =>{
                $(".heart6").addClass("toggleIconPosition")
            },2000)
        })
    
        $(".balance6 i").click(() => {
            setTimeout(() =>{
                $(".balance6").addClass("toggleIconPosition")
            },2000)
        })
    }

    function icon7() {
        $(".heart7 i").click(() => {
            setTimeout(() =>{
                $(".heart7").addClass("toggleIconPosition")
            },2000)
        })
    
        $(".balance7 i").click(() => {
            setTimeout(() =>{
                $(".balance7").addClass("toggleIconPosition")
            },2000)
        })
    }

    function icon8() {
        $(".heart8 i").click(() => {
            setTimeout(() =>{
                $(".heart8").addClass("toggleIconPosition")
            },2000)
        })
    
        $(".balance8 i").click(() => {
            setTimeout(() =>{
                $(".balance8").addClass("toggleIconPosition")
            },2000)
        })
    }
    
    icon1()
    icon2()
    icon3()
    icon4()
    icon5()
    icon6()
    icon7()
    icon8()    
}
iconPosition()

function owlCarousel() {
    $('.owl-carousel').owlCarousel({
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            768: {
                items:2
            },
            1000:{
                items:3
            }
        }
    })
}
owlCarousel()
//--------------------------------------------------------------------------------------------------------------------------------