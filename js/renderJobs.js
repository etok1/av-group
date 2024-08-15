function jobsList() {
  const wrapper = document.querySelector(".main__jobs-list");
  jobs.forEach((job) => {
    let element = document.createElement("li");
    element.textContent = job;
    wrapper.appendChild(element);
  });
}

function studyList() {
  const wrapper = document.querySelector(".main__study-list");
  study.forEach((s) => {
    let element = document.createElement("li");
    element.textContent = `${s.title} - ${s.duration}`;
    wrapper.appendChild(element);
  });
}

function options() {
  const wrapper = document.querySelector(".main__job-selection");
  study.forEach((s) => {
    let element = document.createElement("option");
    element.value = s.title;
    element.textContent = s.title;
    wrapper.appendChild(element);
  });
}

options();
studyList();
jobsList();
