const today = () => {
  const content = document.querySelector(".content");

  //Two top sections
  let topContent = document.createElement("div");
  topContent.classList.add("topContent");
  content.appendChild(topContent);

  let leftContainer = document.createElement("div");
  leftContainer.classList.add("leftContainer");
  topContent.appendChild(leftContainer);

  let rightContainer = document.createElement("div");
  rightContainer.classList.add("rightContainer");
  topContent.appendChild(rightContainer);

  //Rigthand Todos
  let banner = document.createElement("h1");
  banner.classList.add("banner");
  banner.textContent = "Today";
  rightContainer.appendChild(banner);

  let todoList = document.createElement("ul");
  todoList.classList.add("todoList");
  rightContainer.appendChild(todoList);

  let todo1 = document.createElement("li");
  todo1.classList.add("todos");
  todo1.textContent = "";
  todoList.appendChild(todo1);

  //Lefthand project list
  let list = document.createElement("ul");
  list.classList.add("list");
  leftContainer.appendChild(list);

  let listItemToday = document.createElement("li");
  listItemToday.classList.add("listItems");
  listItemToday.textContent = "Today";
  list.appendChild(listItemToday);

  let listItemLogbook = document.createElement("li");
  listItemLogbook.classList.add("listItems");
  listItemLogbook.textContent = "Logbook";
  list.appendChild(listItemLogbook);

  let listItemTrash = document.createElement("li");
  listItemTrash.classList.add("listItems");
  listItemTrash.textContent = "Trash";
  list.appendChild(listItemTrash);

  let listItemProjects = document.createElement("li");
  listItemProjects.classList.add("listItems");
  listItemProjects.textContent = "Projects";
  list.appendChild(listItemProjects);

  //bottom bar
  let bottomBar = document.createElement("div");
  bottomBar.classList.add("bottomBar");
  content.appendChild(bottomBar);

  let newProject = document.createElement("p");
  newProject.classList.add("newProject");
  newProject.textContent = "+ New Project";
  bottomBar.appendChild(newProject);

  let newTodo = document.createElement("p");
  newTodo.classList.add("newTodo");
  newTodo.textContent = "+";
  bottomBar.appendChild(newTodo);

  let search = document.createElement("img");
  search.src = "/Users/mead93/repos/todo-list/dist/icons/search.svg";
  search.classList.add("search");
  bottomBar.appendChild(search);
};

export { today };
