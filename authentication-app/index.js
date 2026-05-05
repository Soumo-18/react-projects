document.addEventListener('DOMContentLoaded', async () => {
    
    // UI Elements
    const loadingState = document.getElementById('loadingState');
    const dashboardCard = document.getElementById('dashboardCard');
    
    const profileUsername = document.getElementById('profileUsername');
    const profileEmail = document.getElementById('profileEmail');
    const profileRole = document.getElementById('profileRole');
    const avatarText = document.getElementById('avatarText');

    // --- 1. FETCH CURRENT USER ---
    // Grab the token from storage
    const token = localStorage.getItem('accessToken');

    if (!token) {
        // If there's no token, they aren't logged in. Kick them out immediately.
        window.location.href = 'login.html';
        return; // Stop running the rest of the script
    }

    try {
        const response = await fetch('https://api.freeapi.app/api/v1/users/current-user', {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                // Attach the token manually to prove who we are
                'Authorization': `Bearer ${token}` 
            }
        });

        const data = await response.json();

        if (response.ok && data.success) {
            // User is authenticated! Let's populate the UI.
            const user = data.data; // FreeAPI wraps the user object inside 'data'
            
            profileUsername.textContent = user.username;
            profileEmail.textContent = user.email;
            profileRole.textContent = user.role;
            
            // Set the avatar to the first letter of their username
            avatarText.textContent = user.username.charAt(0).toUpperCase();

            // Hide loading skeleton, show dashboard
            loadingState.classList.add('hidden');
            dashboardCard.classList.remove('hidden');

        } else {
            // Unauthorized or token expired - Kick them to login
            console.error("Session invalid:", data.message);
            localStorage.removeItem('accessToken'); // Clear bad token
            window.location.href = 'login.html';
        }

    } catch (error) {
        console.error("Failed to fetch user:", error);
        // Fallback kick to login if network fails completely
        window.location.href = 'login.html';
    }

    // --- 2. LOGOUT FUNCTIONALITY ---
    const logoutBtn = document.getElementById('logoutBtn');
    const logoutText = document.getElementById('logoutText');
    const logoutSpinner = document.getElementById('logoutSpinner');

    logoutBtn.addEventListener('click', async () => {
        // Set loading state on button
        logoutBtn.disabled = true;
        logoutText.classList.add('hidden');
        logoutSpinner.classList.remove('hidden');
        
        try {
            // Send the logout request to the server so it can invalidate the token
            await fetch('https://api.freeapi.app/api/v1/users/logout', {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            // Clear the token from storage so they are actually logged out locally
            localStorage.removeItem('accessToken');

            // Redirect back to login
            window.location.href = 'login.html';

        } catch (error) {
            console.error("Logout failed:", error);
            // Even if the network call fails, clear token and kick them to login for safety
            localStorage.removeItem('accessToken');
            window.location.href = 'login.html';
        }
    });
});