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


    //슬라이드 배너
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
        tg.css('top',start).stop().animate({top:end},300);
    }

















});