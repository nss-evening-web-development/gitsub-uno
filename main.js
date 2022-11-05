console.log("does this work?");
// data structures
const user=[
  { name: 'Crystal Burnett',
    socials: [
      {
      smName: 'Twitter',
      url: 'https://twitter.com'
    },
    {
      smName: 'LinkedIn',
      url: 'https://linkedin'
    },
    ]
}
];

const repos = [
  {
    id: 1,
    name: "Tester",
    description: "",
    type: ""
  },
];

const packages = [
  {
    id: 1,
    name: "Original JS",
    description: "My first javascript thing",
    registry: "npm",
  },
];

const projects =[
    {
    id: 1,
    name: "Calculator",
    description:"A non-functioning calculator built with CSS",
    lastUpdated:"10/05/2022",
    },
    {
      id: 2,
      name:"Pet Adoption",
      description: "A pet adoption form that allows you to filter, add, and adopt pets",
      lastUpdated: "10/12/2022",
    },
    {
      id: 3,
      name:"Sorting Hat",
      description: "A simple quiz that randomly sorts users into a Hogearts house and expels them",
      lastUpdated: "10/12/2022",
    },
    {
        id: 4,
        name:"Leap Frog Game",
        description: "Simple game of leapfrog made using elements from Bootstrap ",
        lastUpdated: "10/19/2022",
    },
    {
        id: 5,
        name:"CSS Diner",
        description: "A project that somehow ties what we've learned with CSS and a diner together",
        lastUpdated: "10/26/2022",
     },
  ];

const pinned = [
  {
    id: 1,
    repoName: "Pet Adoption",
    favorite: true,
  },
];

// Render to Dom Function
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

const reposOnDom = (repos) => {
  let domString = " ";
  for (const repo of repos) {
    domString += `
    <div class="card" style="width: 18rem;">
    <h5 class="card-title">${repo.name}</h5>
    <div class="card-body">
      <p class="card-team">${repo.description}</p>
      <p class="card-traits">${repo.type}</p>
     </div>
  </div>`;
  }

  renderToDom("#get", domString);
};

reposOnDom(repos);

// Makes form/cards for Packages Page
const packageFormOnDom = () => {
  let domString = "";
  domString += 
  `<form id="packageReset">
  <div class="mb-3">
    <label for="packageName" class="form-label">Package</label>
    <input type="text" class="form-control" id="packageName">
  </div>
  <div class="mb-3">
    <label for="packageDescription" class="form-label">Description</label>
    <input type="text" class="form-control" id="packageDescription">
  </div>
  <div class="mb-3">
  <label for="packageRegistry" class="form-label">Registry</label>
  <input type="text" class="form-control" id="packageRegistry">
</div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>`

renderToDom("#package-form", domString);
};

const packageOnDom = (array) => {
  let domString2 = "";
  for (const item of array) {
    domString2 +=`
      <div class="card" style="width: 18rem" text-center container">
        <h5 class="card-header p-3">
          ${item.name}
        </h5>
        <div class="card-body">
          <p class="card-text">${item.description}</p>
          <button class="btn btn-danger" id="learn">Learn More</button>
        </div>
        <p class="card-footer text-muted">
          ${item.registry}
        </p>
      </div>`
  }

  renderToDom("#package-card", domString2);

};

const newId = (array) => {
  if (array.length) {
    const idArray = [];
    for (const el of array) {
      idArray.push(el.id);
    }
    return Math.max(...idArray) + 1;
  } else {
    return 0;
  }
}

const repoForm = document.querySelector("#new-repo");

const createRepo = (e) => {
  e.preventDefault();

  const repoObj = {
    id: repos.length + 1,
    name: document.querySelector("#name").value,
  }

  repos.push(repoObj);
  reposOnDom(repos);
  console.log(repos);
};

repoForm.addEventListener('submit', createRepo);

const packageForm = document.querySelector("#package-form");

const createPackage = (e) => {
  e.preventDefault();

  const packageObj = {
    id: newId(packages),
    name: document.querySelector("#packageName").value,
    description: document.querySelector("#packageDescription").value,
    registry: document.querySelector("#packageRegistry").value,
  }

  packages.push(packageObj);
  packageOnDom(packages);
  packageReset.reset();
  console.log(packages);
};

packageForm.addEventListener('submit', createPackage);

// Creates Cards for the Projects page
const projectsOnDom = (array)=> {
  let domString="";
  for (const member of array) {
    domString+=
    `<div class="card-header">
        <h3>
        ${member.name}  
        </h3>
    <div class="card-body">
         ${member.description} 
        
        <p class="card-text"> Last Updated:${member.lastUpdated}</p>
        </div>
  
    </div>
    `;
    }
  
    renderToDom("#root", domString);
  }

  const projectForm = document.querySelector('#projectForm');


// Allows user to add a project
const createProject=(e)=>{
  e.preventDefault();
 
  const newProjectObj={
   id: projects.length +1,
   name: document.querySelector('#projectName').value,
   description: document.querySelector('#projectDescription').value,
   lastUpdated: document.querySelector('#lastUpdated').value,
    
 }
projects.push(newProjectObj)
projectsOnDom(projects)
projectForm.reset();
 }
 
projectForm.addEventListener('submit', createProject);
  
 // Creates card for pinned repos
const pinsOnDom = (array) => {
    let domString = "";
      for (const pinned of array) {
        domString += `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${pinned.repoName}</h5>
          <p class="card-text favorite">${pinned.favorite}</p>
        </div>
      </div>`
        }
    
      renderToDom("#pinnedCards", domString);
    };

// Allows user to pin repos
 const pinnedFormOnDom = (array) => {
      let domString = "";
        domString += `<form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>`
      renderToDom("#pinnedForm", domString);
    };

const startApp = () => {
  projectsOnDom(projects);
  pinsOnDom(pinned);
  pinnedFormOnDom();
  packageOnDom(packages);
  packageFormOnDom();
 };

 const targetDiv = document.querySelector("#repositories");
 const btn = document.querySelector("#reposBtn");
 btn.onclick = () => {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none"; 
  } else {
    targetDiv.style.display = "block"
  }
 };

 
 startApp();
