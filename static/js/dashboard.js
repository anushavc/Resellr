
console.log(localStorage.getItem("_id"))

$.ajax({
    type: "GET",
    url: "https://resell-server.herokuapp.com/api/products/user/"+localStorage.getItem("_id"),
    crossdomain:true,
    dataType: "json",
    success: function (data) {
    console.log(data)
      var options = "";
      var count=0;
      $.each(data, function( key, value ) {
        console.log(value.image)

        options += `<div class="card">
    <img class="card-img-top" src=${value.image} alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{post.title}}</h5>
      <p class="card-text">{{post.description}}</p>
    </div>
    <div class="card-footer">
      <button class="buttonid" id=${value._id} type="submit">View More</button>
    </div>
  </div>
  `;
console.log(options)
  count++;
  
      }
      );
     
      $("#model1").append(options);
      // $("#model").change();

      $(".buttonid").click(function() {
        product_id=document.querySelector('.buttonid').id
        location.href = "personalproductview.html";
        console.log(product_id)
 
        $.ajax({
            type: "GET",
            url: "https://resell-server.herokuapp.com/api/products/"+product_id,
            crossdomain:true,
            dataType: "json",
            success: function (data) {

                localStorage.setItem("product_cat",data.category);
                localStorage.setItem("product_date",data.date);
                localStorage.setItem("product_description",data.description);
                localStorage.setItem("product_title",data.title);
                localStorage.setItem("product_image",data.image);
                localStorage.setItem("product_price",data.price);
                localStorage.setItem("product_id",data._id);
                console.log(data.category);
            }
    })
    });
 
}});



$("#logout").click(function() {
    location.href = "index.html";

});

$("#create").click(function() {
    location.href = "createproduct.html";

});

$("#startshopping").click(function() {
    location.href = "products.html";

});