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
