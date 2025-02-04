// Enlarge image function
function enlargeImage(img) {
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.onclick = function() {
        document.body.removeChild(modal);
    };
    const newImg = document.createElement('img');
    newImg.src = img.src;
    newImg.style.maxWidth = '90%';
    newImg.style.maxHeight = '90%';
    modal.appendChild(newImg);
    document.body.appendChild(modal);
}
