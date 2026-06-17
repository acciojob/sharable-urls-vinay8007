const nameInput = document.getElementById("name");
const yearInput = document.getElementById("year");
const submitBtn = document.getElementById("button");
const urlHeader = document.getElementById("url");

submitBtn.addEventListener('click', function(event){
  event.preventDefault();

  let baseUrl = "https://localhost:8080/";

  let nameValue = nameInput.value.trim();
  let yearValue = yearInput.value.trim();
  let queryParams = [];

  if(nameValue !== ""){
    queryParams.push(`name=${encodeURIComponent(nameValue)}`);
  }
  if(yearValue !== ""){
    queryParams.push(`year=${encodeURIComponent(yearValue)}`);
  }
  if(queryParams.length > 0){
    urlHeader.textContent = baseUrl + "?" + queryParams.join("&");
  } else {
    urlHeader.textContent = baseUrl;
  }
});
