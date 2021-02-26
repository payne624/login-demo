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
            url: "http://localhost/final/assignment_1/api/get_user_data.php",
            data: test,
            ContentType:"application/json",

            success:function(data){
                console.log(data);
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




