$(document).ready(function () {

    const form = document.getElementById('add_product_form');
    var productList = $("#products_list");
    var message_span = $("#message_span");
    var message_wrapper = $("#message_wrapper");
    message_wrapper.hide();

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

                productList.html(data.products_html);
                message_span.text(data.message);
                message_wrapper.show();
                message_wrapper.delay(2000).fadeOut();


            },

            error: function (data) {

                message_span.text(data.responseJSON.message);
                message_wrapper.show();
                message_wrapper.delay(2000).fadeOut();

            }
            
        });

    });



});