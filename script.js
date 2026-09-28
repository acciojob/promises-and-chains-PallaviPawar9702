const form = document.getElementById("form")
form.addEventListener("submit", function(event){
	event.preventDefault();
	let age = document.getElementById("age").value;
	let name = document.getElementById("name").value;

	if(age==="" || name===""){
		alert("Please Enter valid details");
		return
	}

	let promise = new Promise((resolve, reject)=>{
		setTimeout(() =>{
			if(age > 18){
				resolve();
			}else{
				reject();
			}
		}, 4000)
	})

	promise
		.then(()=>{
			alert("Welcome. You can vote")
		})
		.catch(()=>{
			alert("Oh sorry. You aren't old enough")
		})
})


