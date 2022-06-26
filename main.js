console.log('hello')

document.querySelector('#getButton').addEventListener('click', apiRequest)

async function apiRequest() {
    const alienName = document.querySelector('input').value
    try {
        const response = await fetch(`https://star-trek-api-demo-test.herokuapp.com/api/${alienName}`)
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}