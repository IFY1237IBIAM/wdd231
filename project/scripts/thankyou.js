document.addEventListener('DOMContentLoaded', () => {
    // Function to extract URL parameters
    function getQueryParams() {
        const params = new URLSearchParams(window.location.search);
        return {
            firstname: params.get('firstname') || '',
            lastname: params.get('lastname') || '',
            email: params.get('email') || '',
            mobilephone: params.get('mobilephone') || '',
            organization: params.get('organization') || '',
            timestamp: params.get('timestamp') || ''
        };
    }

    // Populate the page with submitted form data
    const formData = getQueryParams();

    document.getElementById('firstname').textContent = formData.firstname;
    document.getElementById('lastname').textContent = formData.lastname;
    document.getElementById('email').textContent = formData.email;
    document.getElementById('mobilephone').textContent = formData.mobilephone;
    document.getElementById('organization').textContent = formData.organization;
    document.getElementById('timestamp').textContent = new Date(formData.timestamp).toLocaleString();

    // Set the current year in the footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Set the last modified date in the footer
    document.getElementById('lastModified').textContent = document.lastModified;
});
