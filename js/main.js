
function search(){
    localStorage.setItem("pesquisado", $("#campoPesquisa").val());
    if(HOMOLOG === false){
        window.location = document.location.origin+"/loja/resultados.php"
    }else{
        window.location = document.location.origin+"/clientes/sgaria/loja/resultados.php"
    }

}
$("#campoPesquisa").on('keyup', function (e) {
    if (e.keyCode === 13) {
        search();
    }
});
cartCont();
function cartCont() {
    let cartArray = []
    if (JSON.parse(localStorage.getItem("carrinhoToShow")) === null) {
        cartArray = [];
    } else {
        cartArray = JSON.parse(localStorage.getItem("carrinhoToShow"));
    }
    if (cartArray.length > 0){
        $("#cartCont").html(cartArray.length);
        $("#cartCont").show();
    }else{
        $("#cartCont").html(0);
        $("#cartCont").hide();
    }
}
function updateCartCont() {
    cartCont();
}