let globalId = 1;

function markAsDone(todoID) {
  const parent = document.getElementById(todoID);
  parent.children[2].innerHTML = "Done!";
}

function createChild(title, description,id) {
  const child = document.createElement("div");
  const firstGrandChild = document.createElement("div");
  firstGrandChild.innerHTML = title;
  const secondGrandChild = document.createElement("div");
  secondGrandChild.innerHTML = description;
  const thirdGrandChild = document.createElement("button");
  thirdGrandChild.innerHTML = "Mark as Done";
  thirdGrandChild.setAttribute("onClick", `markAsDone(${id})`);
  child.append(firstGrandChild);
  child.append(secondGrandChild);
  child.append(thirdGrandChild);
  child.setAttribute("id", id);
  return child;
}

function updateAccToState(state){
    const parent = document.getElementById("container");
    parent.innerHTML = "";
    for(let i=0;i<state.length;i++){
        const child = createChild(state[i].title,state[i].description,state[i].id);
        parent.appendChild(child);
    }
}

function addToDo() {
  const title = document.getElementById("title").value;
  const description = document.getElementById("desc").value;
  const parentToDo = document.getElementById("toDoParent");

  parentToDo.appendChild(createChild(title, description, globalId++));
}

updateAccToState([{
    title: "go to gym",
    description: "gym time is 6am",
    id:1
}])