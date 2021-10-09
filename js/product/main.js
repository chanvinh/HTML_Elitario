//NAV
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

//MAIN


function item_center() {
    $(".item1").click( () => {
        $(".item1-click").addClass("addClassItem1-click")
        $(".top").addClass("top-ZIndex")
    })
    
    $(".item2").click( () => {
        $(".item2-click").addClass("addClassItem2-click")
        $(".top").addClass("top-ZIndex")
    })
    
    $(".icon-X i").mouseup( () => {
        $(".item1-click").removeClass("addClassItem1-click")
        $(".item2-click").removeClass("addClassItem2-click")
        $(".top").removeClass("top-ZIndex")
    })
    
    $(".item1-img img").click( () => {
        $(".item1-click").addClass("addClassItem1-click")
    })
    
    $(".item2-img img").click( () => {
        $(".item2-click").addClass("addClassItem2-click")
    })
    
    $(".item1-click").mouseup( () => {
        $(".item1-click").removeClass("addClassItem1-click")
        $(".top").removeClass("top-ZIndex")
    })
    
    $(".item2-click").mouseup( () => {
        $(".item2-click").removeClass("addClassItem2-click")
        $(".top").removeClass("top-ZIndex")
    })
}
item_center()

function item_bottom() {
    $(".item2-bottom img").click(() => {
        $('.item1-bottom img').removeClass("active")
        $('.item2-bottom img').addClass("active")
        $(".item1").addClass("tranIMG_Minus_px")
        $(".item2").addClass("tranIMG_Plus_px")
    })
    $(".item1-bottom img").click(() => {
        $('.item1-bottom img').addClass("active")
        $('.item2-bottom img').removeClass("active")
        $(".item1").removeClass("tranIMG_Minus_px")
        $(".item2").removeClass("tranIMG_Plus_px")
    })
}
item_bottom()

//MAIN (SIZE - PRICE)
function size_price() {
    var size_price_text = document.getElementById("size").value;
    if(size_price_text === "37.00$") {
        $(".clear").addClass("clear_add")
        $("#price").addClass("price_add")
        document.getElementById("price").innerHTML = size_price_text;
        $(".number_addCart #button").removeClass("disButton")
        document.getElementById("button").disabled = false;
    }
    if(size_price_text === "47.00$") {
        $(".clear").addClass("clear_add")
        $("#price").addClass("price_add")
        document.getElementById("price").innerHTML = size_price_text;
        $(".number_addCart #button").removeClass("disButton")
        document.getElementById("button").disabled = false;
    }
    if(size_price_text === "59.00$") {
        $(".clear").addClass("clear_add")
        $("#price").addClass("price_add")
        document.getElementById("price").innerHTML = size_price_text;
        $(".number_addCart #button").removeClass("disButton")
        document.getElementById("button").disabled = false;
    }
    if(size_price_text === "") {
        $(".clear").removeClass("clear_add")
        $("#price").removeClass("price_add")
        document.getElementById("price").innerHTML = size_price_text;
        $(".number_addCart #button").addClass("disButton")
        document.getElementById("button").disabled = true;
    }
}
function clickClear() {
    $(".clear").click( () => { 
        $(".clear").removeClass("clear_add")
        $("#price").removeClass("price_add")
        document.getElementById("button").disabled = true;
        $(".number_addCart #button").addClass("disButton")
        document.getElementById("size").value = ""
    })
}
size_price()
clickClear()

//MAIN CLICK MAIN-3
function main_3_click() {
    $(".addition-information").click( () => {
        $(".item2-main-3").removeClass("disnoneMain-3")
        $(".item2-main-3").addClass("disblockMain-3");
        $(".addition-information a").addClass("active-a-main-3")
        
        $(".description a").removeClass("active")
        $(".description a").removeClass("active-a-main-3")
        $(".item1-main-3").addClass("disnoneMain-3")
    
        $(".reivews a").removeClass("active-a-main-3")
        $(".item3-main-3").addClass("disnoneMain-3")
    })
    
    $(".reivews").click( () => {
        $(".item3-main-3").removeClass("disnoneMain-3")
        $(".item3-main-3").addClass("disblockMain-3");
        $(".reivews a").addClass("active-a-main-3")
        
        $(".description a").removeClass("active-a-main-3")
        $(".item1-main-3").addClass("disnoneMain-3")
    
        $(".addition-information a").removeClass("active-a-main-3")
        $(".item2-main-3").addClass("disnoneMain-3")
    })
    
    $(".description").click( () => {
        $(".item1-main-3").removeClass("disnoneMain-3")
        $(".item1-main-3").addClass("disblockMain-3");
        $(".description a").addClass("active-a-main-3")
        
        $(".addition-information a").removeClass("active-a-main-3")
        $(".item2-main-3").addClass("disnoneMain-3")
    
        $(".reivews a").removeClass("active-a-main-3")
        $(".item3-main-3").addClass("disnoneMain-3")
    })
}
main_3_click()

//MAIN FORM MAIN-3
function checkLengthInput1() {
    var review = document.getElementById("reviewsJS").value;

    review = review.trim();

    if(review.length <= 1) {
        document.getElementById("text_reivewsJS").innerHTML = "Nhập ký tự reivew lớn hơn = 2"
        return;
    }
    else {
        document.getElementById("text_reivewsJS").innerHTML = "";
    }
}

function checkLengthInput2() {
    var name = document.getElementById("nameJS").value;

    name = name.trim();

    if(name.length <= 1) {
        document.getElementById("text_nameJS").innerHTML = "Nhập ký tự name lớn hơn = 2"
        return;
    }
    else {
        document.getElementById("text_nameJS").innerHTML = "";
    }
}

function checkLengthInput3() {
    var email = document.getElementById("emailJS").value;

    email = email.trim()

    if (email.length <= 4) {
        document.getElementById("text_emailJS").innerHTML = "Nhập ký tự email lớn hơn = 5"
        return;
    }
    else {
        document.getElementById("text_emailJS").innerHTML = "";
    }

}

var button = document.getElementById("buttonJS");
button.addEventListener("",buttonCheck())
function buttonCheck() {
    var review = document.getElementById("reviewsJS").value;
    var name = document.getElementById("nameJS").value;
    var email = document.getElementById("emailJS").value;

    review = review.trim()
    name = name.trim()
    email = email.trim()

    if(review.length <= 1 || name.length <= 1 || email.length <=4) {
        document.getElementById("buttonJS").disabled = true;
    }
    else {
        document.getElementById("buttonJS").disabled = false;
    }
    
}
buttonCheck()

//MAIN MAIN-4
function owlCarousel1() {
    $('.owl-carousel').owlCarousel({
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1025:{
                items:4
            },
            1024: {
                items:3
            }
        }
    })
}
owlCarousel1()