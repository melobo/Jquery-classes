/*let button = document.getElementById('flex-btn')
button.addEventListener('click', () => {
    document.getElementById('square-wrapper').classList.add('d-flex')
})*/
/*sujeto,verbo,predicado*/
$('#flex-btn').on('click', () => {
    $('#square-wrapper').toggleClass("d-flex");
    /* question ? if true : if false*/
    $('#square-wrapper').hasClass('d-flex') ? $('#flex-btn').text('Go Block!') : $('#flex-btn').text('Go Flex!')
})
$('input[name="toggle-flex"]').on('change', (event) => {
    let flexValue = $(event.target).val();
    $("#square-wrapper").css({ 'justify-content': flexValue })
})
/*Escribir una tarea
Presionar el botón para agregarla
    debe escuchar un click
    obtener el valor del input
    limpiar el input
    crear un li
    agregamos el valor obtenido como texto del li
    insertar en la lista*/
var taskArray = JSON.parse(localStorage.getItem("taskArray"));

$('.to-do-wrapper .btn').on('click', () => {
    let task = $('#task-input').val();
    $('#task-input').val("");
    let taskLi = `<li>${task} <div class="btn btn-danger">Eliminar</div></li>`
    $('.task-list').append(taskLi);
    taskArray.push(task);
    localStorage.setItem("taskArray", JSON.stringify(taskArray))
})
var previousTasks = localStorage.getItem("taskArray")
$(document).ready(() => {
    const printTasks = (tasks) => {
        tasks.forEach((task) => {
            $('.task-list').append(
                `<li>${task} <div class="btn btn-danger">Eliminar</div></li>`
            )
        })
    }

    var previousTasks = JSON.parse(localStorage.getItem("taskArray"))
    console.log(previousTasks);
    previousTasks ? printTasks(previousTasks) : taskArray = [];
})
$(document).on('click', '.btn-danger', (event) => {
    console.log($(event.target).closest("li").index())
    $(event.target).closest("li").remove()

})