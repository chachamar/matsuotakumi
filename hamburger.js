// 要素を取得 ※1

var btn = document.getElementById("btn");

var menu = document.getElementById("menu");

var modal = document.getElementById("modal");

var closeBtn = document.getElementById("btn--close"); 


// ボタンがクリックされたらclassを追加 ※2

btn.addEventListener("click",function(){

   menu.classList.add("add-menu");

   modal.classList.add("add-modal");

});



// モーダルがクリックされたらclassを削除 ※3

modal.addEventListener("click",function(){

   menu.classList.remove("add-menu");

   modal.classList.remove("add-modal");

});


// ✖ボタンがクリックされたらclassを削除（追加）
closeBtn.addEventListener("click", function () {

   menu.classList.remove("add-menu");

   modal.classList.remove("add-modal");

});