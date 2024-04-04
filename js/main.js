$(function () {
         $('.s2_text').css("transform", "translateX(0px)").css("opacity", "1");


         $(window).scroll(function () {
                  var ws = $(this).scrollTop();

                  if (ws > 30) {
                           $('.s3_text',).css("transform", "translateX(0px)").css("opacity", "1");
                           $('.s1_list_box1').css("transform", "translateX(0px)").css("opacity", "1");
                  }
                  if (ws > 700) {
                           $('.s4_text').css("transform", "translateX(0px)").css("opacity", "1");
                  }
                  if (ws > 1700) {
                           $('.s5_text').css("transform", "translateX(0px)").css("opacity", "1");
                  }
                  if (ws > 2800) {
                           $('.s6_text').css("transform", "translateX(0px)").css("opacity", "1");
                  }
                  if (ws > 4800) {
                           $('.s7_text').css("transform", "translateX(0px)").css("opacity", "1");
                           $('.card_text p').css("transform", "translateX(0px)").css("opacity", "1");
                           $('.card2').css("transform", "translateX(0px)").css("opacity", "1");
                  }
                  if (ws > 6000) {
                           $('.s8_text').css("transform", "translateX(0px)").css("opacity", "1");
                  }
                  if (ws > 7200) {
                           $('.s9_text').css("transform", "translateX(0px)").css("opacity", "1");
                  }
                  if (ws > 8200) {
                           $('.s10_text').css("transform", "translateX(0px)").css("opacity", "1");
                  }
                  if (ws > 9000) {
                           $('.s11_text').css("transform", "translateX(0px)").css("opacity", "1");
                  }
                  if (ws > 9500) {
                           $('.s12_text').css("transform", "translateX(0px)").css("opacity", "1");
                  }
         });
});