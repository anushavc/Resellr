$("button").click(function() {
    location.href = "dashboard.html";
    var email = document.getElementById("exampleInputEmail1").value;
  var password = document.getElementById("exampleInputPassword1").value;
  $.ajax({
    type: "POST",
    url: "https://resell-server.herokuapp.com/api/users/login",
    crossdomain:true,
    data:{
        "email": email,
        "password": password
    },
    success: function (data) {
        localStorage.setItem("email",data.email);
        localStorage.setItem("name",data.name);
        localStorage.setItem("token",data.token);
        localStorage.setItem("_id",data._id);
        console.log(localStorage.getItem("_id"))
    }
 
}
);
      
  });

