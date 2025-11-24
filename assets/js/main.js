document.addEventListener(`DOMContentLoaded`, () => {
  let crearLista = confirm(
    `Bienvenido a tu lista de tareas ,Deseas crear una lista de tareas?`
  );

  if (crearLista === true) {
    let listaDeTareas = [];
    let tarea = prompt(
      `Ingresa una tarea para agregarar a la lista de tareas (o presiona cancelar para salir):`
    );

    if (tarea === null) {
      alert("Has cancelado la aplicación. No se agregaron tareas.");
      return; // Termina la función aquí
    }

    while (tarea !== null && tarea.trim() !== ``) {
      listaDeTareas.push(tarea.trim());
      const confirmar = confirm(`Deseas agregar otra tarea?`);
      if (confirmar === true) {
        tarea = prompt(
          `Ingresa una tarea para agregarar a la lista de tareas (o presiona cancelar para salir):`
        );

        if (tarea === null) {
          console.log("Has cancelado la aplicación. No se agregaron más tareas.");
          console.log("--- Lista de Tareas Pendientes ---");
        for (let i = 0; i < listaDeTareas.length; i++) {
          console.log(`${i + 1}. ${listaDeTareas[i]}`);
        }
        break;
        }
      } else {
        console.log("--- Lista de Tareas Pendientes ---");
        for (let i = 0; i < listaDeTareas.length; i++) {
          console.log(`${i + 1}. ${listaDeTareas[i]}`);
        }
        break;
      }
    }
  } else {
    alert(`Hasta la proxima, vuelve pronto!`);
  }
});
