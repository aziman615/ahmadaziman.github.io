document.addEventListener('DOMContentLoaded', function() {
    const buildings = document.querySelectorAll('.building');
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.querySelector('.close');
    const car = document.querySelector('.car');

    buildings.forEach(building => {
        building.addEventListener('click', function() {
            const section = this.dataset.section;
            const content = document.getElementById(`${section}-content`).innerHTML;
            modalBody.innerHTML = content;
            modal.style.display = 'block';

            // Move car to the building's position
            const buildingRect = building.getBoundingClientRect();
            const cityRect = document.querySelector('.cityscape').getBoundingClientRect();
            car.style.left = `${buildingRect.left - cityRect.left + (buildingRect.width / 2) - 25}px`; // Adjust for car size
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        // Reset car position
        car.style.left = '0';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            car.style.left = '0';
        }
    });
});