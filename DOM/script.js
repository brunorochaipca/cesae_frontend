
var taskForm = document.getElementById("taskForm");
var taskInput = document.getElementById("taskInput");
var taskList = document.getElementById("taskList");

taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var taskText = taskInput.value.trim();

    // texto em branco
    if (taskText === "") {
        taskInput.setCustomValidity("Introduza uma tarefa.");

        // mostra mensagem
        taskInput.reportValidity();
        return;
    }

    // limpa mensagens anteriores
    taskInput.setCustomValidity("");

    // item da lista
    var taskItem = document.createElement("li");
    taskItem.appendChild(document.createTextNode(taskText + " "));
    
    // botão de remover
    var removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.textContent = "Remover";
    
    // remove item da lista ao carregar no botão
    removeButton.addEventListener("click", function () {
        taskItem.remove();
    });

    // objecto li (que poderá herdar - caso existam - as propriedades do botão removeButton)
    taskItem.appendChild(removeButton);
    // objecto ul (que vai herdar o objecto li)
    taskList.appendChild(taskItem);

    // Após "adicionar", limpa os dados de inputs
    taskForm.reset();
    
    // Repõe o focus no Input (consequencia do reset anterior)
    taskInput.focus();
});


// permite apagar uma mensagem existente - ao recomeçar um input
taskInput.addEventListener("input", function () {
    taskInput.setCustomValidity("");
});
