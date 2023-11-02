<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
    const message = document.getElementById("message");

    loginForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        try {
            // Send a POST request to your authentication API for login
            const response = await fetch("https://asia-southeast2-argon-fire-401902.cloudfunctions.net/loginGISChapter5", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            });

            if (response.ok) {
                const data = await response.json();
                if (data.status === true) {
                    // Login successful
                    window.location.href = "https://raffzhm.github.io/dashboard";
                } else {
                    // Handle login failure here
                    message.textContent = "Login failed. Please check your credentials.";
                    message.style.color = "red";
                }
            } else {
                // Handle response error here
                message.textContent = "Login request failed. Please try again.";
                message.style.color = "red";
            }
        } catch (error) {
            console.error("Error:", error);
        }
    });

    signupForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const signupUsername = document.getElementById("signup-username").value;
        const signupPassword = document.getElementById("signup-password").value;

        try {
            // Send a POST request to your registration API
            const response = await fetch("https://your-registration-api-url/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: signupUsername,
                    password: signupPassword
                })
            });

            if (response.ok) {
                const data = await response.json();
                if (data.status === true) {
                    message.textContent = "Account created successfully. You can now log in.";
                    message.style.color = "green";
                } else {
                    message.textContent = "Failed to create an account. Please try again.";
                    message.style.color = "red";
                }
            } else {
                // Handle response error here
                message.textContent = "Registration request failed. Please try again.";
                message.style.color = "red";
            }
        } catch (error) {
            console.error("Error:", error);
        }
    });
});
=======
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
    const message = document.getElementById("message");

    loginForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        try {
            // Send a POST request to your authentication API for login
            const response = await fetch("https://asia-southeast2-argon-fire-401902.cloudfunctions.net/loginGISChapter5", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            });

            if (response.ok) {
                const data = await response.json();
                if (data.status === true) {
                    // Login successful
                    window.location.href = "https://raffzhm.github.io/dashboard";
                } else {
                    // Handle login failure here
                    message.textContent = "Login failed. Please check your credentials.";
                    message.style.color = "red";
                }
            } else {
                // Handle response error here
                message.textContent = "Login request failed. Please try again.";
                message.style.color = "red";
            }
        } catch (error) {
            console.error("Error:", error);
        }
    });

    signupForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const signupUsername = document.getElementById("signup-username").value;
        const signupPassword = document.getElementById("signup-password").value;

        try {
            // Send a POST request to your registration API
            const response = await fetch("https://your-registration-api-url/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: signupUsername,
                    password: signupPassword
                })
            });

            if (response.ok) {
                const data = await response.json();
                if (data.status === true) {
                    message.textContent = "Account created successfully. You can now log in.";
                    message.style.color = "green";
                } else {
                    message.textContent = "Failed to create an account. Please try again.";
                    message.style.color = "red";
                }
            } else {
                // Handle response error here
                message.textContent = "Registration request failed. Please try again.";
                message.style.color = "red";
            }
        } catch (error) {
            console.error("Error:", error);
        }
    });
});
>>>>>>> a08d6342e45f33b3c4e2eb8307b9af4b761a82a4
