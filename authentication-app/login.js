document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    // 1. Get DOM elements
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const submitBtn = document.getElementById('submitBtn');
    const btnText = document.getElementById('btnText');
    const btnSpinner = document.getElementById('btnSpinner');
    const messageBox = document.getElementById('messageBox');

    // 2. Set Loading State
    submitBtn.disabled = true;
    btnText.classList.add('hidden');
    btnSpinner.classList.remove('hidden');
    messageBox.classList.add('hidden');

    // try {
    //     // 3. Make the API Call
    //     const response = await fetch('https://api.freeapi.app/api/v1/users/login', {
    //         method: 'POST',
    //         headers: {
    //             'accept': 'application/json',
    //             'content-type': 'application/json'
    //         },
    //         // CRITICAL: This allows the browser to save the httpOnly cookie sent by the API
    //         credentials: 'include', // Using omit temporarily if cross-origin cookies block local dev, but for production use 'include'
    //         body: JSON.stringify({
    //             password: password,
    //             username: username
    //         })
    //     });

    //     const data = await response.json();

    //     // 4. Handle Response
    //     if (response.ok && data.success) {
    //         // Success styling
    //         messageBox.textContent = "Login successful! Redirecting...";
    //         messageBox.className = "text-sm p-3 rounded-lg font-medium text-center bg-green-50 text-green-700 border border-green-200 block mb-4";
            
    //         // Redirect to the dashboard/home page
    //         setTimeout(() => {
    //             window.location.href = 'index.html';
    //         }, 1000);
    //     } else {
    //         // Error styling
    //         throw new Error(data.message || "Invalid credentials.");
    //     }

    // } catch (error) {
    //     messageBox.textContent = error.message;
    //     messageBox.className = "text-sm p-3 rounded-lg font-medium text-center bg-red-50 text-red-700 border border-red-200 block mb-4";
        
    //     // Reset button state
    //     submitBtn.disabled = false;
    //     btnText.classList.remove('hidden');
    //     btnSpinner.classList.add('hidden');
    // }
    // 3. Make the API Call (Removed credentials completely to fix CORS)
        const response = await fetch('https://api.freeapi.app/api/v1/users/login', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                password: password,
                username: username
            })
        });

        const data = await response.json();

        // 4. Handle Response
        if (response.ok && data.success) {
            // ---> NEW: Save the token to local storage <---
            const accessToken = data.data.accessToken;
            localStorage.setItem('accessToken', accessToken);

            // Success styling
            messageBox.textContent = "Login successful! Redirecting...";
            messageBox.className = "text-sm p-3 rounded-lg font-medium text-center bg-green-50 text-green-700 border border-green-200 block mb-4";
            
            // Redirect to the dashboard/home page
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        } else {
            throw new Error(data.message || "Invalid credentials.");
        }
});