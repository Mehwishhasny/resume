const skillsContainer = document.getElementById('skills-container');
const toggleButton = document.getElementById('toggle-skills');

toggleButton?.addEventListener('click', () => {
    if (skillsContainer) {
        const currentDisplay = window.getComputedStyle(skillsContainer).display;
        skillsContainer.style.display = currentDisplay === 'none' ? 'flex' : 'none';
    }
});
