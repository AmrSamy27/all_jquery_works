$("#getData").on('click',function(ev){
    $('#dataSet').empty();
    $.ajax({
        url:'data.xml',
        success:function(data){
               let cds=$(data).find('CD');
               $('#dataSet').append("<tr><th>TITLE</th><th>ARTIST</th><th>PRICE</th></tr>");
               cds.each(function(){
                let t=$(this).children("TITLE").text(); //this=>cds
                let a=$(this).children("ARTIST").text();
                let p=$(this).children("PRICE").text();
                
                if(p>10){
                    $('#dataSet').append(`<tr class="red"><td>${t}</td><td>${a}</td><td id="pr">${p}</td></tr>`);

                // $('tr').addClass('red');  
                // ev.stopPropagation();
            }
            else{
                $('#dataSet').append(`<tr class="blue"><td>${t}</td><td>${a}</td><td id="pr">${p}</td></tr>`);

                // $('tr').addClass('blue'); ; 
                // ev.stopPropagation();
            }
            });
        },
        error:function(){
         console.log('error');
        }
    })
});

    $("#filter").on('change',function(ev){
        $('#dataSet').empty();
        $.ajax({
            url:'data.xml',
            success:function(data){
                   let cds=$(data).find('CD');
                   $('#dataSet').append("<tr><th>TITLE</th><th>ARTIST</th><th>PRICE</th></tr>");
                   cds.each(function(){
                       
                    let t=$(this).children("TITLE").text(); //this=>cds
                    let a=$(this).children("ARTIST").text();
                    let p=$(this).children("PRICE").text();
                    let value=$('#filter').children("option:selected").val();
                if(value == 'more'){
                    if(p>10){
                    $('#dataSet').append(`<tr><td>${t}</td><td>${a}</td><td id="pr">${p}</td></tr>`);
                    $('tr td').css('background-color','red');  
                }
            }else if(value == 'less'){
                if(p<10)
                $('#dataSet').append(`<tr><td>${t}</td><td>${a}</td><td id="pr">${p}</td></tr>`);
                $('tr td').css('background-color','blue');  
                
            }
                
                });
            },
            error:function(){
             console.log('error');
            }
        })
    });


    $("#search").on('keyup',function(ev){
        $('#dataSet').empty();
        $.ajax({
            url:'data.xml',
            success:function(data){
                   let cds=$(data).find('CD');
                   $('#dataSet').append("<tr><th>TITLE</th><th>ARTIST</th><th>PRICE</th></tr>");
                   cds.each(function(){
                       
                    let t=$(this).children("TITLE").text(); //this=>cds
                    let a=$(this).children("ARTIST").text();
                    let p=$(this).children("PRICE").text();
                    let value=$('#search').val().toLocaleLowerCase();
                   let lowTitle=t.toLocaleLowerCase();
                    
                       
                        if(lowTitle.startsWith(value)){
                    
                    $('#dataSet').append(`<tr><td>${t}</td><td>${a}</td><td id="pr">${p}</td></tr>`);
                    $('tr td').css('background-color','red');  
                
                
                        
                    }
                
                
                });
            },
            error:function(){
             console.log('error');
            }
        })
    });

