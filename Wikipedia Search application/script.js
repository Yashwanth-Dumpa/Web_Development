let searchInputEle = document.getElementById("searchInput");
let searchResultEle = document.getElementById("searchResults");
let spinnerEle = document.getElementById("spinner");

function createAndAppendSearchResult(result) {
    //Creating result item
    let resultItemEle = document.createElement("div");
    resultItemEle.classList.add("result-item");
    searchResultEle.appendChild(resultItemEle);

    //Creating title element
    let {
        title,
        link,
        description
    } = result;
    let resultTitleEle = document.createElement("a");
    resultTitleEle.href = link;
    resultTitleEle.target = "_blank";
    resultTitleEle.textContent = title;
    resultTitleEle.classList.add("result-title");
    resultItemEle.appendChild(resultTitleEle);

    //Creating break element
    let titleBreakEle = document.createElement("br");
    resultItemEle.appendChild(titleBreakEle);

    //Creating url element
    let urlEle = document.createElement("a");
    urlEle.href = link;
    urlEle.textContent = link;
    urlEle.target = "_blank";
    urlEle.classList.add("result-url");
    resultItemEle.appendChild(urlEle);

    //Creating break element
    let linkBreakEle = document.createElement("br");
    resultItemEle.appendChild(linkBreakEle);
    //Creating description element
    let descriptionEle = document.createElement("p");
    descriptionEle.classList.add("link-description");
    descriptionEle.textContent = description;
    resultItemEle.appendChild(descriptionEle);
}

function displayResults(searchResults) {
    spinnerEle.classList.toggle('d-none');
    for (let result of searchResults) {
        createAndAppendSearchResult(result);
    }
}

function wikipediaSearch(event) {
    if (event.key === "Enter") {
        spinnerEle.classList.toggle('d-none');
        searchResultEle.textContent = "";
        let searchText = searchInputEle.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchText;
        console.log(url);
        let options = {
            method: "GET"
        };
        fetch(url, options).then(function(response) {
                return response.json();
            })
            .then(function(jsondata) {
                let {
                    search_results
                } = jsondata;
                displayResults(search_results);
            });
    }
}

searchInputEle.addEventListener("keydown", wikipediaSearch);