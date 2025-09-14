import { USER_MESSAGES } from "../lang/messages/en/user.js";

const MESSAGES = {
  LAST_SAVED: USER_MESSAGES.lastSaved,
  ADD_NOTE: USER_MESSAGES.addNoteButton,
  REMOVE_NOTE: USER_MESSAGES.removeNoteButton,
  BACK: USER_MESSAGES.backToHomeButton
};

// js/writer.js
// Use a Note class to encapsulate note data and its corresponding DOM elements
class Note {
  constructor(content = '') {
      this.content = content;
      // Dynamically create a div, textarea, and button for this note
      this.element = document.createElement('div');
      this.textarea = document.createElement('textarea');
      this.removeBtn = document.createElement('button');

      // Set up the elements
      this.textarea.value = this.content;
      this.removeBtn.textContent = MESSAGES.REMOVE_NOTE;

      // Add event listeners for updating and removing
      this.textarea.addEventListener('input', (e) => this.content = e.target.value);
      this.removeBtn.addEventListener('click', () => this.remove());

      // Append to the container
      this.element.append(this.textarea, this.removeBtn);
      document.getElementById('notes-container').appendChild(this.element);
  }

  // Method to remove the note from the DOM and the notes array
  remove() {
      this.element.remove();
      // Remove from the global notes array
      notes = notes.filter(note => note !== this);
  }
}

let notes = [];

// Function to save notes to localStorage
const saveNotes = () => {
  const noteContents = notes.map(note => note.content);
  localStorage.setItem('notes', JSON.stringify(noteContents));
  const timestamp = new Date().toLocaleTimeString();
  document.getElementById('timestamp').textContent = USER_MESSAGES.lastSaved(timestamp);
};

// Function to retrieve notes from localStorage and populate the page
const loadNotes = () => {
  const savedNotes = JSON.parse(localStorage.getItem('notes'));
  if (savedNotes) {
      notes = savedNotes.map(content => new Note(content));
  }
};

// Add a new note
const addNote = () => {
  notes.push(new Note());
};

// Initial load and setup
document.addEventListener('DOMContentLoaded', () => {
  loadNotes();
  document.getElementById('add-button').addEventListener('click', addNote);
  document.getElementById('add-button').textContent = USER_MESSAGES.addNoteButton;
  document.querySelector('a button').textContent = USER_MESSAGES.backToHomeButton;
  // Save notes every 2 seconds
  setInterval(saveNotes, 2000);
});

// Listener for changes from other tabs
window.addEventListener('storage', (e) => {
  if (e.key === 'notes') {
      loadNotes();
  }
});


