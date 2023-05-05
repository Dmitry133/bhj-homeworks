const editor = document.getElementById("editor");

editor.value = localStorage.getItem("editor");
editor.oninput = () => localStorage.editor = editor.value;