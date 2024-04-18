const title = document.getElementById('title').value;
const description = document.getElementById('desc').value;

function addToDO(){
    //console.log(title,description);
    document.getElementById('container').
    innerHTML=`
        <div>
            <div>Title: ${title}</div>
            <br>
            <div>Description: ${description}</div>
            <br>
            <button>Mark as done</button>
        </div>    
    `    
}