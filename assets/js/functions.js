$(document).ready(function() {
    // caseBlock内の画像切り替え機能
    $('.caseBlock .selectItem').on('click', function() {
        const index = $(this).index();
        
        // selectImg内の画像のactiveクラスを切り替え
        $('.caseBlock .selectImg img').removeClass('active');
        $('.caseBlock .selectImg img').eq(index).addClass('active');
        
        // selectItemのactiveクラスを切り替え
        $('.caseBlock .selectItem').removeClass('active');
        $(this).addClass('active');
    });

    // slickスライダーの初期化
    if ($('.sliderItem-wrap').length > 0) {
        console.log('Slick slider found, initializing...');
        
        $('.sliderItem-wrap').slick({
            dots: true,           // マーカー（ドット）を表示
            infinite: true,        // ループする
            speed: 300,           // スライドの速度
            slidesToShow: 3,      // 一度に表示するスライド数
            slidesToScroll: 1,    // 一度にスライドする数
            arrows: true,         // 矢印ボタンを表示
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        centerMode: true,
                        centerPadding: '0px',
                        slidesToScroll: 1
                    }
                }
            ]
        });
        
        console.log('Slick slider initialized successfully');
    } else {
        console.log('Slick slider element not found');
    }
});
