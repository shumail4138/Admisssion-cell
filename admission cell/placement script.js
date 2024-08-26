// Example JavaScript code for dynamically generating job listings

const jobList = document.getElementById('jobList');

// Mock job data
const jobs = [
  { title: 'Software Engineer', company: 'TechCorp', location: 'New York', description: 'Developing software applications.' },
  { title: 'Data Analyst', company: 'DataWorks', location: 'San Francisco', description: 'Analyzing and interpreting data.' },
  { title: 'Marketing Manager', company: 'GrowthCo', location: 'Chicago', description: 'Creating marketing campaigns.' }
];

// Function to display job listings
function displayJobs() {
  jobList.innerHTML = '';
  jobs.forEach(job => {
    const li = document.createElement('li');
    li.innerHTML = `
      <h3>${job.title}</h3>
      <p><strong>Company:</strong> ${job.company}</p>
      <p><strong>Location:</strong> ${job.location}</p>
      <p><strong>Description:</strong> ${job.description}</p>
    `;
    jobList.appendChild(li);
  });
}

// Call the function to display job listings
displayJobs();


const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
  
