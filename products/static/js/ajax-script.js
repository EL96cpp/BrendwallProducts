$(document).ready(function () {

    console.log("Hello!");

    const form = document.getElementById('add_product_form')

    $(document).on("click", "#add_product_btn", function (e) {

        console.log("Click add!");

        const product_name = document.getElementById('id_name');
        const product_description = document.getElementById('id_description');
        const product_price = document.getElementById('id_price');
        
        console.log(product_name.value, product_description.value, product_price.value);

        e.preventDefault();

        var create_product_url = $(this).attr("href");

        $.ajax({
            
            type: "POST",
            url: create_product_url,
            data: {
                product_name: product_name.value,
                product_description: product_description.value,
                product_price: product_price.value,
                csrfmiddlewaretoken: $("[name=csrfmiddlewaretoken]").val(),
            },

            success: function (data) {

                console.log("New product added!");

                if (data.redirect) {

                    window.location = "/";

                }

            },

            error: function (data) {
                console.log("Error");
            }
            
        });

    });



});