$(document).ready(function(){


        //serialize form data


        //post with ajax
        var data='user=1';
        //serialize form data
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
        var test = getUrlVars(data);

        //post with ajax
        $.ajax({
            type:"POST",
            url: "http://localhost/assign_2/api/get_status.php",
            data: test,
            ContentType:"application/json",

            success:function(data){
                console.log(data);
                
            },
            error:function(qXHR, textStatus, errorThrown){
                console.log(errorThrown);
                console.log(this.data);
                console.log(typeof(this.data));
                alert('Could not be register');
            }

        });

        
    });




