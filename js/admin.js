document.addEventListener('keydown', function (e) {
    const key = e.key.toLowerCase();
    
    if (e.ctrlKey && key === 'i') {
        e.preventDefault();               
        window.location.href = "index.html";
    }
});
