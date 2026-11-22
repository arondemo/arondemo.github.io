const answers = Array.from(document.querySelectorAll("textarea"), field => {
  const copy = document.createElement("div");
  copy.className = "print-answer";
  field.after(copy);
  return { field, copy };
});

function preparePrint() {
  for (const { field, copy } of answers) {
    const answered = field.value.trim() !== "";
    copy.textContent = answered ? field.value : "";
    field.classList.toggle("has-print-answer", answered);
  }
}

window.addEventListener("beforeprint", preparePrint);
for (const button of document.querySelectorAll(".print-button")) {
  button.addEventListener("click", () => {
    preparePrint();
    window.print();
  });
  button.hidden = false;
}
