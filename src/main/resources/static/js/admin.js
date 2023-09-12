const tHeaders = ['ID', 'Identificacion', 'Nombre', 'celular', 'Email', 'Tipo', 'Zona'];

function validateUser() {
    let user = {
        id: $("#id").val(),
        password: $("#password").val()
    };

  try {
    $.ajax({
      url: window.URL_ADMIN + user.id + "/" + user.password,
      type: "GET",
      dataType: "json",
      success: function (response) {
        if(response.id == null){alert("No existe usuario");}
        else{
          sessionStorage.setItem("logUser",JSON.stringify(response));
          sessionStorage.setItem("thisUrl", window.location.href);
          location.href = "./mainMenu.html";
        }
          
      },
      error: function (xhr, status) {
        alert("No existe usuario");
      },
      complete: function (xhr, status) {
        //   alert("Petición realizada");
      },
    });
  } catch (error) {
    alert(error);
  }
}

//================================================================

function welcomeAdmin(){
  if(userPermit()){
    let loggedUser = JSON.parse(sessionStorage.getItem("logUser"));
      $("#bienvenido").text("Bienvenido "+ loggedUser.nombre);
  } else {location.href = "./login.html";}
}