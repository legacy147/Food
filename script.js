$(document).ready(function () {
    $.ajax({
        type: "get",
        url: "https://fakestoreapi.com/products?limit=8",
        dataType: "json",
        success: function (response) {
            console.log(response)
            $.each(response, function(index, product){
                let eachproduct = `
                   <article>
                        <img src="${product.image}" alt="">
                        <p>${product.title}</p>
                        <div>
                            <p>${product.price}</p>
                            <button>add to cart</button>
                        </div>
                    </article>`

                    $(".article").append(eachproduct)
            })
        },
        error:function(err){
            console.log(err);
        }
    });
});