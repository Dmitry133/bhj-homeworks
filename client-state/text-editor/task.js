const editor = document.getElementById("editor");

editor.value = "";

editor.value = localStorage.editor;
editor.oninput = () => localStorage.editor = editor.value;