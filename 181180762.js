
        //slide

        $('.slider').each(function() {
            let $this = $(this);
            let $group = $this.find('.slide_group');
            let $slides = $this.find('.slide');
            let bulletArray = [];
            let currentIndex = 0;
            let timeout;
  
         function move(newIndex) {
             let animateLeft, slideLeft;
    
             tuslagit();
    
             if ($group.is(':animated') || currentIndex === newIndex) {
                 return;
             }
    
         bulletArray[currentIndex].removeClass('active');
         bulletArray[newIndex].addClass('active');
    
        if (newIndex > currentIndex) {
            slideLeft = '100%';
            animateLeft = '-100%';
        } else {
            slideLeft = '-100%';
            animateLeft = '100%';
        }
    
                $slides.eq(newIndex).css({
                    display: 'block',
                    left: slideLeft
                });
                $group.animate({
                    left: animateLeft
                }, function () {
                    $slides.eq(currentIndex).css({
                        display: 'none'
                    });
                    $slides.eq(newIndex).css({
                        left: 0
                    });
                    $group.css({
                        left: 0
                    });
                    currentIndex = newIndex;
                });
            }

            function tuslagit() {
                clearTimeout(timeout);
                timeout = setTimeout(function () {
                    if (currentIndex < ($slides.length - 1)) {
                        move(currentIndex + 1);
                    } else {
                        move(0);
                    }
                }, 4000);//4 sn is enough gazis one too long
            }


            $.each($slides, function (index) {
                var $button = $('<a class="slide_tus">&bull;</a>');

                if (index === currentIndex) {
                    $button.addClass('active');
                }
                $button.on('click', function () {
                    move(index);
                }).appendTo('.slide_buttons');
                bulletArray.push($button);
            });

            tuslagit();
        });



        // slide 2 haberler için (tek fonksiyona indiremedim)

        $('.slider2').each(function() {
            let $this = $(this);
            let $group = $this.find('.slide_group2');
            let $slides = $this.find('.slide2');
            let bulletArray = [];
            let currentIndex = 0;
            let timeout;
  
         function move(newIndex) {
             let animateLeft, slideLeft;
    
             tuslagit();
    
             if ($group.is(':animated') || currentIndex === newIndex) {
                 return;
             }
    
         bulletArray[currentIndex].removeClass('active');
         bulletArray[newIndex].addClass('active');
    
        if (newIndex > currentIndex) {
            slideLeft = '100%';
            animateLeft = '-100%';
        } else {
            slideLeft = '-100%';
            animateLeft = '100%';
        }
    
                $slides.eq(newIndex).css({
                    display: 'block',
                    left: slideLeft
                });
                $group.animate({
                    left: animateLeft
                }, function () {
                    $slides.eq(currentIndex).css({
                        display: 'none'
                    });
                    $slides.eq(newIndex).css({
                        left: 0
                    });
                    $group.css({
                        left: 0
                    });
                    currentIndex = newIndex;
                });
            }

            function tuslagit() {
                clearTimeout(timeout);
                timeout = setTimeout(function () {
                    if (currentIndex < ($slides.length - 1)) {
                        move(currentIndex + 1);
                    } else {
                        move(0);
                    }
                }, 3000);//4 sn is enough gazis one too long
            }


            $.each($slides, function (index) {
                var $button = $('<a class="slide_tus2">&bull;</a>');

                if (index === currentIndex) {
                    $button.addClass('active');
                }
                $button.on('click', function () {
                    move(index);
                }).appendTo('.slide_buttons2');
                bulletArray.push($button);
            });

            tuslagit();
        });
