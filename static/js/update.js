
$("#updateprofile").click(function() {
    location.href = "dashboard.html";
    var email = document.getElementById("up_stream").value;
  var password = document.getElementById("up_hostel").value;
  $.ajax({
    type: "PUT",
    url: "https://resell-server.herokuapp.com/api/users/profile",
    headers: { 
      Authorization: `Bearer ${localStorage.getItem("token")}`, 
    },
    crossdomain:true,
    data:{
        "stream": email,
        "hostel": password
    },
 
}
);
      
  });


  $("#updateproduct").click(function() {
    location.href = "dashboard.html";
    var email = document.getElementById("up_stream").value;
  var password = document.getElementById("up_hostel").value;
  $.ajax({
    type: "PUT",
    url: "https://resell-server.herokuapp.com/api/users/profile",
    headers: { 
      Authorization: `Bearer ${localStorage.getItem("token")}`, 
    },
    crossdomain:true,
    data:{
        "stream": email,
        "hostel": password
    },
 
}
);
      
  });