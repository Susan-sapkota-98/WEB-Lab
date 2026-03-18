// Element references
const addBtn     = document.getElementById('addBtn');
const removeBtn  = document.getElementById('removeBtn');
const inputArea  = document.getElementById('inputArea');
const itemInput  = document.getElementById('itemInput');
const confirmAdd = document.getElementById('confirmAdd');
const itemList   = document.getElementById('itemList');

// Toggle input panel
addBtn.addEventListener('click', () => {
  const isHidden = inputArea.classList.contains('hidden');
  inputArea.classList.toggle('hidden');
  if (isHidden) itemInput.focus();
  else itemInput.value = '';
});

// Add item on button click or Enter key
confirmAdd.addEventListener('click', addItem);
itemInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addItem();
});

// Add item function
function addItem() {
  const text = itemInput.value.trim();
  if (!text) {
    itemInput.style.borderColor = '#d93025';
    setTimeout(() => { itemInput.style.borderColor = ''; }, 800);
    return;
  }
  const li = document.createElement('li');
  li.textContent = text;
  itemList.appendChild(li);
  itemInput.value = '';
  itemInput.focus();
}

// Remove last item with fade-out
removeBtn.addEventListener('click', () => {
  const items = itemList.querySelectorAll('li');
  if (items.length === 0) return;
  const last = items[items.length - 1];
  last.style.transition = 'opacity 0.2s, transform 0.2s';
  last.style.opacity = '0';
  last.style.transform = 'translateX(10px)';
  setTimeout(() => itemList.removeChild(last), 200);
});