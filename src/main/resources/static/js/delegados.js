const URL_DELEGADOS = 'http://150.136.169.53:8080/api/';
// const URL_INFO = 'http://localhost:8080/api/'
var arrayData = {};
var dataTemp;

function returnLastWebPage(){
    location.href = sessionStorage.getItem("thisUrl");
}

function dataStorageSession(id, tableType, tHeaders){
    sessionStorage.setItem("id",id);
    sessionStorage.setItem("table_type",tableType);
    sessionStorage.setItem("thisUrl", window.location.href);
    sessionStorage.setItem("tHeaders", tHeaders);
    location.href = './information.html';
}

function getDetail(){
    let id = $("#cedula").val();

    $.ajax({
        url: URL_DELEGADOS + "delegado/id"  + "/" + id,
        type: "GET",
        dataType: "json",
        success: function (response) {
          alert("nombre: " + response.nombre);
          showDetailDelegado(response);
        },
        error: function (xhr, status) {
          alert("ha sucedido un problema");
        },
        complete: function (xhr, status) {
          //   alert("Petición realizada");
        },
      });
}

function showDetailDelegado(response){
$('#datos_delegado').show();
  idTableHtml = 'tabla_datos_delegado';
  let tHeadersDelegados_1 = ['Cedula: ','nombre: ', 'Puesto N°: ', 'Nombre Puesto:  ', 'Cantidad Mesas: ', 'Ubicacion:', 'Direccion Puesto', 'Encargado puesto: ', 'Celular Encargado puesto: '];
  let tHeadersDelegados_2 = ['Cedula: ','nombre: '];
  let htmlCode = "";

  //create the header's table
  htmlCode += "<tr><th scope='row' class='text-right px-3'>Cedula: </th><td>" + response.id + "</td></tr>";
  htmlCode += "<tr><th scope='row' class='text-right px-3'>nombre: </th><td>" + response.nombre + "</td></tr>";

  if(response.puesto != null){
      htmlCode += "<tr><th scope='row' class='text-right px-3'>Puesto N°: </th><td>" + response.puesto.mesas + "</td></tr>";
      htmlCode += "<tr><th scope='row' class='text-right px-3'>Nombre Puesto:  </th><td>" + response.puesto.ubicacion + "</td></tr>";
      htmlCode += "<tr><th scope='row' class='text-right px-3'>Cantidad Mesas: </th><td>" + response.puesto.direccion + "</td></tr>";
      htmlCode += "<tr><th scope='row' class='text-right px-3'>Ubicacion: </th><td>" + response.puesto.nombre_encargado + "</td></tr>";
      htmlCode += "<tr><th scope='row' class='text-right px-3'>Direccion Puesto: </th><td>" + response.puesto.cel_encargado + "</td></tr>";
      htmlCode += "<tr><th scope='row' class='text-right px-3'>Encargado puesto: </th><td>" + response.puesto.cel_encargado + "</td></tr>";
      htmlCode += "<tr><th scope='row' class='text-right px-3'>Celular Encargado puesto: </th><td>" + response.puesto.cel_encargado + "</td></tr>";
  }

  $("#" + idTableHtml).html("");
  $("#" + idTableHtml).empty();
  $("#" + idTableHtml).append(htmlCode);
}