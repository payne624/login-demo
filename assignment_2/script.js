$(document).ready(function(){
    $('#postMessage').click(function(e){
        e.preventDefault();


        //serialize form data
        var url = $('form').serialize();
        var url=url.replace('%40','@');

        console.log(url);

        //function to turn url to an object
        function getUrlVars(url) {
            var hash;
            var myJson = {};
            var hashes = url.slice(url.indexOf('?') + 1).split('&');
            for (var i = 0; i < hashes.length; i++) {
                hash = hashes[i].split('=');
                myJson[hash[0]] = hash[1];
            }
            return JSON.stringify(myJson);
        }

        //pass serialized data to function
        var test = getUrlVars(url);

        //post with ajax
        $.ajax({
            type:"POST",
            url: "http://localhost/final/assignment_2/api/create.php",
            data: test,
            ContentType:"application/json",

            success:function(){
                console.log(this.data);
                alert('successfully register');
            },
            error:function(){
                alert('Could not be register');
            }

        });
    });

    $('#getMessage').click(function(e){
        e.preventDefault();


        //serialize form data
        var url = $('form').serialize();
        var url=url.replace('%40','@');

        console.log(url);

        //function to turn url to an object
        function getUrlVars(url) {
            var hash;
            var myJson = {};
            var hashes = url.slice(url.indexOf('?') + 1).split('&');
            for (var i = 0; i < hashes.length; i++) {
                hash = hashes[i].split('=');
                myJson[hash[0]] = hash[1];
            }
            return JSON.stringify(myJson);
        }

        //pass serialized data to function
        var test = getUrlVars(url);

        //post with ajax
        $.ajax({
            type:"POST",
            url: "http://localhost/final/assignment_2/api/verify.php",
            dataType: 'text',
            data: test,
            ContentType:"application/json",

            success:function(data){
               data=JSON.parse(data);
               if(data.message==='true'){
                   localStorage.setItem("user",data.user);
                   localStorage.setItem("id",data.id);
                   //console.log(localStorage.getItem('id'));
                   window.location.href = "table.html";
               }
               console.log(data);
               console.log(localStorage.getItem("user"));
               
            },
            error:function(xhr, textStatus, errorThrown,data){
                console.log(errorThrown);
                console.log(xhr.responseText);
            }

        });
    });

    $('#postUpdate').click(function(e){
        e.preventDefault();


        //serialize form data
        var url = $('form').serialize();
        var url=url.replace('%40','@');
        var url=url.replace('%0D%0','');
            url=url + '&&user_id='+localStorage.getItem('user');
        console.log(url);

        //function to turn url to an object
        function getUrlVars(url) {
            var hash;
            var myJson = {};
            var hashes = url.slice(url.indexOf('?') + 1).split('&');
            for (var i = 0; i < hashes.length; i++) {
                hash = hashes[i].split('=');
                myJson[hash[0]] = hash[1];
            }
            return JSON.stringify(myJson);
        }

        //pass serialized data to function
        var test = getUrlVars(url);

        //post with ajax
        $.ajax({
            type:"POST",
            url: "http://localhost/final/assignment_2/api/status_update.php",
            data: test,
            ContentType:"application/json",

            success:function(data){
                console.log(data);
                alert('successfully register');
            },
            error:function(xhr, textStatus, errorThrown,data){
                console.log(errorThrown);
                console.log(xhr.responseText);
            }

        });
    });

    
});


