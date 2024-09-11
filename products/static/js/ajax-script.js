$(document).ready(function () {

    const form = document.getElementById('add_product_form')

    $(document).on("click", "#add_product_btn", function (e) {

        const product_name = document.getElementById('id_name');
        const product_description = document.getElementById('id_description');
        const product_price = document.getElementById('id_price');

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

                var productList = $("#products_list");
                productList.html(data.products_html);

                var message_span = $("#message_span");
                message_span.text(data.message);
                var message_wrapper = $("#message_wrapper");
                message_wrapper.show();
                message_wrapper.delay(2000).fadeOut();


            },

            error: function (data) {

                console.log(data.responseJSON.message);
                var message_span = $("#message_span");
                message_span.text(data.responseJSON.message);
                var message_wrapper = $("#message_wrapper");
                message_wrapper.show();
                message_wrapper.delay(2000).fadeOut();

            }
            
        });

    });



});