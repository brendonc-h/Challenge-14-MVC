const postId = document.querySelector('input[name="post-id"]').value;

const editForm= async function(event) {
    event.preventDefault();

    const postTitle = document.querySelector('input[name="post-title]').value;
    const postBody = document.querySelector('textarea[name="post-body]').value;;

    await fetch(`/api/post/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({
            postTitle, 
            postBody
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    document.location.replace('/dashboard');
};

const deleteClick = async function() {
    await fetch(`/api/post/${postId}`, {
        method: 'Delete'
    });
    document.location.replace('/dashboard');
};

document
    .querySelector('#edit-post-form')
    .addEventListener('submit', editForm);
document
    .querySelector('#delete-btn')
    .addEventListener('click', deleteClick)