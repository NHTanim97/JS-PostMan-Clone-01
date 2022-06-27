// Utility functions:
// 1. Utility function to get DOM element from string
function getElementFromString(string) {
    let div = document.createElement('div');
    div.innerHTML = string;
    return div.firstElementChild;
}

// Initialize no of parameters
let addedParamCount = 0;

// Hide the parameters box initially
let parametersBox = document.getElementById('parametersBox');
parametersBox.style.display = 'none';

// If the user clicks on params box, hide the json box
let customRadio = document.getElementById('customRadio');
customRadio.addEventListener('click', () => {
    document.getElementById('requstJsonBox').style.display = 'none';
    document.getElementById('parametersBox').style.display = 'block';
    // document.getElementById('params').style.display = 'block';
})

// If the user clicks on json box, hide the params box
let jsonRadio = document.getElementById('jsonRadio');
jsonRadio.addEventListener('click', () => {
    document.getElementById('requstJsonBox').style.display = 'block';
    document.getElementById('parametersBox').style.display = 'none';
    // document.getElementById('params').style.display = 'none';
})

// If the user clicks on + button, add more parameters
let addParms = document.getElementById('addParms');
addParms.addEventListener('click', () => {
    let params = document.getElementById('params');
    let string = `<div class="row py-2">
                        <label for="url" class="col-sm-2 col-form-label">Parameter ${addedParamCount + 2}</label>
                        <div class="col-md-4">
                            <input type="text" class="form-control" id="parameterKey${addedParamCount + 2}" placeholder="Enter Parameter ${addedParamCount + 2} Key">
                        </div>
                        <div class="col-md-4">
                            <input type="text" class="form-control" id="parameterValue${addedParamCount + 2}" placeholder="Enter Parameter ${addedParamCount + 2} Value">
                        </div>
                        <div class="col-md-2">
                        <button class="btn btn-primary deleteParam"> - </button>
                        </div>
                    </div>`;
    // Convert the element string to DOM node
    let paramElement = getElementFromString(string);
    params.appendChild(paramElement);
    // Add an event listener to remove the parameter on clicking - button
    let deleteParam = document.getElementsByClassName('deleteParam');
    for (item of deleteParam) {
        item.addEventListener('click', (e) => {
            // TODO: add a confirmation box to confirm parameter deletion
            e.target.parentElement.remove();
        })
    }
    addedParamCount++;
})