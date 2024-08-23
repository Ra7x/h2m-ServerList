
// Envío del formulario
document.getElementById('ipForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe
    const ip = document.getElementById('ip').value; // Obtener el valor del input
    checkIpInFavourites(ip); // Llamar a la función para comprobar la IP
});

// Función para cargar el JSON desde GitHub y verificar la IP
async function checkIpInFavourites(ip) {
    try {
        // URL del archivo JSON en GitHub
        const url = 'https://raw.githubusercontent.com/Ra7x/h2m-ServerList/master/favourites.json';
        const response = await fetch(url);
        const favourites = await response.json();

        // console.log("datos recibidos:" + favourites);

        // Comprobar si la IP está en la lista
        if (favourites.includes(ip)) {
            alert("The IP you've written is already in our list");
        } else {
            alert("Well... It seems that the app you've written isn't in our list. Follow our 'README.txt' instructions to add it into your favourites.json or contact @oliatom350 or @ra7xul via Github to add in the global favourites.json. Thanks  ");
        }
    } catch (error) {
        console.error('Error loading JSON from GitHub:', error);
    }
}