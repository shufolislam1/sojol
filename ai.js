const fetchCategories = () => {
    fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then((res) => res.json())
        .then((data) => showCategories(data.data));
};

const showCategories = (data) => {
    const categoriesContainer = document.getElementById('categories-container');
    data.tools.forEach((tool) => {
        const { image, features, name, published_in, id } = tool;
        const showDiv = document.createElement('div');
        showDiv.classList.add('col');
        showDiv.innerHTML = `
            <div class="card h-100">
                <img src="${image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Features</h5>
                    <p class="card-text">
                        <ol>
                            <li>${features[0]}</li>
                            <li>${features[1]}</li>
                            <li>${features[2]}</li>
                        </ol>
                    </p>
                </div>
                <div class="container d-flex flex-column">
                    <i class="fa-solid fa-calendar-days"></i>
                    <p class="fw-bold">${name}</p>
                    <div class="d-flex ">
                    <a href="https://ibb.co/P95ThDm"><img src="https://i.ibb.co/wwKJWc0/icons8-calendar-32.png" alt="icons8-calendar-32" border="0"></a>
                    <p class="fw-bold">${published_in}</p>
                    </div>
                </div>
                <div>
                    <button type="button" class="btn btn-outline-danger" onclick="fetchDetails('${id}')" data-bs-toggle="modal" data-bs-target="#exampleModal"><img src="https://i.ibb.co/N1dmQB5/icons8-right-arrow-50.png" alt="icons8-right-arrow-50" border="0"></button>
                    
                </div>
            </div>
        `;
        categoriesContainer.appendChild(showDiv);
    });
};

const fetchDetails = (id) => {
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
   fetch(url).then(res => res.json()).then(data=> showNewsDetail(data.data))
};
const showNewsDetail = newsDetail =>{
    console.log(newsDetail);
    const { image, features, name, published_in, id,integrations,image_link
    } = newsDetail;
    console.log(name);
document.getElementById("modal-body").innerHTML = `
        <div class="col">
        <div class="card h-100">
            <img src="${image_link[0]
            }" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Features</h5>
                <p class="card-text">
                    <ol>
                        <li>${features.description
                        }</li>
                    </ol>
                </p>
            </div>
            <div class="container d-flex flex-column">
                <i class="fa-solid fa-calendar-days"></i>
                <p class="fw-bold">${features.feature_name}</p>
                <p class="fw-bold">${integrations[0]}</p>
            </div>
            <div>
                <button type="button" class="btn btn-outline-danger" onclick="fetchDetails('${id}')" data-bs-toggle="modal" data-bs-target="#exampleModal"><img src="https://i.ibb.co/N1dmQB5/icons8-right-arrow-50.png" alt="icons8-right-arrow-50" border="0"></button>
            </div>
        </div>
        </div>`;
        
       

}




















































// // modal
// const fetchDetails = (id) => {
//     const url = https://openapi.programming-hero.com/api/ai/tool/01;
//     fetch(url)
//       .then(res => res.json())
//       .then(data => {
//         const { name, image, features, description } = data.data;
//         const detailsContainer = document.getElementById('detailsContainer');
//         detailsContainer.innerHTML = `
//           <div class="row">
//             <div class="col-md-4">
//               <img src="${image}" class="img-fluid" alt="${name}">
//             </div>
//             <div class="col-md-8">
//               <h4>${name}</h4>
//               <ul>
//                 <li>${features[0]}</li>
//                 <li>${features[1]}</li>
//                 <li>${features[2]}</li>
//               </ul>
//               <p>${description}</p>
//             </div>
//           </div>
//         `;
//         $('#detailsModal').modal('show');
//       });
//   };