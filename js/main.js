// HANDLE THE LOAD EVENT OF THE WINDOW
window.onload = function() {
    // HANDLE THE CLICK EVENT FOR THE BTNADDEMPLOYEE BUTTON
    window.document.getElementById('btnAddEmployee').addEventListener('click', () => {
        // OPEN THE ADD-EMPLOYEE.HTML PAGE WITHIN A POPUP
        window.open('add-employee.html','emp', 'width=100, height=100')
    })
}