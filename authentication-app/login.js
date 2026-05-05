document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    // 1. Get DOM elements
    const identifier = document.getElementById('identifier').value.trim();
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

    const requestPayload = {
        password:password
    }

    if(identifier.includes('@')){
        requestPayload.email = identifier
    } else {
        requestPayload.username = identifier  
    } 

    try {
        // 3. Make the API Call
        const response = await fetch('https://api.freeapi.app/api/v1/users/login', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify(requestPayload)
        });

        const data = await response.json();

        // 4. Handle Response
        if (response.ok && data.success) {
            // Save the token to local storage
            const accessToken = data.data.accessToken;
            localStorage.setItem('accessToken', accessToken);

            // Success styling
            messageBox.textContent = "Login successful! Redirecting...";
            messageBox.className = "text-sm p-3 rounded-lg font-medium text-center bg-green-900/30 text-green-400 border border-green-800 block mb-4";
            
            // Redirect to the dashboard/home page
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        } else {
            // Throw error to be caught below
            throw new Error(data.message || "Invalid credentials.");
        }

    } catch (error) {
        // Show error message
        messageBox.textContent = error.message;
        messageBox.className = "text-sm p-3 rounded-lg font-medium text-center bg-red-900/30 text-red-400 border border-red-800 block mb-4";
        
        // Reset button state so they can try again
        submitBtn.disabled = false;
        btnText.classList.remove('hidden');
        btnSpinner.classList.add('hidden');
    }
});