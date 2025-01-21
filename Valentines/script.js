function moveButton(button) {
    const content = document.querySelector('.content');
    const contentRect = content.getBoundingClientRect();
    const x = Math.max(0, Math.min(contentRect.width - button.clientWidth, Math.floor(Math.random() * (contentRect.width - button.clientWidth))));
    const y = Math.max(0, Math.min(contentRect.height - button.clientHeight, Math.floor(Math.random() * (contentRect.height - button.clientHeight))));
    button.style.position = 'absolute';
    button.style.left = x + 'px';
    button.style.top = y + 'px';
}