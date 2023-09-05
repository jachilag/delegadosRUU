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
  htmlCode += " <thead class='thead-dark'><tr>"
  if(response.delegados.puesto == null){
      tHeadersDelegados_2.forEach(element => {
          htmlCode += "<th>" + element + "</th>";
      });
    } else {
      tHeadersDelegados_1.forEach(element => {
          htmlCode += "<th>" + element + "</th>";
      });
  }

  htmlCode += "</tr></thead>";


  htmlCode += "<tbody>";
  htmlCode += "<tr class='centrar text-center'>";
  htmlCode += "<td>" + response.id + "</td>";
  htmlCode += "<td>" + response.nombre + "</td>";

 if (response.puesto != null){
     htmlCode += "<td>" + response.puesto.id + "</td>";
     htmlCode += "<td>" + response.puesto.nombre +"</td>";
     htmlCode += "<td>" + response.puesto.mesas + "</td>";
     htmlCode += "<td>" + response.puesto.ubicacion + "</td>";
     htmlCode += "<td>" + response.puesto.direccion + "</td>";
     htmlCode += "<td>" + response.puesto.nombre_encargado + "</td>";
     htmlCode += "<td>" + response.puesto.cel_encargado + "</td>";
 }

  htmlCode += "</tr>";
  htmlCode += "</tbody>";

  $("#" + idTableHtml).html("");
  $("#" + idTableHtml).empty();
  $("#" + idTableHtml).append(htmlCode);
}