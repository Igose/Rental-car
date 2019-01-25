var estimate = {

    0: "100km",
    1: "300km",
    2: "500km or less",
    3: "500km or more",

};

var time = {

    0: "1",
    1: "2",
    2: "3",
    3: "4",
    4: "5",
    5: "6",
    6: "7",
    7: "8",
    8: "9",
    9: "10",

}

var type = {
    'Type' : {
        'Small Car' : '1.0',
        'Van' : '1.2',
        'Minibus' : '1.7'
    }
};

$(document).ready(function() {

    $("#total").val("");

    



    $('.Duration').on('click',function(event) {
        var id = $(this).attr('id');

        $('.Duration').removeClass('selected-Duration');
        $(this).addClass('selected-Duration');
        $(".Duration").removeClass("active-Duration");
        $(this).addClass("active-Duration");

        $('#Duration').val(id);

        calcualtePrice()
    });

    $('.Type').on('click',function(event) {
        var id = $(this).attr('id');

        $('.Type').removeClass('selected-Type');
        $(this).addClass('selected-Type');
        $(".Type").removeClass("active-Type");
        $(this).addClass("active-Type");
        $('#Type').val(id);

        calcualtePrice()
    });

    update();
    calcualtePrice();
});
        


function calcualtePrice(val){
    
    if(undefined === val)
        val = $('0').val();

    var Duration = $('#Duration').val();
    var Type = type[Duration][$('#Type').val()];

    var totalPrice = time[val]*Type;

    $("#total").val(totalPrice.toFixed(2));
}