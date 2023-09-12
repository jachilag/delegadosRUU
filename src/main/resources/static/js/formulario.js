function welcomeAdmin(){
  if(userPermit()){
    let loggedUser = JSON.parse(sessionStorage.getItem("logUser"));
    sessionStorage.setItem("thisUrl",window.location.href);
  } else {location.href = "./login.html";}
}

// =================================================================
// registro de nuevos datos en la base de datos
function create(entidad) {
  switch (entidad) {
    case 'puesto':
      createPuesto();
      break;
    case 'delegado':
      getPuestoById($("#puesto").val());
      break;
    case 'admin':
      createAdmin();
      break;
    default:
      break;
  }
}


async function createPuesto() {
  let puesto = {
    id: $("#id").val(),
    mesas: parseInt($("#mesas").val()),
    nombre: $("#nombre").val(),
    ubicacion: $("#ubicacion").val(),
    direccion: $("#direccion").val(),
    nombre_encargado: $("#nombre_encargado").val(),
    cel_encargado: $("#cel_encargado").val(),
    correo_encargado: $("#correo_encargado").val(),
    localidad: $("#localidad").val()
  };

  //verificando que los items esten completos en el formulario
  if ( puesto.id == '' || puesto.mesas == '' || puesto.nombre == '' || puesto.ubicacion == '' ||
  puesto.direccion == '' || puesto.nombre_encargado == '' || puesto.cel_encargado == '' || 
  puesto.correo_encargado == '' || puesto.localidad == '') {
    alert("No se registra dato, porque el formulario esta incompleto");
    return;
  }

  try {
    await $.ajax({
    url: window.URL_PUESTO +"new",
    type: "POST",
    contentType:"application/json",
    data:JSON.stringify(puesto),
    success: function (response) {
      alert("Puesto de votación creado!!");
      location.reload();
    },
    error: function (xhr, status) {
      alert("No fue posible crear el puesto de votación");
    },
    complete: function (xhr, status) {
    //   alert("Petición realizada");
    },
    });
    
  } catch (error) {
    alert("Error: " + error);
  }
}


async function createDelegado(puesto) {
  let delegado = {
    id:$("#id").val(),
    nombre:$("#nombre").val(),
    celular:$("#celular").val(),
    correo:$("#correo").val(),
    puesto:puesto
  };

  //verificando que los items esten completos en el formulario
  if ( delegado.id == '' || delegado.nombre == '' || delegado.celular == '' ||
  delegado.correo == '') {
    alert("No se registra dato, porque el formulario esta incompleto");
    return;
  }

  try {
    await $.ajax({
    url: window.URL_DELEGADO +"new",
    type: "POST",
    contentType:"application/json",
    data:JSON.stringify(delegado),
    success: function (response) {
      if(response){
        alert("Delegado creado!!");
        location.reload();
      } else {alert("No fue posible crear el perfil");}
    },
    error: function (xhr, status) {
      alert("No fue posible crear el perfil");
    },
    complete: function (xhr, status) {
    //   alert("Petición realizada");
    },
    });
    
  } catch (error) {
    alert("Error: " + error);
  }
}


async function createAdmin() {
  let admin = {
    id: $("#id").val(),
    nombre: $("#nombre").val(),
    password: $("#password").val()
  };

  //verificando que los items esten completos en el formulario
  if ( admin.id == '' || admin.nombre == '' || admin.password == '') {
    alert("No se registra dato, porque el formulario esta incompleto");
    return;
  }

  try {
    await $.ajax({
    url: window.URL_ADMIN +"new",
    type: "POST",
    contentType:"application/json",
    data:JSON.stringify(admin),
    success: function (response) {
      alert("Administrador creado!! 💻");
      location.reload();
    },
    error: function (xhr, status) {
      alert("No fue posible crear otro Admin 😢");
    },
    complete: function (xhr, status) {
    //   alert("Petición realizada");
    },
    });
    
  } catch (error) {
    alert("Error: " + error);
  }
}

//-----------------------------------------------------------------------------
//Funcion que muestra en el selector del formulario del delegado los puestos de 
//votacion disponibles
function getPuestos() {
  $.ajax({
    url: window.URL_PUESTO + "all",
    type: "GET",
    dataType: "json",

    success: function (response) {
      showPuestos(response); //".items" has been deleted 'cause it doesn't work forward
    },
    error: function (xhr, status) {
      alert("ha sucedido un problema");
    },
    complete: function (xhr, status) {
      //   alert("Petición realizada");
    },
  });
}

function getPuestoById(id) {
  $.ajax({
    url: window.URL_PUESTO + "id/"+id,
    type: "GET",
    dataType: "json",

    success: function (response) {
      createDelegado(response);
    },
    error: function (xhr, status) {
      alert("ha sucedido un problema");
    },
    complete: function (xhr, status) {
      //   alert("Petición realizada");
    },
  });
}

function showPuestos(data) {
  let idSelector = 'puesto';
  let htmlCode = '';

  // fill the selector with gamas in the BD
  htmlCode += '<option value=null>Seleccione una opcion</option>'
  for (let i = 0; i < data.length; i++) {
    htmlCode += '<option value="' + data[i].id + '">' + data[i].id+" - "+data[i].nombre+" - "+data[i].ubicacion + '</option>';
  }
  $('#' + idSelector).html(htmlCode);
}
//-----------------------------------------------------------------------------

// =================================================================
// ir a tablas de datos
function consultarDatos(entidad) {
  sessionStorage.setItem("entidad", entidad);
  location.href="./tablas.html";
}