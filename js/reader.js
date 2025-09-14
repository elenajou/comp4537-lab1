// js/reader.js
const MESSAGES = {
  LAST_RETRIEVED: "Last retrieved:",
  BACK: "Back to Home"
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

  document.getElementById('timestamp').textContent = `${MESSAGES.LAST_RETRIEVED} ${new Date().toLocaleTimeString()}`;
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