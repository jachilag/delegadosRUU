var URL_TABLA;
var tHeaders;

function welcomeAdmin(){
    if(userPermit()){
        let loggedUser = JSON.parse(sessionStorage.getItem("logUser"));
        sessionStorage.setItem("thisUrl",window.location.href);
        switch (sessionStorage.getItem("entidad")){
          case 'puesto':
            URL_TABLA = window.URL_PUESTO; 
            $("#titulo_tabla").text("Edite los datos de los PUESTOS DE VOTACIÓN");
            break;
          case 'delegado':
            URL_TABLA = window.URL_DELEGADO; 
            $("#titulo_tabla").text("Edite los datos de los DELEGADOS");
            break;
          case 'admin':
            URL_TABLA = window.URL_ADMIN;
            $("#titulo_tabla").text("Edite los datos de los ADMINISTRADORES");
            break;
        
          default:
            break;
        }
    } else {location.href = "./login.html";}
}

//================================================================
//obtener los datos del servidor
function getData(entidad) {
    $.ajax({
        url: URL_TABLA + "id/" +sessionStorage.getItem("idEntidad"),
        type: "GET",
        dataType: "json",
        success: function (response) {
          showData(response);
        },
        error: function (xhr, status) {
          // alert("error en la conexion con la base de datos");
        },
        complete: function (xhr, status) {
          //   alert("Petición realizada");
        },
      });  
}


//================================================================
//mostrar los datos del servidor en la tabla
function showData(data) {
  let idTableHtml = 'tabla';
  let htmlCode = '';
  
  //cuerpo de la tabla
  htmlCode += (function(entidad,datos){
    switch (entidad) {
      case 'delegado':
        return delegadoTable(datos);

      case 'puesto':
        return puestoTable(datos);

      case 'admin':
        return adminTable(datos);

      default:
        return '';
    }
  })(sessionStorage.getItem('entidad'),data);

  
  $("#" + idTableHtml).html("");
  $("#" + idTableHtml).empty();
  $("#" + idTableHtml).append(htmlCode);
  if(sessionStorage.getItem('entidad') == 'delegado'){showPuesto(data.puesto.id);}
  $('#localidad').val(data.localidad);
  
}


function adminTable(data){
  result = '';
  result += "<tr><th scope='row' class='text-right px-3'>CEDULA</th><td class='form-control'>" + data.id + "</td></tr>";
  result += "<tr><th scope='row' class='text-right px-3'>NOMBRE</th><td><input class='form-control' id='nombre' type='text' value='" + data.nombre + "'></td></tr>";
  result += "<tr><th scope='row' class='text-right px-3'>CONTRASEÑA</th><td><input class='form-control' id='password' type='password' value='" + data.password + "'></td></tr>";
  return result;
}


function puestoTable(data){
  result = '';
  result += "<tr><th scope='row' class='text-right px-3'>ID</th><td class='form-control'>" + data.id + "</td></tr>";
  result += "<tr><th scope='row' class='text-right px-3'>MESAS</th><td><input class='form-control' id='mesas' type='number' value='" + data.mesas + "'></td></tr>";
  result += "<tr><th scope='row' class='text-right px-3'>NOMBRE</th><td><input class='form-control' id='nombre' type='text' value='" + data.nombre + "'></td></tr>";
  result += "<tr><th scope='row' class='text-right px-3'>UBICACION</th><td><input class='form-control' id='ubicacion' type='text' value='" + data.ubicacion + "'></td></tr>";
  result += "<tr><th scope='row' class='text-right px-3'>DIRECCION</th><td><input class='form-control' id='direccion' type='text' value='" + data.direccion + "'></td></tr>";
  result += "<tr><th scope='row' class='text-right px-3'>NOMBRE ENCARGADO</th><td><input class='form-control' id='nombre_encargado' type='text' value='" + data.nombre_encargado + "'></td></tr>";
  result += "<tr><th scope='row' class='text-right px-3'>CEL. ENCARGADO</th><td><input class='form-control' id='cel_encargado' type='number' value='" + data.cel_encargado + "'></td></tr>";
  result += "<tr><th scope='row' class='text-right px-3'>CORREO ENCARGADO</th><td><input class='form-control' id='correo_encargado' type='email' value='" + data.correo_encargado + "'></td></tr>";
  result += "<tr><th scope='row' class='text-right px-3'>LOCALIDAD</th><td>"+ showLocalidad() +"</td></tr>";
  return result;
}


function delegadoTable(data){
  result = '';
  result += "<tr><th scope='row' class='text-right px-3'>CEDULA</th><td class='form-control'>" + data.id + "</td></tr>";
  result += "<tr><th scope='row' class='text-right px-3'>NOMBRE</th><td><input class='form-control' id='nombre' type='text' value='" + data.nombre + "'></td></tr>";
  result += "<tr><th scope='row' class='text-right px-3'>CELULAR</th><td><input class='form-control' id='celular' type='number' value='" + data.celular + "'></td></tr>";
  result += "<tr><th scope='row' class='text-right px-3'>CORREO</th><td><input class='form-control' id='correo' type='email' value='" + data.correo + "'></td></tr>";
  result += "<tr><th scope='row' class='text-right px-3'>PUESTO</th><td><select class='form-control' id='puesto'></select></td></tr>";
  return result;
}

//------------------------------------------------------------------------------
// the next functions are used to get the SCORE aviable into the SELECTOR
function showLocalidad() {
  let htmlCode = '';
  htmlCode += "<select class='form-control' id='localidad'>"
  htmlCode += "<option value='Usaquén'>Usaquén</option>"
  htmlCode += "<option value='Chapinero'>Chapinero</option>"
  htmlCode += "<option value='Santa Fe'>Santa Fe</option>"
  htmlCode += "<option value='San Cristóbal'>San Cristóbal</option>"
  htmlCode += "<option value='Usme'>Usme</option>"
  htmlCode += "<option value='Tunjuelito'>Tunjuelito</option>"
  htmlCode += "<option value='Bosa'>Bosa</option>"
  htmlCode += "<option value='Kennedy'>Kennedy</option>"
  htmlCode += "<option value='Fontibón'>Fontibón</option>"
  htmlCode += "<option value='Engativá'>Engativá</option>"
  htmlCode += "<option value='Suba'>Suba</option>"
  htmlCode += "<option value='Barrios Unidos'>Barrios Unidos</option>"
  htmlCode += "<option value='Teusaquillo'>Teusaquillo</option>"
  htmlCode += "<option value='Los Mártires'>Los Mártires</option>"
  htmlCode += "<option value='Antonio Nariño'>Antonio Nariño</option>"
  htmlCode += "<option value='Puente Aranda'>Puente Aranda</option>"
  htmlCode += "<option value='La Candelaria'>La Candelaria</option>"
  htmlCode += "<option value='Rafael Uribe Uribe'>Rafael Uribe Uribe</option>"
  htmlCode += "<option value='Ciudad Bolívar'>Ciudad Bolívar</option>"
  htmlCode += "<option value='Sumapaz'>Sumapaz</option>";
  htmlCode += "</select>";
 return htmlCode;
}

function showPuesto(puestoId) {
  let htmlCode = '';
  let puestos = (function(){
    try {
      $.ajax({
        url: window.URL_PUESTO + "all",
        type: "GET",
        dataType: "json",
    
        success: function (response) {
          response.forEach(puesto => {
            htmlCode += '<option value="' + puesto.id + '">' + puesto.id+" - "+puesto.nombre+" - "+puesto.ubicacion + '</option>';
          });
          
          $("#puesto").html("");
          $("#puesto").empty();
          $("#puesto").append(htmlCode);
          $('#puesto').val(puestoId);
        },
        error: function (xhr, status) {
          alert("ha sucedido un problema");
        }
      });
    } catch (error) {alert("ha sucedido un problema");}
  })();
}
//------------------------------------------------------------------------------


//============================================================================
//acciones al presionar boton actualizar
function actualizar(){
  let idData = sessionStorage.getItem('idEntidad');
  switch (sessionStorage.getItem('entidad')) {
    case 'admin':
      return adminDataUpdate(idData);

    case 'delegado':
      return getPuestoById($("#puesto").val(),idData);;
    
    case 'puesto':
      return puestoDataUpdate(idData);

    default:
      return '';
  }
}


function adminDataUpdate(id){
  let dataInfo = {
    id: id,
    nombre:$("#nombre").val(),
    password:$("#password").val(),
  }

  if(!validateInputs(dataInfo)){return;};
  
  $.ajax({
    url: URL_TABLA + "update",
    type: "PUT",
    contentType: "application/json",
    data: JSON.stringify(dataInfo),
    success: function (response) {
      if(response.id==null){alert("NO actualizado");
      } else{alert('Registro Actualizado');}
    },
    error: function (xhr, status) {
      alert("ha sucedido un problema");
    },
    complete: function (xhr, status) {
      location.reload();
    },
  });
}


function getPuestoById(idPuesto,id) {
  $.ajax({
    url: window.URL_PUESTO + "id/"+idPuesto,
    type: "GET",
    dataType: "json",

    success: function (response) {
      delegadoDataUpdate(id, response);
    },
    error: function (xhr, status) {
      alert("ha sucedido un problema");
    },
    complete: function (xhr, status) {
      //   alert("Petición realizada");
    },
  });
}


function delegadoDataUpdate(id,puesto){
  let dataInfo = {
    id:id,
    nombre:$("#nombre").val(),
    celular:$("#celular").val(),
    correo:$("#correo").val(),
    puesto:puesto
  }

  if(!validateInputs(dataInfo)){return;};
  
  $.ajax({
    url: URL_TABLA + "update",
    type: "PUT",
    contentType: "application/json",
    data: JSON.stringify(dataInfo),
    success: function (response) {
      if(response.id==null){alert("NO actualizado");
      } else{alert('Registro Actualizado');}
    },
    error: function (xhr, status) {
      alert("ha sucedido un problema");
    },
    complete: function (xhr, status) {
      location.reload();
    },
  });

}


function puestoDataUpdate(id){
  let dataInfo = {
    id: id,
    mesas: parseInt($("#mesas").val()),
    nombre: $("#nombre").val(),
    ubicacion: $("#ubicacion").val(),
    direccion: $("#direccion").val(),
    nombre_encargado: $("#nombre_encargado").val(),
    cel_encargado: $("#cel_encargado").val(),
    correo_encargado: $("#correo_encargado").val(),
    localidad: $("#localidad").val()
  }
  if(!validateInputs(dataInfo)){return;};
  
  $.ajax({
    url: URL_TABLA + "update",
    type: "PUT",
    contentType: "application/json",
    data: JSON.stringify(dataInfo),
    success: function (response) {
      if(response.id==null){alert("NO actualizado");
      } else{alert('Registro Actualizado');}
    },
    error: function (xhr, status) {
      alert("ha sucedido un problema");
    },
    complete: function (xhr, status) {
      location.reload();
    },
  });

}


function validateInputs(data){
  let flat = false;
  switch (sessionStorage.getItem('entidad')) {
    case 'admin':
      if (data.nombre == '' || data.password == '') {
        alert("No se registra dato, porque el formulario esta incompleto");
      } else {flat = true;}
      break;

    case 'puesto':
      if ( data.mesas == '' || data.nombre == '' || data.ubicacion == '' ||
      data.direccion == '' || data.nombre_encargado == '' || data.cel_encargado == '' || 
      data.correo_encargado == '') {
        alert("No se registra dato, porque el formulario esta incompleto");
      } else {flat = true;}
      break;

    case 'delegado':
      if ( data.nombre == '' || data.celular == '' || data.correo == '') {
        alert("No se registra dato, porque el formulario esta incompleto");
      } else {flat = true;}
      break;
  
    default:
      break;
  }

  return flat;
}