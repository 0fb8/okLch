import "./style.css";

const colorInput = document.getElementById("colorInput") as HTMLInputElement;
const colorValue = document.getElementById("colorValue") as HTMLSpanElement;
const previewBox = document.getElementById("preview") as HTMLDivElement;
const palette = document.getElementById("palette") as HTMLDivElement;

const updateColor = (color: string): void => {
  const oklchText = `oklch(from ${color} l c h)`;
  console.log(oklchText);
  colorValue.textContent = color;
  previewBox.style.backgroundColor = oklchText;
};

const updatePalette = (color: string) => {
  const steps = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  palette.innerHTML = "";

  steps.forEach((l) => {
    const oklchText = `oklch(from ${color} ${l}% c h)`;
    console.log(oklchText);

    const swatch = document.createElement("div");
    swatch.style.backgroundColor = oklchText;
    swatch.innerHTML = `<span>L: ${l}%</span>`;
    palette.appendChild(swatch);
  });
};

updateColor(colorInput.value);

colorInput.addEventListener("input", (event: Event) => {
  const target = event.target as HTMLInputElement;
  updateColor(target.value);
});
