fetch("http://localhost:5163/api/product")
    .then(response => response.json())
    .then(data => {
        console.log(data);

        const container = document.getElementById("products");

        data.forEach(product => {
            container.innerHTML += `
                <div class="card">
                    <h2>${product.name}</h2>
                    <p>${product.price} VNĐ</p>
                </div>
            `;
        });
    })
    .catch(error => console.error(error));