let joke = document.getElementById("joke");
const url = "https://apis.ccbp.in/jokes/random"; 

const get = async () => {
    try {
        // Fetch random joke
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch the joke. Please try again!");
        }
        const data = await response.json();
        joke.textContent = data.value; // Display the joke
    } catch (error) {
        joke.textContent = "Oops! Something went wrong. Try again later.";
        console.error(error.message);
    }
};
