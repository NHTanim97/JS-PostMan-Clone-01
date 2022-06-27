console.log('Tanim');

// Utility function
// 1. Utility function to get DOM element from string
function getElementFromString (string){
    let div = document.createElement('div')
    div.innerHTML = string
    return div.firstElementChild;
}


// Initialize num of params
let addedParmsCount = 0;

// Hide the parameter Box initially
let  parametersBox = document.getElementById('parametersBox');
parametersBox.style.display = 'none'


// if the user clicks on Custom Parameters hide the json box
let customRadio = document.getElementById('customRadio');
customRadio.addEventListener('click', ()=>{
    document.getElementById ('requstJsonBox').style.display = 'none';
    document.getElementById('parametersBox').style.display = 'block';
    document.getElementById('params').style.display = 'block';
})


// if the user clicks on JSON hide the Custom Parameters box
let jsonRadio = document.getElementById('jsonRadio');
jsonRadio.addEventListener('click', ()=>{
    document.getElementById('requstJsonBox').style.display = 'block';
    document.getElementById('parametersBox').style.display = 'none';
    document.getElementById('params').style.display = 'none';
})


// if the user clicks on + plus button add more parameters
let addParms = document.getElementById('addParms');
addParms.addEventListener('click', ()=>{
    let params = document.getElementById('params')
    let string = `<div class="row py-2">
                    <label for="url" class="col-sm-2 col-form-label">${addedParmsCount + 2}</label>
                    <div class="col-md-4">
                    <input type="text" class="form-control" id="paraKye${addedParmsCount + 2}" placeholder="Enter Parameter ${addedParmsCount + 2} key">
                    </div>

                    <div class="col-md-4">
                    <input type="text" class="form-control" id="paraValue${addedParmsCount + 2}" placeholder="Enter Parameter ${addedParmsCount + 2} value">
                    </div>
                    <div class="col-md-2">
                    <button class="btn btn-primary deleteParm"> - </button>
                    </div>
                </div>`;

    // Convert the element string to DOM node
    let parmsElement = getElementFromString(string);
    params.appendChild(parmsElement);

    // add an event listener to remove the parameter on clicking - button
    let deleteParm = document.getElementsByClassName('deleteParm');
    for (item of deleteParm){
        item.addEventListener('click', (e)=>{
            e.target.parentElement.remove();
        })
    }


    addedParmsCount ++;



})
