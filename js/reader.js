import { USER_MESSAGES } from "../lang/messages/en/user.js";

const MESSAGES = {
  LAST_RETRIEVED: USER_MESSAGES.lastRetrieved,
  BACK: USER_MESSAGES.backToHomeButton
};

const displayNotes = () => {
  const notesContainer = document.getElementById('notes-container');
  notesContainer.innerHTML = ''; // Clear previous notes

  const notes = JSON.parse(localStorage.getItem('notes')) || [];
  notes.forEach(noteContent => {
      const p = document.createElement('p');
      p.textContent = noteContent;
      notesContainer.appendChild(p);
  });

  const timestamp = new Date().toLocaleTimeString();
  document.getElementById('timestamp').textContent = USER_MESSAGES.lastRetrieved(timestamp);
};


// Listen for changes from other tabs
window.addEventListener('storage', (e) => {
  if (e.key === 'notes') {
      displayNotes();
  }
});

// Initial load and setup
document.addEventListener('DOMContentLoaded', () => {
  displayNotes();
  // Update every 2 seconds
  setInterval(displayNotes, 2000);
});


document.querySelector('a button').textContent = USER_MESSAGES.backToHomeButton;