


$.ajax({
    type: "GET",
    url: "https://resell-server.herokuapp.com/api/products/tags/books",
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
      <button id="buttonid" id=${value._id}  onclick="location.href='productview.html';" type="submit">View More</button>
    </div>
  </div>
  `;
  console.log(count)
  if(count%3==0)
  {
    options +=`<br><br><br>`
  }
console.log(options)
  count++;
  
      }
      );
      $("#model2").append(options);

      
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





$.ajax({
  type: "GET",
  url: "https://resell-server.herokuapp.com/api/products/tags/cycle",
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
    <button id="buttonid" id=${value._id}  onclick="location.href='productview.html';" type="submit">View More</button>
  </div>
</div>
`;
console.log(count)
if(count%3==0)
{
  options +=`<br><br><br>`
}
console.log(options)
count++;

    }
    );
    $("#model3").append(options);

    
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
  




$.ajax({
  type: "GET",
  url: "https://resell-server.herokuapp.com/api/products/tags/stationery",
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
    <button id="buttonid" id=${value._id}  onclick="location.href='productview.html';" type="submit">View More</button>
  </div>
</div>
`;
console.log(count)
if(count%3==0)
{
  options +=`<br><br><br>`
}
console.log(options)
count++;

    }
    );
    $("#model4").append(options);

    
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