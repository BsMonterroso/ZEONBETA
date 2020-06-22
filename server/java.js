$(document).ready(function(){
    function ocultar(){
        $('#ar_caja').fadeOut(200);
    };
    function mostrar(){
        $('#ar_caja').fadeIn(500);
    };
    ocultar();
    mostrar();
    $('#ar_btn1').on('click',function(){
        ocultar()
        mostrar()
        $('#ar_titulo').text("Crecimiento Profesional");
        $('#ar_descripcion').text('Descripcion de Crecimiento Profesional');
        $('#enlace').attr('href','Pega el link aqui');
    });
    $('#ar_btn2').on('click',function(){
        ocultar()
        mostrar()
        $('#ar_titulo').text("Tecnologia e Innovacion");
        $('#ar_descripcion').text('No te quedes atras y aprende  todo lo que nesecitas sobre el avance tecnologico que hay en el mundo, desde como como funciona la web hasta la.');
        $('#enlace').attr('href','Pega el link aqui');
    });
    $('#ar_btn3').on('click',function(){
        ocultar()
        mostrar()
        $('#ar_titulo').text("Produccion Audiovisual");
        $('#ar_descripcion').text('Descripcion de Crecimiento Profesional');
        $('#enlace').attr('href','Pega el link aqui');
    });
    $('#ar_btn4').on('click',function(){
        ocultar()
        mostrar()
        $('#ar_titulo').text("Desarrollo y Diseño Web");
        $('#ar_descripcion').text('Descripcion de Crecimiento Profesional');
        $('#enlace').attr('href','Pega el link aqui');
    });
    $('#ar_btn5').on('click',function(){
        ocultar()
        mostrar()
        $('#ar_titulo').text("Programacion orienta a objetos");
        $('#ar_descripcion').text('Descripcion de Crecimiento Profesional');
        $('#enlace').attr('href','Pega el link aqui');;
    });
});