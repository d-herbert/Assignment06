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
    })
    // CREATE 5 VARIABLES FOR ID, NAME, EXT, EMAIL, AND DEPT
    // SET THOSE VARIABLES TO WHATEVER THE USER ENTERS INTO THE FORM ELEMENTS
    let id = $('id').value
    let name = $('name').value
    let ext = $('extension').value
    let email = $('email').value
    let dept = $('department').value
    // id = parseInt(id.value)
    // name = String(name.value)
    // ext = parseInt(ext.value)
    // email = String(email.value)
    // dept = String(dept.value)

    // GET THE LOGINDETAILS OUTPUT ELEMENT FROM THE PARENT PAGE
    let parentOutput = window.opener.document.getElementById('loginDetails')
    // SET THE TEXT OF THE LOGINDETAILS ELEMENT TO THE ABOVE SET VARIABLES
    parentOutput.innerHTML = `ID: ${id} \nName: ${name} \nExtension: ${ext} \nEmail: ${email} \nDepartment: ${dept}`
    

    // CLOSE THE POPUP
    empForm.addEventListener('submit', () => {
        window.close()
    })

    // THE DATA SHOULD SHOW ON THE INDEX.HTML PAGE
    
}