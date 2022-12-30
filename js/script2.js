$(function(){
    //한줄주석, /* 여러줄 주석 */
    //li기준으로 메뉴 하나씩 펼쳐지도록
/*     
    $('.nav>ul>li').mouseenter(function(){//마우스가 올려졌을 때
        $(this).find('.sub').stop().slideDown(500);
    });
    $('.nav>ul>li').mouseleave(function(){//마우스가 벗어났을 때
        $(this).find('.sub').stop().slideUp(500);
    });
 */
    //메인메뉴에 마우스가 올려졌을 때 ul전체가 펼쳐지도록
    $('.nav>ul>li').mouseenter(function(){//마우스가 올려졌을 때
        $('.nav>ul>li>ul').stop().slideDown(500); //0.5초
    });
    $('.nav>ul>li').mouseleave(function(){//마우스가 벗어났을 때
        $('.nav>ul>li>ul').stop().slideUp(500);
    });


    //슬라이드 배너 : 왼쪽에서 오른쪽으로
    var banner = $('#banner li');
    var current = 0; /* 초기화. 현재 보여지는 상태의 순번. 순번은 인덱스번호로 표시함. */

    setInterval(function(){//배너 무한 반복
        var prev = banner.eq(current);//현재 보여지는 배너를 prev라고 하고

        move(prev,0,'100%');

        current++; //하나씩 증가

        //조건문을 이용해 인덱스 갯수가 끝까지 가면 다시 초기화 0이 보여지도록

        if(current==banner.size()){current=0}

        var next = banner.eq(current);
        move(next,'-100%',0);

    },2000); //2초동안반복

    function move(tg,start,end){
        tg.css('left',start).stop().animate({left:end},300);
    }

    //탭메뉴
    var tab = $('.tab>li'); //공지사항,갤러리 메뉴
    var content = $('.tab_con>div');//탭메뉴의 내용영역

    content.hide().eq(0).show();
    //컨텐츠영역은 초기에 모두 감추고 순번 0번만 보여지도록


    tab.click(function(e){
        e.preventDefault();//a링크의 원래의 링크 속성 없애기

        var tg = $(this); //탭메뉴에 클릭되어진 대상
        var i = tg.index();//인덱스는 순번을 의미함. 선택되어진 순번

        tab.removeClass('active');//활성화된 스타일을 제거
        tg.addClass('active');//클릭한 대상에 스타일 활성화

        content.css('display','none');
        content.eq(i).css('display','block'); //선택되어진 순번의 i의 컨텐츠가 보여지도록

    });

    //팝업
    $('#contents .popup').click(function(){
        $('.pop').css('display','block');
    });

    $('.pop button').click(function(){
        $('.pop').css('display','none');
    });














});