const searchPhone = () => {
    const searchBox = document.getElementById('search-box');
    const searchText = searchBox.value;
    console.log(searchText);
    searchBox.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayPhone(data.data));
}

const displayPhone = data => {
    const searchPhoneResult = document.getElementById('search-result');
    data.forEach(singleData => {
        console.log(singleData);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
                    <img src="${singleData.image}" class="card-img-top h-50" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${singleData.phone_name}</h5>
                        <p class="card-text">${singleData.slug}</p>
                    </div>
                </div>
        `;
        searchPhoneResult.appendChild(div);
    })
}
