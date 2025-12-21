
$('.nav-link.search').click(function(){
    $('.search-box').toggle('blind');
});

$('.close-search').click(function() {
    $('.search-box').toggle('blind');
});
$('#btn-filter').click(function(){
    $('.sidebar').toggle('slide');
})
$('#sidebar-close').click(function() {
    $('.sidebar').toggle('slide');
});
$('#btn-grid').click(function(){
    $('.col-lg-4').css({'width':'33.33%'})
    $('.pr-item-2').css({'flex-direction':'column','border-bottom':'none', 'padding-bottom':'none'})
    $('.pr-img').css({'margin-bottom':'10px'})
    $('.pr-content').css({'padding-left':'0'})
    $('.pr-price').css({'justify-content':'flex-start'})
    $('.old-price').css({'padding-left':'10px'})
    $('.pr-line').css({'display':'none'})
})
$('#btn-list').click(function(){
    $('.col-lg-4').css({'width':'100%'})
    $('.col-md-6').css({'width':'100%'})
    $('.pr-item-2').css({'flex-direction':'row','border-bottom':'1px solid #d9d9d9', 'padding-bottom':'20px'})
    $('.pr-img').css({'margin-bottom':'0'});
    $('.pr-content').css({'padding-left':'24px',})
    $('.pr-price').css({'justify-content':'flex-start'})
    $('.old-price').css({'padding-left':'0'})
    $('.pr-line').css({'display':'block'})
})

$(window).resize(function(){
    if($(window).width()>=992)
    {
        $('.sidebar').css('display','block');
        $('.btn-cart-delete i').removeClass('fa-xmark')
        $('btn-cart-delete i').addClass('fa-trash');
    }
    else
    {
        $('.sidebar').css('display','none');
        $('btn-cart-delete i').removeClass('fa-trash')
        $('btn-cart-delete i').addClass('fa-xmark');s
    }
})
$("#timer-1").countdown("2025/12/31 23:59:59", function (t) {
    $("#timer-1").html(        
        '<div class="box">' + t.days + '<span> ngày</span></div>'+'<div class="dot">:</div>'
        + '<div class="box">' + t.hours + '<span> giờ</span></div>'+'<div class="dot">:</div>'
        + '<div class="box">' + t.minutes + '<span> phút</span></div>'+'<div class="dot">:</div>'
        + '<div class="box">' + t.seconds + '<span> giây</span></div>'
    );
});
$('#plus').click(function(){
    var soluong=$('#qty').val();
    soluong=parseInt(soluong,10);
    soluong++;
    $('#qty').val(soluong)
})

$('#minus').click(function(){
    var soluong=$('#qty').val();
    soluong=parseInt(soluong,10);
    if(soluong<=1)
    {
        soluong=1
    }
    else
    {
        soluong--;
    }
    $('#qty').val(soluong)
})

$('.show-size-icon').click(function (e) {
    e.preventDefault();
    $('.pr-detail').addClass('show-size');
});

$('#sidebar-close').click(function () {
    $('.pr-detail').removeClass('show-size');
});

$(document).ready(function(){
    $('#feedback').owlCarousel({
            loop: true,
            stagePadding:200,
            margin: 150,
            nav:true,
            responsiveClass: true,
            responsive: {
            0: {
                items: 1,
                stagePadding:0,
                margin: 24,
            },
            600: {
                items: 1,
                stagePadding:0,
                margin: 24,
            },
            1000: {
                items: 1,
            }
            }
        })

        function changecontent()
        {
            if($('#banking').is(':checked'))
            {
                $('.bank-content').show();
                $('.cod-content').hide();
            }
            else
            {
                $('.bank-content').hide();
                $('.cod-content').show();
            }
        }

        changecontent();

        $('input[name="payment"]').on('change', function(){
            changecontent();
        });
    });

var $easyzoom = $('.easyzoom').easyZoom();

		// Setup thumbnails example
		var api1 = $easyzoom.filter('.easyzoom--with-thumbnails').data('easyZoom');

		$('.thumbnails').on('click', 'a', function(e) {
			var $this = $(this);

			e.preventDefault();

			// Use EasyZoom's `swap` method
			api1.swap($this.data('standard'), $this.attr('href'));
            $('.thumbnails-vertical').css({'marign-top':'20px'})
            $('.thumbnails .shadow').hide();

    // Hiện shadow của thumbnail được click
    $this.find('.shadow').show();s
		});

		// Setup toggles example
		var api2 = $easyzoom.filter('.easyzoom--with-toggle').data('easyZoom');

		$('.toggle').on('click', function() {
			var $this = $(this);

			if ($this.data("active") === true) {
				$this.text("Switch on").data("active", false);
				api2.teardown();
			} else {
				$this.text("Switch off").data("active", true);
				api2._init();
			}
		});

