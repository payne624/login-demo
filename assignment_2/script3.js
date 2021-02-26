$(document).ready(function(){

    $('table').on('click', 'button', function(e){
        e.preventDefault();

        var id=$(this).attr('id');

        user=parseInt(localStorage.getItem("id"));
        user_2=parseInt(id);
        if(user<user_2)
            var data='user_one_id='+user+'&&user_two_id='+id+'&&action='+user;
        else
            var data='user_one_id='+id+'&&user_two_id='+user+'&&action='+user;
        //serialize form data
        console.log($(this).attr('value'));
        if($(this).attr('value')==='req'){
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
            url: "http://localhost/assign_2/api/send_requests.php",
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
    }else{
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
            url: "http://localhost/assign_2/api/accept_requests.php",
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

    }
       
    });
});




