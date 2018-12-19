//Personalizacion del template

//0-Obtener Datos de configuracion
const url = "https://gist.githubusercontent.com/maaroarg/7789bb117e09ca689afcff3ffc717b8f/raw/1a7c80a83e29df5393f3befdaa2d920dd1eff2ad/startBootstrap.admin.json";
fetch(url)
.then(response=>response.json())
.then(config=>{
  console.log("config", config);

  //1-Actualizar Titulos
  const h1 = document.querySelector("h1");
  const navbar = document.querySelector(".navbar-brand");
  h1.innerText = config.title;
  navbar.innerText = config.title;

  //2-Actualizar Portfolio
  const portfolio = document.querySelector(".portfolio .row");
  config.portfolio.map((p,index)=>{
    portfolio.innerHTML += `
      <div class="col-md-6 col-lg-4">
        <a class="portfolio-item d-block mx-auto">
          <img class="img-fluid" src="${p.image}?${index}" alt="${p.name}" title="${p.name}">
        </a>
      </div>
    `;
  });
})
