document.getElementById('btn1').addEventListener('click',loaddata);
document.getElementById('btn2').addEventListener('click',loaddata1);
document.getElementById('btn3').addEventListener('click',loaddata2);

function loaddata(){
fetch('text.txt').then(function(res){
console.log(res)
return res.text();
})
.then(function(data){
    console.log(data)
    document.getElementById('output').innerHTML=data;
})
.catch(function(err){
    console.log(Error)
})
}

//GET JSON 

function loaddata1(){
    fetch('post.json').then(function(res){
        console.log(res)
        return res.json();
        })
        .then(function(data){
            console.log(data)
            let output='';
        data.forEach(function(data1) {
                output+=`<li>${data1.title}</li>
                <li>${data1.body}</li>`
                
            });
            
            document.getElementById('output').innerHTML=output;
        })
        .catch(function(err){
    console.log('Error')

})
}
// External Fetch API
function loaddata2(){
    fetch('https://api.github.com/users').then(function(res){
        console.log(res)
        return res.text();
        })
    .then(function(data){
         console.log(data)
        //     let output='';
        // data.forEach(function(data1) {
        //         output+=`<li>${data1.title}</li>
        //         <li>${data1.body}</li>`
                
        //     });
            
            document.getElementById('output').innerHTML=data;
        })
        .catch(function(err){
    console.log('Error')

})
}

