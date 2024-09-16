// Main JavaScript file for Meme Warrior

document.addEventListener('DOMContentLoaded', () => {
    console.log('Meme Warrior app initialized');
    const uploadForm = document.getElementById('upload-form');
    const fileInput = document.getElementById('file-input');
    const memeGrid = document.getElementById('meme-grid');

    uploadForm.addEventListener('submit', handleUpload);

    function handleUpload(event) {
        event.preventDefault();
        const files = fileInput.files;
        
        if (files.length === 0) {
            showMessage('Please select at least one file to upload.', 'error');
            return;
        }

        let uploadedCount = 0;
        let skippedCount = 0;
        Array.from(files).forEach(file => {
            if (isValidImageFile(file)) {
                displayMeme(file);
                uploadedCount++;
            } else {
                console.warn(`File ${file.name} is not a supported image format and will be skipped.`);
                skippedCount++;
            }
        });

        if (uploadedCount > 0) {
            showMessage(`Successfully uploaded ${uploadedCount} meme(s)!`, 'success');
        }
        if (skippedCount > 0) {
            showMessage(`Skipped ${skippedCount} unsupported file(s).`, 'warning');
        }

        // Clear the file input after upload
        fileInput.value = '';
    }

    function isValidImageFile(file) {
        const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
        return validTypes.includes(file.type);
    }

    function displayMeme(file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const memeItem = document.createElement('div');
            memeItem.className = 'meme-item';
            
            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = file.name;
            
            memeItem.appendChild(img);
            memeGrid.appendChild(memeItem);
        }
        reader.onerror = function() {
            showMessage(`Error reading file: ${file.name}`, 'error');
        }
        reader.readAsDataURL(file);
    }

    function showMessage(message, type) {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        messageElement.className = `message ${type}`;
        document.body.appendChild(messageElement);
        setTimeout(() => {
            messageElement.remove();
        }, 3000);
    }
});

// Function for future user registration
function registerUser(email, password) {
    // Implement user registration logic
    console.log('User registration function to be implemented');
}

// Function for future meme upload to server
function uploadMemeToServer(file) {
    // Implement meme upload logic to server
    console.log('Meme upload to server function to be implemented');
}