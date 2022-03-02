// call Api Phone Search
const searchPhone = () => {
    const searchBox = document.getElementById('search-box');
    const searchText = searchBox.value;
    // clear data

    searchBox.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

    // load data
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhone(data.data));
}
// Display search Result
const displayPhone = data => {
    const searchPhoneResult = document.getElementById('search-result');
    const displayPhone = document.getElementById('phone-details');
    const first20Data = data.slice(0, 20);
    const error = document.getElementById('error');
    // Clean text Content
    searchPhoneResult.textContent = '';
    displayPhone.textContent = '';
    // Error Handel of search
    if (data.length == 0) {
        error.innerText = "'Sorry! No result found on Mobile Bazer'"
    }
    else {
        first20Data.forEach(singleData => {
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
            <div class="m-auto" style="width: 18rem;">
                        <img src="${singleData.image}" class="card-img-top" alt="..."  style="width=80%" height="70%">
                        <div class="card-body text-center">
                           <h3 class="card-text text-center">${singleData.brand}</h3>
                            <h5 class="card-title text-center">${singleData.phone_name}</h5>
                            <a href="#" id="" onclick="loadphoneDetails('${singleData.slug}')" class="btn btn-primary ">Details</a>
                        </div>
                    </div>
            `;
            searchPhoneResult.appendChild(div);
        })
        error.innerText = "";
    }

}
// call Api details
const loadphoneDetails = id => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    // load data
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetails(data.data))
}

// Display Phone Details
const displayPhoneDetails = data => {
    const displayPhone = document.getElementById('phone-details');
    displayPhone.textContent = '';
    const div = document.createElement('div');
    div.classList.add('col');
    // Error Handel of Release Date & Others Option
    if (data.others != undefined && data.releaseDate != '') {
        div.innerHTML = `
        <div class="row g-0 card">
               <div class="col-md-6 col-sm-12 text-center" >
               <img src="${data.image}" class="img-fluid rounded-start" style="height:100%" alt="...">
               <h5 class="card-title">${data.name}</h5>
               <p class="card-title"><small class="text-muted">${data.releaseDate}</small></p>
               </div>
               <div class="col-md-6 col-sm-12 pt-5">
                   <div class="card-body">
                       <h5 class="card-title"><strong>Brand : </strong> ${data.brand}</h5>
                       <h5 class="card-title"><strong>Processor : </strong> ${data.mainFeatures.chipSet}</h5>
                       <h5 class="card-title"><strong>Screen : </strong> ${data.mainFeatures.displaySize}</h5>
                       <h5 class="card-title"><strong>Memory : </strong> ${data.mainFeatures.memory}</h5>
                       <h5 class="card-title"><strong>Sensors : </strong> ${data.mainFeatures.sensors}</h5>
                       <h5 class="card-title"><strong>Storage : </strong> ${data.mainFeatures.storage}</h5>
                       <p class="card-title"><small class="text-muted"><strong>Others : </strong>${data.others.Bluetooth}, GPS : ${data.others.GPS}, NFC : ${data.others.NFC}, Radio : ${data.others.Radio}, USB : ${data.others.USB}, WLAN : ${data.others.WLAN}</small></p>
                       </div>
                   </div >
               </div >
               </div >
        `;
    }
    else if (data.others != undefined && data.releaseDate == '') {
        div.innerHTML = `
        <div class="row g-0 card">
               <div class="col-md-6 col-sm-12 text-center" >
               <img src="${data.image}" class="img-fluid rounded-start" style="height:100%" alt="...">
               <h5 class="card-title">${data.name}</h5>
               <p class="card-title"><small class="text-muted">${data.releaseDate} No Release Date Found</small></p>
               </div>
               <div class="col-md-6 col-sm-12 pt-5">
                   <div class="card-body">
                       <h5 class="card-title"><strong>Brand : </strong> ${data.brand}</h5>
                       <h5 class="card-title"><strong>Processor : </strong> ${data.mainFeatures.chipSet}</h5>
                       <h5 class="card-title"><strong>Screen : </strong> ${data.mainFeatures.displaySize}</h5>
                       <h5 class="card-title"><strong>Memory : </strong> ${data.mainFeatures.memory}</h5>
                       <h5 class="card-title"><strong>Sensors : </strong> ${data.mainFeatures.sensors}</h5>
                       <h5 class="card-title"><strong>Storage : </strong> ${data.mainFeatures.storage}</h5>
                       <p class="card-title"><small class="text-muted"><strong>Others : </strong>${data.others.Bluetooth}, GPS : ${data.others.GPS}, NFC : ${data.others.NFC}, Radio : ${data.others.Radio}, USB : ${data.others.USB}, WLAN : ${data.others.WLAN}</small></p>
                       </div>
                   </div >
               </div >
               </div >
        `;
    }
    else if (data.others == undefined && data.releaseDate == '') {
        div.innerHTML = `
        <div class="row g-0 card">
               <div class="col-md-6 col-sm-12 text-center" >
               <img src="${data.image}" class="img-fluid rounded-start" style="height:100%" alt="...">
               <h5 class="card-title">${data.name}</h5>
               <p class="card-title"><small class="text-muted">${data.releaseDate} No Release Date Found</small></p>
               </div>
               <div class="col-md-6 col-sm-12 pt-5">
                   <div class="card-body">
                       <h5 class="card-title"><strong>Brand : </strong> ${data.brand}</h5>
                       <h5 class="card-title"><strong>Processor : </strong> ${data.mainFeatures.chipSet}</h5>
                       <h5 class="card-title"><strong>Screen : </strong> ${data.mainFeatures.displaySize}</h5>
                       <h5 class="card-title"><strong>Memory : </strong> ${data.mainFeatures.memory}</h5>
                       <h5 class="card-title"><strong>Sensors : </strong> ${data.mainFeatures.sensors}</h5>
                       <h5 class="card-title"><strong>Storage : </strong> ${data.mainFeatures.storage}</h5>
                       </div>
                   </div >
               </div >
               </div >
        `;
    }
    else {
        div.innerHTML = `
        <div class="row g-0 card">
               <div class="col-md-6 col-sm-12 text-center" >
               <img src="${data.image}" class="img-fluid rounded-start" style="height:100%" alt="...">
               <h5 class="card-title">${data.name}</h5>
               <p class="card-title"><small class="text-muted">${data.releaseDate}</small></p>
               </div>
               <div class="col-md-6 col-sm-12 pt-5">
                   <div class="card-body">
                       <h5 class="card-title"><strong>Brand : </strong> ${data.brand}</h5>
                       <h5 class="card-title"><strong>Processor : </strong> ${data.mainFeatures.chipSet}</h5>
                       <h5 class="card-title"><strong>Screen : </strong> ${data.mainFeatures.displaySize}</h5>
                       <h5 class="card-title"><strong>Memory : </strong> ${data.mainFeatures.memory}</h5>
                       <h5 class="card-title"><strong>Sensors : </strong> ${data.mainFeatures.sensors}</h5>
                       <h5 class="card-title"><strong>Storage : </strong> ${data.mainFeatures.storage}</h5>
                       </div>
                   </div >
               </div >
               </div >
        `;
    }
    displayPhone.appendChild(div);
}

