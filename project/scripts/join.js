document.addEventListener('DOMContentLoaded', () => {
    // Timestamp Functionality
    const timestampField = document.getElementById('timestamp');
    const now = new Date();
    timestampField.value = now.toISOString();

    // Modal Functionality
    const modalLinks = document.querySelectorAll('#membership-cards a');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close-modal');

    modalLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetModal = document.querySelector(link.getAttribute('href'));
            if (targetModal) {
                targetModal.style.display = 'block';
            }
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.closest('.modal').style.display = 'none';
        });
    });

    // Close modal when clicking outside the modal content
    window.addEventListener('click', (e) => {
        modals.forEach(modal => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
});
