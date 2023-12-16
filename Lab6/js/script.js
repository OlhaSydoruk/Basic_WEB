fetch("https://randomuser.me/api?results=5")
    .then(response => response.json())
    .then(data => {
        const users = data.results;
        console.log(users)
        users.forEach((user, index) => {
            const userDiv = document.createElement("div");
            userDiv.classList.add("user-info");

            const pictureUrl = user.picture.large;
            const cell = user.cell;
            const country = user.location.country;
            const email = user.email;
            const coordinates = user.location.coordinates.latitude + ", " + user.location.coordinates.longitude;

            userDiv.innerHTML = `
                        <img src="${pictureUrl}" alt="User Picture">
                        <p>Cell: ${cell}</p>
                        <p>Country: ${country}</p>
                        <p>Email: ${email}</p>
                        <p>Coordinates: ${coordinates}</p>`;
            console.log(index);
            document.getElementById(`user${index}`).appendChild(userDiv);
        });
    })
    .catch(error => {
        console.error("Помилка отримання даних: ", error);
    });