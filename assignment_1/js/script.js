$(document).ready(function(){
    $('#postMessage').click(function(e){
        e.preventDefault();

        login=document.getElementById('email').value;
        password=document.getElementById('password').value;
        name2=document.getElementById('name').value;
        address=document.getElementById('address').value;

        if(login===''||password===''||name2===''||address===''){
            alert('login or password or name or address empty');
        }
        else if(password.length<6){
            alert('password short');
        }
        else{
        //serialize form data
        var url = $('form').serialize();
        var url=url.replace('%40','@');

        var url=url.replace('%20',' ');

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
            url: "http://assignment.door2doorhub.in/api/create.php",
            data: test,
            ContentType:"application/json",

            success:function(){
                console.log(this.data);
                alert('successfully register');
                window.location.href = "index.html";
            },
            error:function(){
                alert('Could not be register');
            }

        });
    }
    });

    $('#getMessage').click(function(e){
        e.preventDefault();

        login=document.getElementById('login').value;
        password=document.getElementById('password').value;

        if(login===''||password===''){
            alert('login or password empty');
        }
        else if(password.length<6){
            alert('password short');
        }
        else{
        


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
            url: "http://assignment.door2doorhub.in/api/verify.php",
            dataType: 'text',
            data: test,
            ContentType:"application/json",

            success:function(data){
               data=JSON.parse(data);
               if(data.message==='true'){
                   console.log('true');
                   localStorage.setItem("user",data.user);
                   window.location.href = "table.html";
               }else{
               alert('login failed');
               }
               
            },
            error:function(xhr, textStatus, errorThrown,data){
                console.log(errorThrown);
                console.log(xhr.responseText);
                alert('login failed');
            }

        });
    }
    });

    $('#postUpdate').click(function(e){
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
            url: "http://localhost/assign_2/api/status_update.php",
            data: test,
            ContentType:"application/json",

            success:function(data){
                console.log(data);
                alert('successfully register');
            },
            error:function(){
                alert('Could not be register');
            }

        });
    });

    
});


