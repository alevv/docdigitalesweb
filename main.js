$(document).ready(function() {
  AOS.init();

  $("#forma_contacto").submit(function(e) {
    e.preventDefault();
    $.post("https://sistema.docdigitales.com/enviar_correo", $(this).serialize(), function() {
      alert("Se a enviado tu correo")
      $("#forma_contacto input, #forma_contacto textarea").val("")
    });
  });

  $("#forma_api").submit(function(e) {
    e.preventDefault();
    $.post("https://sistema.docdigitales.com/enviar_correo", $(this).serialize(), function() {
      alert("Se a enviado tu correo")
      $("#forma_api input, #forma_api textarea").val("")
    });

  });
  //tabs
  $("#seleccion_faq").click(function() {
    $("#seleccion_faq").addClass("is-active");
    $("#seleccion_requisitos").removeClass("is-active");
    $("#seleccion_sat").removeClass("is-active");
    $("#seccion_requisitos").removeClass("is_active");
    $("#seccion_requisitos").addClass("no_active");
    $("#seccion_preguntas").removeClass("no_active");
    $("#seccion_preguntas").addClass("is_active");
    $("#seccion_sat").removeClass("is_active");
    $("#seccion_sat").addClass("no_active");
  });
  $("#seleccion_requisitos").click(function() {
    $("#seleccion_requisitos").addClass("is-active");
    $("#seleccion_faq").removeClass("is-active");
    $("#seleccion_sat").removeClass("is-active");
    $("#seccion_requisitos").removeClass("no_active");
    $("#seccion_requisitos").addClass("is_active");
    $("#seccion_preguntas").removeClass("is_active");
    $("#seccion_preguntas").addClass("no_active");
    $("#seccion_sat").removeClass("is_active");
    $("#seccion_sat").addClass("no_active");
  });
  $("#seleccion_sat").click(function() {
    $("#seleccion_sat").addClass("is-active");
    $("#seleccion_faq").removeClass("is-active");
    $("#seleccion_requisitos").removeClass("is-active");
    $("#seccion_requisitos").removeClass("is_active");
    $("#seccion_requisitos").addClass("no_active");
    $("#seccion_preguntas").removeClass("is_active");
    $("#seccion_preguntas").addClass("no_active");
    $("#seccion_sat").removeClass("no_active");
    $("#seccion_sat").addClass("is_active");
  });

  //Planes switch
  var w = true;
  $('#checkbox').on('change', function() {
    if (w) {
      $('.plan_basico_texto').text('90');
      $('.plan_plus_texto').text('182');
      $('.plan_ilimitado_texto').text('274');
      $('.plan_premium_texto').text('365');
    } else {
      $('.plan_basico_texto').text('99');
      $('.plan_plus_texto').text('199');
      $('.plan_ilimitado_texto').text('299');
      $('.plan_premium_texto').text('399');
    }
    w = !w;

  });


  // PLANES

  $("#funciones_click").click(function() {
    $("#funciones_basicas").show("slide", {
      direction: "up"
    }, 700, "swing");
    $("#funciones_click").addClass("no_show");
    $("#funciones_click_minus").removeClass("no_show");
  });

  $("#funciones_click_minus").click(function() {
    $("#funciones_basicas").hide("slide", {
      direction: "up"
    }, 400, "swing");
    $("#funciones_click").removeClass("no_show");
    $("#funciones_click_minus").addClass("no_show");
  });



  // BURGER MENU

  $('.navbar-burger').click(function() {
    $('#navbarBasicExample').slideToggle("slow", "swing");
  });





  // Smooth scrolling
  var scrollLink = $('.scroll');

  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000);
  });

  // MENU ON HOVER

  $("#drop_compania").mouseenter(function() {
      $("#como_compania").addClass("item_menu_blanco_hover");
    })
    .mouseleave(function() {
      $("#como_compania").removeClass("item_menu_blanco_hover");
    });

  $("#drop_funciona").mouseenter(function() {
      $("#como_funciona").addClass("item_menu_blanco_hover");
    })
    .mouseleave(function() {
      $("#como_funciona").removeClass("item_menu_blanco_hover");
    });





  // API
  $('.java_btn').on('click', function() {
    $('.java').addClass('aparece_ejemplo_api');
    $('.ruby').removeClass('aparece_ejemplo_api');
    $('.php').removeClass('aparece_ejemplo_api');
    $('.csharp').removeClass('aparece_ejemplo_api');

    $('.java_btn').addClass('btn_seleccionado');
    $('.ruby_btn').removeClass('btn_seleccionado');
    $('.php_btn').removeClass('btn_seleccionado');
    $('.csharp_btn').removeClass('btn_seleccionado');
  });

  $('.csharp_btn').on('click', function() {
    $('.csharp').addClass('aparece_ejemplo_api');
    $('.ruby').removeClass('aparece_ejemplo_api');
    $('.php').removeClass('aparece_ejemplo_api');
    $('.java').removeClass('aparece_ejemplo_api');

    $('.csharp_btn').addClass('btn_seleccionado');
    $('.ruby_btn').removeClass('btn_seleccionado');
    $('.php_btn').removeClass('btn_seleccionado');
    $('.java_btn').removeClass('btn_seleccionado');
  });

  $('.php_btn').on('click', function() {
    $('.php').addClass('aparece_ejemplo_api');
    $('.ruby').removeClass('aparece_ejemplo_api');
    $('.csharp').removeClass('aparece_ejemplo_api');
    $('.java').removeClass('aparece_ejemplo_api');

    $('.php_btn').addClass('btn_seleccionado');
    $('.java_btn').removeClass('btn_seleccionado');
    $('.csharp_btn').removeClass('btn_seleccionado');
    $('.ruby_btn').removeClass('btn_seleccionado');
  });

  $('.ruby_btn').on('click', function() {

    $('.ruby').addClass('aparece_ejemplo_api');
    $('.php').removeClass('aparece_ejemplo_api');
    $('.csharp').removeClass('aparece_ejemplo_api');
    $('.java').removeClass('aparece_ejemplo_api');

    $('.ruby_btn').addClass('btn_seleccionado');
    $('.php_btn').removeClass('btn_seleccionado');
    $('.csharp_btn').removeClass('btn_seleccionado');
    $('.java_btn').removeClass('btn_seleccionado');
  });

});
