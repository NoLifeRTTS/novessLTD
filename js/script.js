$(document).ready(function() {
    $('.section1__burger').click(function() {
        $('.section1__menu-mob').css('right', '0');

    });
    $('.section1__close').click(function() {
        $('.section1__menu-mob').css('right', '-160px');
    });
    $('.modal__close').click(function() {
        $('.modal').fadeOut();
        $('.modal__bg').fadeOut();
    });
    $('.modal__bg').click(function() {
        $('.modal').fadeOut();
        $('.modal__bg').fadeOut();
    });
});

$('.btn-form').click(function(e) {
    e.preventDefault();
    $('.inp1').css('border-color', '#ffffff');
    $('.inp2').css('border-color', '#ffffff');
    $('.inp3').css('border-color', '#ffffff');
    let form = $(this),
    url = "http://html.m2corp.ru/others/alexshev/2022/May/NovessLTD/send.php",
    name = $('.name-inp').val(),
    email = $('.email-inp').val(),
    phone = $('.phone-inp').val();

    let flag1 = false,
    flag2 = false,
    flag3 = false;
    
    if (name == "" || name == null || name == undefined) {
        flag1 = true;
        $('.inp1').css('border-color', '#C13535');
    }
    if (email == "" || email == null || email == undefined) {
        flag2 = true;
        $('.inp2').css('border-color', '#C13535');
    }
    if (phone == "" || phone == null || phone == undefined) {
        flag3 = true;
        $('.inp3').css('border-color', '#C13535');
    }

    let inputNameNumber = document.querySelectorAll('.name-inp');
    let inputPhoneNumber = document.querySelectorAll('.phone-inp');
    let inputEmailNumber = document.querySelectorAll('.email-inp');

    if (flag1 || flag2 || flag3) {      
        
    }
    else {
        $('.inp1').css('border-color', '#ffffff');
        $('.inp2').css('border-color', '#ffffff');
        $('.inp3').css('border-color', '#ffffff');
        $.ajax({
            type: 'post',
            url: url,
            data: {
                name: name,
                email: email,
                phone: phone,
            },
            success: function(data) {

            $('.btn-form').prop("disabled", true);
            
            inputNameNumber.forEach((input) => {
                input.value = '';
            });
            inputEmailNumber.forEach((input) => {
                input.value = '';
            });
            inputPhoneNumber.forEach((input) => {
                input.value = '';
            }); 
            console.log(data);
            $('.modal__bg').fadeIn();
            $('.modal').fadeIn();
            },
            error: function(error) {
                $('.inp1').css('border-color', '#C13535');
                $('.inp2').css('border-color', '#C13535');
                $('.inp3').css('border-color', '#C13535');
            }
        });
    }
})

$('.btn-contact').click(function(e) {
    e.preventDefault();
    let id = $('.section3__right');
    let top = $(id).offset().top;
    $("*").animate({scrollTop:top},1000);
});