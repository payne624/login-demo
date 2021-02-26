$(document).ready(function(){

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


    //serialize form data


    //post with ajax
    $.ajax({
        type:"POST",
        url: "http://localhost/final/assignment_2/api/all_user.php",
        ContentType:"application/json",
        data: test,

        success:function(data){
            //console.log(data);
            var html = "";
            data.forEach(function(val) {
                //console.log(val['user']);
                html += "<tr>";
                html += "<td>" + val['user'] +"</td> "+"<td>"+ "<button class='btn btn-primary btn-block' value='req' id="+val['id']+">Add Friend</button>" + "</td> "+ "<br>";
            html += "</tr><br>";
            });
            
                console.log(html);
            //append in message class
            document.getElementsByClassName('message')[0].innerHTML=html;  
        },
        error:function(){
        }

    });

    
});




