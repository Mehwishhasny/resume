var skillsContainer = document.getElementById('skills-container');
var toggleButton = document.getElementById('toggle-skills');
toggleButton === null || toggleButton === void 0 ? void 0 : toggleButton.addEventListener('click', function () {
    if (skillsContainer) {
        var currentDisplay = window.getComputedStyle(skillsContainer).display;
        skillsContainer.style.display = currentDisplay === 'none' ? 'flex' : 'none';
    }
});
