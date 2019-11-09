self.getProdutos = function (event) {
    var request = new XMLHttpRequest();
    request.open('GET', "https://sgaria.intelliway.com.br:3022/getProdutos?chave=" + localStorage.getItem("pesquisado"),false)
    request.responseType = 'json';
    request.send();
    request.onload = function () {
        $("#loading").fadeOut();
        for (let item in request.response) {
            var price = request.response[item]["product_price"];
            var img = request.response[item]["image_link"];
            var productLink = request.response[item]["product_link"];
            console.log("https://sgaria.intelliway.com.br:3022/getImagens?url=" + productLink)
            var description = "";

            var request2 = new XMLHttpRequest();
            request2.open('GET', "https://sgaria.intelliway.com.br:3022/getImagens?url=" + productLink, false);
            request2.responseType = 'json';
            request2.send();
            request2.onload = function () {
                console.log(request2.response);
                if (img === "//img.alicdn.com/tfs/TB1S_7kkY5YBuNjSspoXXbeNFXa-700-700.jpg_350x350.jpg") {
                    console.log("tentei trocar por:");
                    console.log(request2.response["image_link"]);
                    img = request2.response["image_link"];
                }
            }
            price = price.substring(price.indexOf("-") + 1);
            // console.log(request.response)
            $("#pai").append("" +
                "<div class=\"col-4\">\n" +
                "    <img src=\"" + img + "\" alt=\"\">\n" +
                "    <h4>\n" + request.response[item]["product_name"] + "</h4>\n" +
                "    <p class=\"vendedor\">\n" +
                "       Vendedor: " + request.response[item]["seller_name"] +
                "    </p>\n" +
                "    <span class=\"preco\">US$ \n" +
                price +
                "    </span>\n" +
                "    <button class=\"botao-adicionar\" onclick=\"addItemToCart(" + item + ") \">\n" +
                "        adicionar ao carrinho\n" +
                "    </button>\n" +
                "    <a href=\"checkout.php\">\n" +
                "        <div class=\"botao-finalizar text-center\">\n" +
                "            finalizar solicitação\n" +
                "        </div>\n" +
                "     </a>\n" +
                "</div>")
        }
    }
}