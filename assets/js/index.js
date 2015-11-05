/**
 * Created by junpeng.guan on 2015/10/21.
 */
;
(function($){
    //点击图片列表切换图片
    $('.imgList li').off('click')
        .on('click', function(){
            clearTimeout(window.changeImg);
            var $_self = $(this);
            var $_imgBox = $('.imgShow img');
            var _src = $_self.find('img').attr('src');
            $('.imgList li').removeClass('selected');
            $_self.addClass('selected');
            $_imgBox.attr('src', _src);
            timeOutChangeImg();
        });

    timeOutChangeImg();
    //循环切换图片
    function timeOutChangeImg(){
        window.changeImg = setTimeout(function(){
            var $_imgList = $('.imgList li');
            var _index = $('.imgList li.selected').index();
            var _nextIndex = _index + 1;
            if(_nextIndex > 4){
                _nextIndex = 0;
            }
            var _src = $_imgList.eq(_nextIndex).find('img').attr('src');
            $_imgList.removeClass('selected');
            $_imgList.eq(_nextIndex).addClass('selected');
            $('.imgShow img').attr('src', _src);
            timeOutChangeImg();
        }, 5000);
    }


    //登录切换
    $('.btn-login').on('click', function(){
        $('.notLoggedIn').hide();
        $('.loggedIn').show();
    });
})(jQuery);