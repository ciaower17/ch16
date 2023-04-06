var regex = new RegExp("[a-zA-Z]");
var regex1 = new RegExp("[1-9]");

$(".input1").on('input', function () {
    $('.name').text($(this).val());
});

$(".input2").on('input', function () {
    var value = $(this).val();
    if (value.length === 0) {
        $('.number').text("0000 0000 0000 0000");
    } else if (value.length > 16) {

    } else {
        var chunks = value.match(/.{1,4}/g);
        var formattedValue = chunks.join(" ");
        $('.number').text(formattedValue);
    }
});

$(".input3").on('input', function () {
    $('.scadenza1').text($(this).val());
});

$(".input4").on('input', function () {
    $('.scadenza2').text($(this).val());
});

$(".input5").on('input', function () {
    $('.zero').text($(this).val());
});

$(".confirm").click(function () {
    if (regex1.test($(".input1").val()) || $(".input1").val()<=0) {
        $(".input1").css("border-color", "red");
        if (regex.test($(".input2").val()) || $(".input2").val()<16) {
            $(".input2").css("border-color", "red");
        }
        if (regex.test($(".input3").val()) || $(".input3").val()<2) {
            $(".input3").css("border-color", "red");
        }
        if (regex.test($(".input4").val()) || $(".input4").val()<2) {
            $(".input4").css("border-color", "red");
        }
        if (regex.test($(".input5").val()) || $(".input5").val()<3) {
            $(".input5").css("border-color", "red");
        }
    } 
    else if (regex.test($(".input2").val()) || $(".input2").val()<16) {
        $(".input2").css("border-color", "red");
        if (regex.test($(".input3").val()) || $(".input3").val()<2) {
            $(".input3").css("border-color", "red");
        }
        if (regex.test($(".input4").val()) || $(".input4").val()<2) {
            $(".input4").css("border-color", "red");
        }
        if (regex.test($(".input5").val()) || $(".input5").val()<3) {
            $(".input5").css("border-color", "red");
        }
    }
    else if (regex.test($(".input3").val()) || $(".input3").val()<2) {
        $(".input3").css("border-color", "red");
        if (regex.test($(".input4").val()) || $(".input4").val()<2) {
            $(".input4").css("border-color", "red");
        }
        if (regex.test($(".input5").val()) || $(".input5").val()<3) {
            $(".input5").css("border-color", "red");
        }
    }
    else if (regex.test($(".input4").val()) || $(".input4").val()<2) {
        $(".input4").css("border-color", "red");
        if (regex.test($(".input5").val()) || $(".input5").val()<3) {
            $(".input5").css("border-color", "red");
        }
    }
    else if (regex.test($(".input5").val()) || $(".input5").val()<3) {
        $(".input5").css("border-color", "red");
    }
    else{
        $(".right").css("visibility","hidden");
        $(".end").css("visibility","visible")
    }

});