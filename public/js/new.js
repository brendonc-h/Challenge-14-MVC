const formEl = document.querySelector('#new-post-form')

const newForm = async function(event) {
    event.preventDefault();
    console.log('active');
    const title = document.querySelector('#title-input').value;
    const body = document.querySelector('#body-input').value;

    await fetch('/api/post' , {
        method: 'POST',
        body: JSON.stringify({
            title, 
            body,
        }),
        headers: { 'Content-Type': 'application/json'},
    });

    document.location.replace('/dashboard');
};


    formEl.addEventListener('submit', newForm);

    console.log(formEl);