// Brilho nas imagens do Header
$(document).ready(function(){
 
    $("#img1").fadeTo(1000,0.7);

    $("#img1").mouseenter(function(){

        $("#img1").fadeTo(1000,2);

    }).mouseleave(function(){

        $("#img1").fadeTo(1000,0.7);

    }); 

});


// Função para o botão das outras opções no index
$(document).ready(function(){
    $(".others-option").hide();
    $(".btn-option").click(function(){
        $(".others-option").show(1000);
    });
    // $(".btn-option").click(function(){
    //     $(".others-option").hide(1000);
    // })
});