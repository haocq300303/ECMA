import { render, router } from "./libs";
import About from "./Pages/Client/About";
import Home from "./Pages/Client/Home";

const app = document.querySelector("#app");

router.on("/", () => {
  render(Home, app);
});

router.on("/about", () => {
  render(About, app);
});

router.resolve();
