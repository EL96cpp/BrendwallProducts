$(document).ready(function () {

    console.log("Hello!");

    $(document).on("click", "#add_product_btn", function (e) {

        console.log("Click add!");

        e.preventDefault();

        var remove_url = $(this).attr("href");

        console.log(remove_url);

        // $.ajax({
            
        //     type: "POST",
        //     url: remove_url,
        //     data: {
        //         cart_id: cart_id,
        //         csrfmiddlewaretoken: $("[name=csrfmiddlewaretoken]").val(),
        //     },

        //     success: function (data) {

        //         var cartItemsContainer = $("#cart-items-container");
        //         cartItemsContainer.html(data.cart_items_html);

        //         cart_count -= data.quantity_deleted;
        //         goods_in_cart_count.text(cart_count);


        //         var cart_items_container = $("#cart-items-container");
        //         cart_items_container.html(data.cart_items_html);

        //         var orderConfirmationWrapper = $("#order_confirmation_wrapper");
        //         orderConfirmationWrapper.html(data.cart_items_html);
                

        //         if (data.redirect) {

        //             window.location = "/";

        //         }

        //     },

        //     error: function (data) {
        //         console.log("Ошибка при удалении корзины");
        //     }
            
        // });

    });



});