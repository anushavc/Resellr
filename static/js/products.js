


$.ajax({
    type: "GET",
    url: "https://resell-server.herokuapp.com/api/products",
    crossdomain:true,
    dataType: "json",
    success: function (data) {
      console.log(data.products)
      var options = "";
      var count=0;
      $.each(data.products, function( key, value ) {
        options += `<div class="card col-md-3">
    <img class="card-img-top" style="
      display: block;
      max-width: 100%;
      height: auto;"
    src=${value.image} alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${value.title}</h5>
      <p class="card-text">${value.description}</p>
      <p class="card-text">Price: ${value.price}</p>
    </div>
    <div class="card-footer">
      <button style="background-color:#ACD3E5" class="buttonid" id=${value._id} type="submit">View More</button>
    </div>
  </div>
  `;

  if(count%3==0)
  {
    options +=`<br>`
  }
  count++;
  
      }
      );
      $("#model").append(options);

      
      $(".buttonid").click(function() {
        product_id=document.querySelector('.buttonid').id
        location.href = "productview.html";
        console.log(product_id)
 
        $.ajax({
            type: "GET",
            url: "https://resell-server.herokuapp.com/api/products/"+product_id,
            crossdomain:true,
            dataType: "json",
            success: function (data) {
              console.log("Hi")
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
      // $("#model").change();
    }
 
}
);

  
