const scriptURL = 'https://script.google.com/macros/s/AKfycbzUpDkaWNb8At5LUaKgCIDMeYA-AvO8W8eH8ovcxNdu-EWHinrMbfoLg6dcChv-cv_wqw/exec'

const form = document.forms['contact-us-form']

form.addEventListener('submit', e=>
{
    e.preventDefault()
    fetch(scriptURL,{method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! Your form is submitted Succesfully."))
    .then(()=>{window.location.reload();})
    .catch(error => console.error('Error!',errormessage))
}
    )