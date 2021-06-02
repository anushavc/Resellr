


document.getElementById("product_cat").innerHTML=localStorage.getItem("product_cat");
document.getElementById("product_date").innerHTML=localStorage.getItem("product_date");
document.getElementById("product_description").innerHTML=localStorage.getItem("product_description");
document.getElementById("product_title").innerHTML=localStorage.getItem("product_title");
document.getElementById("product_img").src=localStorage.getItem("product_image");
document.getElementById("product_price").innerHTML=localStorage.getItem("product_price");
document.getElementById("product_id").innerHTML=localStorage.getItem("product_id");

$("#deleteproduct").click(function() {
   
    $.ajax({
        type: "DELETE",
        headers: {
            "Authorization":localStorage.getItem("token")
            },
        url: "https://resell-server.herokuapp.com/api/products/"+localStorage.getItem("product_id"),
        crossdomain:true,
        dataType: "json"
})
      
  });


  $("#backproduct").click(function() {
      console.log("hello")
    location.href = "dashboard.html";
    localStorage.removeItem("product_cat");
    localStorage.removeItem("product_date");
    localStorage.removeItem("product_description");
    localStorage.removeItem("product_title");
    localStorage.removeItem("product_img");
    localStorage.removeItem("product_price");
    localStorage.removeItem("product_id");
      
  });