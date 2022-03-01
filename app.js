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
                        <a href="#"  onclick="loadphoneDetails('${singleData.slug}')" class="btn btn-primary text-center">Details</a>
                    </div>
                </div>
        `;
        searchPhoneResult.appendChild(div);
    })
}



const loadphoneDetails = id => {

    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetails(data.data))
}

const displayPhoneDetails = data => {
    console.log(data)
    const displayPhone = document.getElementById('phone-details');
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
    <div class="row g-0">
           <div class="col-md-6 text-center" >
           <img src="${data.image}" class="img-fluid rounded-start" style="height:100%" alt="...">
           <h5 class="card-title">${data.name}</h5>
           <p class="card-text"><small class="text-muted">${data.releaseDate}</small></p>
           </div>
           <div class="col-md-6">
               <div class="card-body">
                   <h5 class="card-title"><strong>Brand : </strong> ${data.brand}</h5>
                   <h5 class="card-title"><strong>Processor : </strong> ${data.mainFeatures.chipSet}</h5>
                   <h5 class="card-title"><strong>Screen : </strong> ${data.mainFeatures.displaySize}</h5>
                   <h5 class="card-title"><strong>Memory : </strong> ${data.mainFeatures.memory}</h5>
                   <h5 class="card-title"><strong>Sensors : </strong> ${data.mainFeatures.sensors}</h5>
                   <h5 class="card-title"><strong>Storage : </strong> ${data.mainFeatures.storage}</h5>
                    
               </div >
           </div >
           </div >
    `
    displayPhone.appendChild(div);

}


{/* <h5 class="card-title"><strong>Others : </strong>Bluetooth:  ${data.others.Bluetooth}, GPS : ${data.others.GPS}, NFC : ${data.others.NFC}, Radio : ${data.others.Radio}, USB : ${data.others.USB}, WLAN : ${data.others.WLAN}</h5> */ }