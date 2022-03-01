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
        <div class="card m-auto" style="width: 18rem;">
                    <img src="${singleData.image}" class="card-img-top" alt="..."  style="width=80%" height="70%">
                    <div class="card-body">
                        <h5 class="card-title text-center">${singleData.phone_name}</h5>
                        <p class="card-text text-center">${singleData.slug}</p>
                        <a href="#"  onclick="LoadphoneDetails()" class="btn btn-primary text-center">Details</a>
                    </div>
                </div>
        `;
        searchPhoneResult.appendChild(div);
    })
}

const LoadphoneDetails = data => {

}

// const LoadphoneDetails = () => {

//     const url = `https://openapi.programming-hero.com/api/phone/${singleData.slug}`;
//     fetch(url)
//         .then(res => res.json())
//         .then(data => console.log(data))
// }
