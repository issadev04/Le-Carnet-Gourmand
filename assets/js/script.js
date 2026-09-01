// Sélection des éléments du formulaire
const commentForm = document.querySelector("#comment-form");
const nameInput = document.querySelector("#name");
const commentInput = document.querySelector("#comment");
const commentsList = document.querySelector(".comments-list");

// Création du message d'erreur
const errorMessage = document.createElement("p");
errorMessage.className = "error-message";
commentForm.appendChild(errorMessage);

// Gestion des boutons Supprimer existants
const deleteButtons = document.querySelectorAll(".delete-comment");

deleteButtons.forEach(function (deleteButton) {
  deleteButton.addEventListener("click", function () {
    deleteButton.parentElement.remove();
  });
});

// Gestion de la soumission du formulaire
commentForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const comment = commentInput.value.trim();

  // Validation du formulaire
  if (name.length < 2 || comment.length < 10) {
    errorMessage.textContent =
      "Le nom doit contenir au moins 2 caractères et le commentaire au moins 10 caractères.";
    return;
  }

  errorMessage.textContent = "";

  // Création du nouveau commentaire
  const commentElement = document.createElement("article");
  commentElement.className = "comment";

  const authorElement = document.createElement("p");
  authorElement.textContent = name;
  commentElement.appendChild(authorElement);

  const textElement = document.createElement("p");
  textElement.textContent = comment;
  commentElement.appendChild(textElement);

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.className = "delete-comment";
  deleteButton.textContent = "🗑️ Supprimer";
  commentElement.appendChild(deleteButton);

  // Gestion de la suppression du nouveau commentaire
  deleteButton.addEventListener("click", function () {
    commentElement.remove();
  });

  // Ajout du commentaire et réinitialisation du formulaire
  commentsList.appendChild(commentElement);
  commentForm.reset();
});
