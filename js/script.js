$('.slider').slick({
    fade:true,//切り替えをフェードで行う。初期値はfalse。
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 3000,//次のスライドに切り替わる待ち時間
    speed:1000,//スライドの動きのスピード。初期値は300。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 1,//スライドを画面に1枚見せる
    slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
    arrows: false,//左右の矢印なし
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    dots: false,//下部ドットナビゲーションの表示
    pauseOnFocus: false,//フォーカスで一時停止を無効
    pauseOnHover: false,//マウスホバーで一時停止を無効
    pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
});

//スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
$('.slider').on('touchmove', function(event, slick, currentSlide, nextSlide){
$('.slider').slick('slickPlay');
});


//アコーディオンをクリックした時の動作
$('.title').on('click', function() {//タイトル要素をクリックしたら
	var findElm = $(this).next(".box");//直後のアコーディオンを行うエリアを取得し
	$(findElm).slideToggle();//アコーディオンの上下動作
    
	if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
		$(this).removeClass('close');//クラス名を除去し
	}else{//それ以外は
		$(this).addClass('close');//クラス名closeを付与
	}
});

//ページが読み込まれた際にopenクラスをつけ、openがついていたら開く動作※不必要なら下記全て削除
$(window).on('load', function(){
    // $('.accordion-area li:first-of-type section').addClass("open"); //accordion-areaのはじめのliにあるsectionにopenクラスを追加
	$(".open").each(function(index, element){	//openクラスを取得
		var Title =$(element).children('.title');	//openクラスの子要素のtitleクラスを取得
		$(Title).addClass('close');				//タイトルにクラス名closeを付与し
		var Box =$(element).children('.box');	//openクラスの子要素boxクラスを取得
		$(Box).slideDown(500);					//アコーディオンを開く
	});
});


$(".openbtn1").click(function () {
    $(this).toggleClass('active');
    $(".humbergerIcon-menu").toggleClass('active');
	$(".header-wrap").toggleClass('active');
});
$(".humbergerIcon-li a").click(function () {
    $(".humbergerIcon-menu").toggleClass('active');
    $('.openbtn1').toggleClass('active');
	$(".header-wrap").toggleClass('active');
});

// //スクロールした際の動きを関数でまとめる
// function PageTopAnime() {
// 	var scroll = $(window).scrollTop();
// 	if (scroll >= 100){//上から200pxスクロールしたら
// 		$('#page-top').removeClass('DownMove');//#page-topについているDownMoveというクラス名を除く
// 		$('#page-top').addClass('UpMove');//#page-topについているUpMoveというクラス名を付与
// 	}else{
// 		if($('#page-top').hasClass('UpMove')){//すでに#page-topにUpMoveというクラス名がついていたら
// 			$('#page-top').removeClass('UpMove');//UpMoveというクラス名を除き
// 			$('#page-top').addClass('DownMove');//DownMoveというクラス名を#page-topに付与
// 		}
// 	}
// }

画面をふわっと浮かび上がる
// function Fadein() {
//     $('section').each(function(){
//         var top = $(this).offset().top;//要素の高さ
//         var scroll = $(window).scrollTop();//スクロール位置
//         var height = $(window).height();//windowの高さ
//         if (scroll > top ){
//             $(this).addClass('scrollin');
//         }
//     });
// }

// 画面をスクロールをしたら動かしたい場合の記述
// $(window).scroll(function () {
//     Fadein();
	// PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
// });

$(function(){
    $(window).scroll(function (){
        $('section').each(function(){
            var top = $(this).offset().top;//要素の高さ
            var scroll = $(window).scrollTop();//スクロール位置
            var height = $(window).height();//windowの高さ
            if (scroll > top - height + 100){
                $(this).addClass('scrollin');
            }
        });
    });
});
