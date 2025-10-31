// popup.js - Clay ID Extractor Logic

document.addEventListener('DOMContentLoaded', async () => {
  // Get current tab
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const url = tab.url;

  // Extract IDs from URL
  const regex = /workspaces\/([^\/]+)\/workbooks\/([^\/]+)\/tables\/([^\/?]+)/;
  const match = url.match(regex);

  const workspaceIdElement = document.getElementById('workspaceId');
  const tableIdElement = document.getElementById('tableId');
  const errorElement = document.getElementById('error');
  const idsElement = document.getElementById('ids');

  if (match) {
    const workspaceId = match[1];
    const tableId = match[3];

    // Display IDs
    workspaceIdElement.textContent = workspaceId;
    tableIdElement.textContent = tableId;
    
    // Show IDs section
    idsElement.style.display = 'block';

    // Setup copy buttons
    setupCopyButton('copyWorkspace', workspaceId);
    setupCopyButton('copyTable', tableId);
  } else {
    // Show error
    errorElement.style.display = 'block';
  }
});

// Copy button functionality
function setupCopyButton(buttonId, text) {
  const button = document.getElementById(buttonId);
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(text);
      const originalText = button.textContent;
      button.textContent = 'Copied!';
      button.classList.add('copied');
      setTimeout(() => {
        button.textContent = originalText;
        button.classList.remove('copied');
      }, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
      button.textContent = 'Error';
    }
  });
}
