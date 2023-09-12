var URL_TABLA;
var tHeaders;
function welcomeAdmin(){
    if(userPermit()){
        let loggedUser = JSON.parse(sessionStorage.getItem("logUser"));
        sessionStorage.setItem("thisUrl",window.location.href);
        switch (sessionStorage.getItem("entidad")){
          case 'puesto':
            URL_TABLA = window.URL_PUESTO; tHeaders = window.t_headers_puesto; break;
          case 'delegado':
            URL_TABLA = window.URL_DELEGADO; tHeaders = window.t_headers_delegado; break;
          case 'admin':
            URL_TABLA = window.URL_ADMIN;tHeaders = window.t_headers_admin; break;
        
          default:
            break;
        }
    } else {location.href = "./login.html";}
}

//================================================================
//obtener los datos del servidor
function getData(entidad) {
    switch (entidad) {
        case 'puesto':
            getPuestos();
            break;
        case 'delegado':
            getDelegados();
            break;
        case 'admin':
            getAdmins();
            break;
    
        default:
            break;
    }    
}

function getPuestos(){
  $.ajax({
    url: URL_TABLA + 'all',
    type: "GET",
    dataType: "json",
    success: function (response) {
      showDataPuestos(response);
    },
    error: function (xhr, status) {
      // alert("error en la conexion con la base de datos");
    },
    complete: function (xhr, status) {
      //   alert("Petición realizada");
    },
  });
}

function getAdmins(){
  $.ajax({
    url: URL_TABLA + 'all',
    type: "GET",
    dataType: "json",
    success: function (response) {
      showDataAdmins(response);
    },
    error: function (xhr, status) {
      // alert("error en la conexion con la base de datos");
    },
    complete: function (xhr, status) {
      //   alert("Petición realizada");
    },
  });
}

function getDelegados(){
  $.ajax({
    url: URL_TABLA + 'all',
    type: "GET",
    dataType: "json",
    success: function (response) {
      showDataDelegados(response);
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
function showDataAdmins(data) {
  let idTableHtml = 'tabla';
  let htmlCode = '';
  htmlCode = createHeader();
  
  //cuerpo de la tabla
  htmlCode += "<tbody>";
  for (let i = 0; i < data.length; i++) {
    htmlCode += "<tr class='centrar text-center'>";
    htmlCode += "<td>" + data[i].id + "</td>";
    htmlCode += "<td>" + data[i].nombre + "</td>";
    htmlCode += "<td><a href='#' class='btn btn-primary' onclick='getInformation(" + data[i].id + ")'>Consultar</a></td>";
    htmlCode += "<td><button class='btn btn-danger' onclick='deleteData(" + data[i].id + ")'>✕</button></td>";
    htmlCode += "</tr>";
    }
    htmlCode += "</tbody>";

  
  $("#" + idTableHtml).html("");
  $("#" + idTableHtml).empty();
  $("#" + idTableHtml).append(htmlCode);
}

function showDataDelegados(data) {
  let idTableHtml = 'tabla';
  let htmlCode = '';
  htmlCode = createHeader();
  
  //cuerpo de la tabla
  htmlCode += "<tbody>";
  for (let i = 0; i < data.length; i++) {
    htmlCode += "<tr class='centrar text-center'>";
    htmlCode += "<td>" + data[i].id + "</td>";
    htmlCode += "<td>" + data[i].nombre + "</td>";
    htmlCode += "<td>" + data[i].celular + "</td>";
    htmlCode += "<td>" + data[i].correo + "</td>";
    htmlCode += "<td>" + data[i].puesto.id +" - "+ data[i].puesto.nombre+ " - "+data[i].puesto.ubicacion+ "</td>";
    htmlCode += "<td><a href='#' class='btn btn-primary' onclick='getInformation(" + data[i].id + ")'>Consultar</a></td>";
    htmlCode += "<td><button class='btn btn-danger' onclick='deleteData(" + data[i].id + ")'>✕</button></td>";
    htmlCode += "</tr>";
    }
    htmlCode += "</tbody>";

  
  $("#" + idTableHtml).html("");
  $("#" + idTableHtml).empty();
  $("#" + idTableHtml).append(htmlCode);
}

function showDataPuestos(data) {
  let idTableHtml = 'tabla';
  let htmlCode = '';
  htmlCode = createHeader();
  
  //cuerpo de la tabla
  htmlCode += "<tbody>";
  for (let i = 0; i < data.length; i++) {
    htmlCode += "<tr class='centrar text-center'>";
    htmlCode += "<td>" + data[i].id + "</td>";
    htmlCode += "<td>" + data[i].nombre + "</td>";
    htmlCode += "<td>" + data[i].mesas + "</td>";
    htmlCode += "<td>" + data[i].ubicacion + "</td>";
    htmlCode += "<td>" + data[i].nombre_encargado + "</td>";
    htmlCode += "<td>" + data[i].cel_encargado + "</td>";
    htmlCode += "<td>" + data[i].localidad + "</td>";
    htmlCode += "<td><a href='#' class='btn btn-primary' onclick='getInformation(" + data[i].id + ")'>Consultar</a></td>";
    htmlCode += "<td><button class='btn btn-danger' onclick='deleteData(" + data[i].id + ")'>✕</button></td>";
    htmlCode += "</tr>";
    }
    htmlCode += "</tbody>";

  
  $("#" + idTableHtml).html("");
  $("#" + idTableHtml).empty();
  $("#" + idTableHtml).append(htmlCode);
}

function createHeader(){
  let htmlCode = '';

  //creacion de los headers de la tabla
  htmlCode += " <thead class='thead-dark'><tr>"
  tHeaders.forEach(element => {
      htmlCode += "<th>" + element + "</th>";
  });
  htmlCode += "<th style='max-width: 50px;'>EDITAR</th>" +"<th style='max-width: 50px;'>ELIMINAR</th>" + "</tr></thead> ";
  return htmlCode;
}

//================================================================
//eliminar dato elegido
function deleteData(id) {

  $.ajax({
    url: URL_TABLA + id,
    type: "DELETE",
    success: function (response) {
      // alert('Registro Eliminado');
      location.reload();
    },
    error: function (xhr, status) {
      alert("ha sucedido un problema");
    },
    complete: function (xhr, status) {
      //   alert("Petición realizada");
    },
  });
}

//================================================================
//editar dato elegido
function getInformation(id) {
  sessionStorage.setItem("idEntidad",id);
  location.href="./information.html";
}