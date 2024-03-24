<?php include("conexion.php"); // CONECTAR CON LA BASE DATOS
//DECLARO VARIABLES PHP PARA CAPTURAR DATOS PROVENIENTES DEL FORMULARIO DE CONTACTO CON EL METODO POST
$nombre=$_POST['nombre'];
$apellido=$_POST['apellido'];
$email=$_POST['email'];
$genero=$_POST['genero'];
$telefono=$_POST['telefono'];
$fnac=$_POST['fnac'];
$comentarios=$_POST['comentarios'];
$directorio= '../assets/adjuntos/';
//ACA DEFINIRE UN NOMBRE UNICO PARA EL ARCHIVO QUE VOY ADJUNTAR ASI GARANTIZO QUE NO SE REPITA Y LUEGO GUARDO ESE NOMBRE EN BD PARA CASO NECESITE BUSCARLO LUEGO O HACER ALGUNA OPERACION
$nombre_archivo=date('Ymd-his', time());
//ACA CON ESTA FUNCIÓN VALIDO LA EXTENSION DEL ARCHIVO Y LA GUARDO ME PUEDE SERVIR PARA HACER VALIDACIONES Y LUEGO PARA ARMAR TODO EL DIRECTORIO DESTINO DONDE IRA EL ARCHIVO CON SU NUEVO NOMBRE EN EL SERVIDOR
$extension = pathinfo(basename($_FILES['archivo']['name']), PATHINFO_EXTENSION);
//ACA ARMO LA RUTA DE DESTINO DEL ARCHIVO QUE VOY ADJUNTAR USANDO LO QUE ARME PREVIAMENTE
$archivo = "".$directorio."".$nombre_archivo.".".$extension."";  

$resultado = $mysqli->query("INSERT INTO cliente(nombre,apellido,email,telefono,fnac,genero,comentarios)VALUES('$nombre','$apellido','$email','$telefono','$fnac','$genero','$comentarios')");
if($resultado)
{
    //ACA USO LA FUNCION DE SUBIDA DE ARCHIVO DE PHP DONDE EL PRIMER PARAMENTRO ES EL ARCHIVO QUE RECIBIMOS DEL FORM Y EL SEGUNDO LA RUTA DE DESTINO EN EL SERVIDOR QUE ARMAMOS PREVIAMENTE
    move_uploaded_file($_FILES['archivo']['tmp_name'], $archivo);
    //SI SALE CORRECTAMENTE REDIRECCIONO AL INDEX
    echo "Se registro correctamente el registro en la BD";
    // echo '<script>location.href ="../index.html";</script>';  

}
else
{
    //SI DA ERROR IMPRIMO UN MSJ
    echo "Error al registrar en la BD";  
}

?>