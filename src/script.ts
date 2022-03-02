const prom = (): Promise<string> => new Promise((res) =>
  setTimeout(() => {
    res("hello!!");
  }, 5000));

const ev = async () => {
  document.querySelector("#app").innerHTML = "call!";
  const text = await prom();
  document.querySelector("#app").innerHTML = text;
};
window.addEventListener("DOMContentLoaded", ev);
