$.ajax({
    type: "GET",
    url: "https://resell-server.herokuapp.com/api/users/profile/"+localStorage.getItem("_id"),
    crossdomain:true,
    dataType: "json",
    success: function (data) {
        document.getElementById("username").innerHTML = data.name;
        document.getElementById("useremail").innerHTML = data.email;
        document.getElementById("userstream").innerHTML = data.stream;
        document.getElementById("userhostel").innerHTML = data.hostel;
     
    }
 
}
);
  
$("button").click(function() {
    location.href = "updateprofile.html";
});

$("#deleteprofile").click(function() {
    $.ajax({
        type: "DELETE",
        headers: {
            "Authorization":localStorage.getItem("token")
            },
        url: "https://resell-server.herokuapp.com/api/users/"+localStorage.getItem("_id"),
        crossdomain:true,
        dataType: "json"
})
      
  });