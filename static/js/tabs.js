import { doItForMe } from "./paths.js";

const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

const articleContainer = document.getElementById("article");

articleContainer.innerHTML = doItForMe(0);

tabs.forEach((tab) => {
  tab.addEventListener("click", changeTabPanel);
});

function changeTabPanel(e) {
  const targetTab = e.target.id;
  articleContainer.innerHTML = doItForMe(targetTab);
}
