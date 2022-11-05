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
    description: "Public",
    type: "Javascript"
  },
];

const packages = [
  {
    id: 1,
    name: "",
    registry: "",
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

const overview = [
  {
    id: 1,
    repoName: "",
    favorite: true,
  },
];

// Render to Dom Function
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

const repoFormOnDom = (array) => {
  let domString ="";
  domString +=
  `<form id="new-repo">
      <div class="name">
        <label for="name" class="name">new repository</label>
        <input type="text" class="form-control" id="name" aria-describedby="name">
      </div>

      <div class="decription">
        <label for="decription" class="description">description</label>
        <input type="text" class="form-control" id="description" aria-describedby="description">
      </div>

      <div class="type">
        <label for="type" class="type">type</label>
        <input type="text" class="form-control" id="type" aria-describedby="type">
      </div>
  
      <button type="submit" class="btn btn-primary" id="Submit">Add</button>
    </form>`
    renderToDom("#repo-form", domString);

};

const reposOnDom = (array) => {
  let domString = " ";
  for (const repo of array) {
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



// Allows user to create repo



const newRepos = (e) => {
  e.preventDefault();

  const newrepo = {
    id: repos.length + 1,
    name: document.querySelector("#name").value,
    description: document.querySelector("#description").value,
    type: document.querySelector("#type").value,
  
  }

  repos.push(newrepo);
  reposOnDom(repos);
  repoform.reset();
  console.log("works");
}

//repoform.addEventListener('submit', newRepos);




// Makes form for Packages Page
const packageFormOnDom = () => {
  let domString = "";
  domString += 
  `<form>
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
  let domString = "";
  for (const item of array) {
    domString +=`
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

  renderToDom("#package-card", domString);

};

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
        domString += `<form id="pinForm">
        <div class="form-floating mb-3">
        <input type="text" class="form-control" id="pinRepoName">
        <label for="floatingInput">Repository Name</label>
        </div>
        <ul>
        <li><div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
          ${repos.name}
        </label>
      </div></li>
        </ul>
        <div class="form-check form-switch">
         <input class="form-check-input" type="checkbox" role="switch" id="favorite">
         <label class="form-check-label" for="flexSwitchCheckDefault">Favorite</label>
        </div>
        <button type="submit" class="btn btn-primary">Pin</button>
      </form>`
      renderToDom("#pinnedForm", domString);
    };

const createPin = (e) => {
      e.preventDefault();
     
      const createId = (array) => {
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

      const newPinnedObj = {
        id: createId(pinned),
        repoName: document.querySelector("#pinRepoName").value,
        favorite: document.querySelector("#favorite").checked,
      }
    
      pinned.push(newPinnedObj);
      pinsOnDom(pinned);
      pinForm.reset();  
    };
    
    // pinnedForm.addEventListener('submit', createPin);  

const pagesClear = () => {
  let bodyString = "";
  renderToDom("#overview", bodyString);
  renderToDom("#projects", bodyString);
  renderToDom("#packages", bodyString);
  renderToDom("#repositories", bodyString);
}; 

const renderOverviewSkel = () => {
  const overviewSkel = `<h1>Overview Page</h1>
  <div id="pinnedForm"></div>
  <div id="overview"></div>
  <div id="pinnedCards"></div>`
  renderToDom("#overview", overviewSkel);
};

const renderPackagesSkel = () => {
  const packagesSkel = `<h1>Packages Page</h1>
  <div id="package-card"></div>
  <div id="package-form"></div>`
  renderToDom("#packages", packagesSkel);
};

const renderRepoSkel = () => {
  const reposSkel = `
  <h1>Repositories</h1> 
    <div id="get"></div>
    <div id="repo-form"></div>`
  renderToDom("#repositories", reposSkel);
  const repoform = document.querySelector('#repo-form');
  repoform.addEventListener('submit', newRepos);
};


const overviewPageBtn = document.querySelector("#overviewBtn");
overviewPageBtn.addEventListener('click', () => {
  pagesClear();
  renderOverviewSkel();
  pinsOnDom(pinned);
  pinnedFormOnDom();
 
});

const packagesPageBtn = document.querySelector("#packagesBtn");
packagesPageBtn.addEventListener('click', () => {
  pagesClear();
  renderPackagesSkel();
  packageFormOnDom();
  packageOnDom(packages);
  
});

const ReposPageBtn = document.querySelector("#reposBtn");
ReposPageBtn.addEventListener('click', () => {
  pagesClear();
  renderRepoSkel();
  reposOnDom(repos);
  repoFormOnDom();
  
  
});

/*const startApp = () => {
  //projectsOnDom(projects);
  //reposOnDom(repos);
  pinsOnDom(pinned);
  pinnedFormOnDom();
  packageOnDom(packages);
  packageFormOnDom();
  events();
  //pinsOnDom(pinned);
  //pinnedFormOnDom();

 };*/
 
startApp();
