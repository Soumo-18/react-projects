document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    // 1. Get DOM elements
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;
    
    const submitBtn = document.getElementById('submitBtn');
    const btnText = document.getElementById('btnText');
    const btnSpinner = document.getElementById('btnSpinner');
    const messageBox = document.getElementById('messageBox');

    // 2. Set Loading State
    submitBtn.disabled = true;
    btnText.classList.add('hidden');
    btnSpinner.classList.remove('hidden');
    messageBox.classList.add('hidden'); // Hide any previous messages

    try {
        // 3. Make the API Call
        const response = await fetch('https://api.freeapi.app/api/v1/users/register', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
                role: role,
                username: username
            })
        });

        const data = await response.json();

        // 4. Handle Response
        if (response.ok && data.success) {
            // Success styling
            messageBox.textContent = "Registration successful! Redirecting to login...";
            messageBox.className = "text-sm p-3 rounded-lg font-medium text-center bg-green-50 text-green-700 border border-green-200 block mb-4";
            
            // Redirect after a short delay
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 2000);
        } else {
            // Error styling from API response
            throw new Error(data.message || "Something went wrong during registration.");
        }

    } catch (error) {
        // Handle Catch Errors (Network issues or thrown errors)
        messageBox.textContent = error.message;
        messageBox.className = "text-sm p-3 rounded-lg font-medium text-center bg-red-50 text-red-700 border border-red-200 block mb-4";
        
        // Reset button state on error so they can try again
        submitBtn.disabled = false;
        btnText.classList.remove('hidden');
        btnSpinner.classList.add('hidden');
    }
});