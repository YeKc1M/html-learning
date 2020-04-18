const axios=require('axios').default

function AXIOS(){
    alert('AXIOS')
    axios({
        method:'post',
        url:'json',
        data:{
            name:document.getElementById('name1').innerHTML
        }
    })
    .then(function(response){
        alert(response)
    })
    .catch(function(error){
        alert(error)
    })
}