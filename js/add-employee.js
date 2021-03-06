// HANDLE THE LOAD EVENT OF THE WINDOW
window.onload = function() {
    // SET WIDTH AND HEIGHT VARIABLES TO 800 x 700
    let width = 800
    let height = 700
    // RESIZE THE POPUP TO THE SET WIDTH AND HEIGHT
    window.resizeTo(width, height)
    // MOVE THE POPUP TO THE MIDDLE OF THE SCREEN
    window.moveTo(((window.screen.width - width) / 2), ((window.screen.height - height) / 2))
    // CREATE A HELPER FUNCTION TO RETRIEVE THE HTML ELEMENTS FROM THE DOM
    var $ = (id) => document.getElementById(id)
    // HANDLE THE CANCEL BUTTON. WHEN THE USER CLICKS THIS BUTTON, CLOSE THE WINDOW
    let cancel = $('cancel')
    cancel.addEventListener('click', () => {
        // OPEN THE ADD-EMPLOYEE.HTML PAGE WITHIN A POPUP
        window.close()
    })
    // HANDLE THE SUBMISSION OF THE FORM AND THEN IMMEDIATELY PREVENT THE SUBMISSION
    let empForm = $('empForm')
    empForm.addEventListener('submit', (e) => {
        e.preventDefault()
        let id = $('id').value
        let name = $('name').value
        let ext = $('extension').value
        let email = $('email').value
        let dept = $('department').value
        let parentOutput = window.opener.document.getElementById('loginDetails')
        // SET THE TEXT OF THE LOGINDETAILS ELEMENT TO THE ABOVE SET VARIABLES
        parentOutput.innerHTML = `ID: ${id} <br> Name: ${name} <br> Extension: ${ext} <br> Email: ${email} <br> Department: ${dept}`
    })
    // CLOSE THE POPUP
    empForm.addEventListener('submit', () => {
        window.close()
    })
    // THE DATA SHOULD SHOW ON THE INDEX.HTML PAGE
}