      $(document).ready(function() {
    
  $("#formTarefa").submit(function(event) {
    event.preventDefault(); 

    let tarefa = $("#tarefa").val();
                     if (tarefa !== "") {
                    $("#listaTarefas").append("<li>" + tarefa + "</li>");
                    $("#tarefa").val(""); 
    }
  });

  
      $("#listaTarefas").on("click", "li", function() {
    $(this).toggleClass("concluida");
  });

  
})