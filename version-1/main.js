const $accordionContainer = document.querySelector("[data-accordion-container]");

const DATA = [
  {
    title: "Title 1",
    content: "Content 1",
  },
  {
    title: "Title 2",
    content: "Content 2",
  },
  {
    title: "Title 3",
    content: "Content 3",
  },
];

function accordionItem(title, content) {
  const accordionItem = document.createElement("div");
  const newTitle = document.createElement("div");
  const newContent = document.createElement("div");

  newTitle.textContent = title;
  newContent.textContent = content;

  newTitle.setAttribute("data-accordion-title", "");
  newContent.setAttribute("data-accordion-content", "");

  // Append the title and content to the newly created accordion item
  accordionItem.appendChild(newTitle);
  accordionItem.appendChild(newContent);

  accordionItem.setAttribute("data-accordion-item", "");
  accordionItem.setAttribute("data-accordion-item-state", "closed");

  // Append the new accordion item to the accordion container
  $accordionContainer.appendChild(accordionItem);
}

function handleAccordion() {
  $accordionContainer?.addEventListener("click", (event) => {
    // reset the rest of the items to be hidden
    const items = document.querySelectorAll("[data-accordion-item]");
    items.forEach((item) => {
      item.setAttribute("data-accordion-item-state", "closed");
    });

    // check if I click on the accordion title
    if (event.target.hasAttribute("data-accordion-title")) {
      // get the parent element of the title
      const parent = event.target.parentElement;
      const currentState = parent.getAttribute("data-accordion-item-state");
      const newState = currentState === "closed" ? "open" : "closed";

      parent.setAttribute("data-accordion-item-state", newState);
    }
  });
}

function initAccordion(data) {
  data.forEach((item) => {
    accordionItem(item.title, item.content);
  });

  handleAccordion();
}

// This would be the function from my library :D
initAccordion(DATA);
