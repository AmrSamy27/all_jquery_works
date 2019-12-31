/* 1 */ 
let H1 = document.createElement('h1');
$('body').append(H1);
        $('h1').html('jQuery');

/* 2 */ 
let p = document.createElement('p');
        $("body").append(p);
        $('p').attr('id','welcome');
        $('#welcome').html("java script");

        /* 3 */ 
        $("#welcome").html("jQuery");
       
        /*  4  */
        let classElement1 = document.createElement('p');
        let classElement2 = document.createElement('p');

        $("body").append(classElement1);
        $('body').append(classElement2);
        $(classElement1).addClass('my-class');
        $(classElement2).addClass('my-class');
        $('.my-class:eq(0)').append('first');
        $('.my-class:eq(1)').append('second');

        /*  4  */
        let divParent=document.createElement('div');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');
        let p5 = document.createElement('p');

            $(divParent).append(p1).append(p2).append(p3).append(p4).append(p5);
            $('body').append(divParent);
        
console.log($('div p').length);
             /*  5  */
            $("div p").each(function(index){
  
                $(this).html(`${index+1}-This is a paragraph`)
                });
             
//             /*  6  */

            $("ul li:first-child").css('background-color','red');



            $('a[href$=".org"]').attr("href", 'http://www.yahoo.com');