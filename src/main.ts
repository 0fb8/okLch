import "./style.css";

const colorInput = document.getElementById("colorInput") as HTMLInputElement;
const colorValue = document.getElementById("colorValue") as HTMLSpanElement;
const previewBox = document.getElementById("preview") as HTMLDivElement;

const updateColor = (color: string): void => {
  const oklchText = `oklch(from ${color} l c h)`;
  console.log(oklchText);
  colorValue.textContent = color;
  previewBox.style.backgroundColor = oklchText;
};

updateColor(colorInput.value);

colorInput.addEventListener("input", (event: Event) => {
  const target = event.target as HTMLInputElement;
  updateColor(target.value);
});
