$(document).ready(function(){

        //serialize form data
        var url = 'login=' + localStorage.getItem("user");

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
            url: "http://assignment.door2doorhub.in/api/get_user_data.php",
            data: test,
            ContentType:"application/json",

            success:function(data){
                console.log(data);

                document.getElementById('name').innerHTML=data.name;
                document.getElementById('email').innerHTML=data.user;
                document.getElementById('address').innerHTML=data.address;
            },
            error:function(){
            }

        });

        $('#logout').click(function(e){
            e.preventDefault();

            localStorage.setItem("user","");
                   window.location.href = "index.html";
    
    
           
    
        });
    });




