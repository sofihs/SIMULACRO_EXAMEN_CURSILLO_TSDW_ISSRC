//no admitir numeros decimales
function condicionEstudiante(nota){
    if(Number.isInteger(nota)) {
        if(nota<4){
            console.log(`Tu condición es libre`);
        }else if(nota<7){
            console.log(`Tu condición es regular`);
        }else{
            console.log(`Tu condición es promocional`);
        }
    }else{
        console.log(`La nota debe ser un número entero.`);
    }
}
let nota = 9;
condicionEstudiante(nota);


 
