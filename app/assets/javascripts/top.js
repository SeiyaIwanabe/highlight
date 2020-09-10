jQuery(function($) {
  $('.bgimg-switcher').bgSwitcher({
    images: ['assets/test.png','assets/test2.png','assets/test3.png'], //切り替え画像
    interval: 4000, // 切り替えの間隔 1000 = 1秒
    start: true, // $.fn.bgsswitcher(config)をコールしたときに切り替えを開始する
    loop: true, //切り替えをループする
    shuffle: true, //背景画像の順番をシャッフルする
    effect: "fade", //エフェクトの種類
    duration: 1000, //エフェクトの間隔 1000 = 1秒
    easing: "linear",
    opacity: 0.5
    });
  });

// $(function(){
//   // 画像の枚数
//   let count = $("#slide li").length;
//   // 現在表示されている画像（最初は一番目の画像）
//   let current = 1;
//   // 次に表示する画像
//   let next = 2;
  
//   let interval = 3000;
//   let duration = 500;
//   let timer;

//   $("#slide li:not(:first-child)").hide();
//   timer = setInterval(slideTimer, interval);

//   function slideTimer(){
//     $("#slide li:nth-child(" + current + ")").fadeOut(duration);

//     $("#slide li:nth-child(" + next + ")").fadeIn(duration);

//     current = next;
//     next = ++next;

//     if(next > count) {
//       next = 1;
//     }
//   }
// });
