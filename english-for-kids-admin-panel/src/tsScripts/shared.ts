export function createBtn(cls: string, value: string) {
  const button: HTMLInputElement = document.createElement("input");
  button.setAttribute("class", cls);
  button.setAttribute("type", "button");
  button.setAttribute("value", value);

  return button;
}