async function getDetail(){
    let id = $("#cedula").val();
    await $.ajax({
        url: window.URL_DELEGADO + "id"  + "/" + id,
        type: "GET",
        dataType: "json",
        success: function (response) {
          if(response.nombre=="NO DEFINIDO"){
            alert("No existe usuario con esa cedula");
            $('#datos_delegado').hide();
          } else{
            showDetailDelegado(response);
          }
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
  let htmlCode = "";

  //create the header's table
  htmlCode += "<tr><th scope='row' class='text-right px-3'>Cedula: </th><td>" + response.id + "</td></tr>";
  htmlCode += "<tr><th scope='row' class='text-right px-3'>nombre: </th><td>" + response.nombre + "</td></tr>";

  if(response.puesto != null && response.puesto.id != null){
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