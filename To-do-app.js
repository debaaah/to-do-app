	
let addBtn = document.querySelector('.btn'), 
	theList = document.querySelector('#todo-list'),
	inputBox = document.querySelector('.input-box'),
	oneListItem = document.querySelectorAll('.listitem'),
	title = document.querySelector('.title'); //definition/initialization

let currentGroup = []; //definition/initialization

function todoGroup(){
	return [document.querySelector('ol').innerHTML, z, document.querySelector('.title').textContent];
}
function todoGroup1(){
	return document.querySelector('ol').innerHTML;
}

let listArray = [], i = 0, j = 1, k = 2; //definition/initialization

function createElement(){
	newText = inputBox.value.trim();
	theDate = new Date;
	let month = theDate.getMonth() + 1;
	createDate = theDate.getDate() + '/' + month + '/' + theDate.getFullYear();
	/* if (theDate.getHours().length == 1){
		 doubleDigit = '0' + theDate.getHours();
		 }else{
		 doubleDigit = theDate.getHours();
			 console.log(theDate.getHours());
		 }
	if (theDate.getMinutes().length == 1){
		 doubleDigit1 = '0' + theDate.getHours();
		 }else{
		 doubleDigit1 = theDate.getHours();
			 console.log(theDate.getMinutes().length);
		 }
	
	createTime = doubleDigit + ':' + doubleDigit1;*/
	createTime = theDate.getHours() + ':' + theDate.getMinutes();
	
	listArray.push(newText, createDate, createTime);
		
	//console.log(doubleDigit, doubleDigit1, theDate.getHours, theDate.getMinutes)
	let newestItem = '<li class = "listitem list' + currentGroup[1] + '" ondblclick="deleteItem(' + currentGroup[1] + ');" ><p class="todo-text p' + currentGroup[1] + '" onclick="strike(' + currentGroup[1] + ');">'+ listArray[i] +'</p><span class="design-span"><span class="todo-time">' + listArray[k] + '; ' + listArray[j] + '</span></span></li>';
	//theList.innerHTML += newestItem;
		//console.log( newestItem);
	let realLmnt = document.createRange().createContextualFragment(newestItem);
	document.querySelector('#todo-list').appendChild(realLmnt);

	z += 1;
    currentGroup = todoGroup();
	//currentGroup[2] = newTitle;
	if (localStorage.getItem('z-problem') == null){
    localStorage.setItem('z-problem', JSON.stringify(currentGroup));
}else{
   localStorage.setItem('z-problem', JSON.stringify(currentGroup));
}

}

addBtn.addEventListener('click', function(e){
	e.preventDefault();
if (inputBox.value.trim() != ""){
	    createElement();
	i += 3;
	j += 3;
	k += 3;
	inputBox.value = "";
	 }else{
	     inputBox.value = "";
	 }
});

title.addEventListener('click', function(){
	let theTitle = prompt('Enter new title');
	let newTitle = theTitle.charAt(0).toUpperCase() + theTitle.slice(1);
	console.log(newTitle);
	if (newTitle.trim() != ""){
		document.querySelector('.title').textContent = newTitle;
		currentGroup[2] = newTitle;
		
		if (localStorage.getItem('z-problem') == null){
    localStorage.setItem('z-problem', JSON.stringify(currentGroup));
}else{
   localStorage.setItem('z-problem', JSON.stringify(currentGroup));
}
	}
})

function deleteItem(z){
	console.log('the z to delete is ', z);
	document.querySelector('.list' + z).remove();
	
	currentGroup[0] = document.querySelector('ol').innerHTML;
	//currentGroup[2] = newTitle;
	console.log('after deleted, z is ', z);
	if (localStorage.getItem('z-problem') == null){
    localStorage.setItem('z-problem', JSON.stringify(currentGroup));
}else{
   localStorage.setItem('z-problem', JSON.stringify(currentGroup));
}
}

function strike(z){
	if (document.querySelector('.p' + z).style.textDecoration == "line-through"){
	document.querySelector('.p' + z).style.textDecoration = "none";
	}else{
		document.querySelector('.p' + z).style.textDecoration = "line-through";
	}
	
	currentGroup = todoGroup();
	//currentGroup[2] = newTitle;
	if (localStorage.getItem('z-problem') == null){
    localStorage.setItem('z-problem', JSON.stringify(currentGroup));
}else{
   localStorage.setItem('z-problem', JSON.stringify(currentGroup));
}
}
window.onload = () => {
    if (JSON.parse(localStorage.getItem('z-problem')) != null){
        currentGroup = JSON.parse(localStorage.getItem('z-problem'));
        console.log('stored');
    }
	if (currentGroup[0] == undefined){
        console.log('undefined')
	}else{
		theList.innerHTML = currentGroup[0];
	}
	
    if (currentGroup[1] == undefined){
			z = 0;
		}else{
			z = currentGroup[1] + 1;
		}
	if (currentGroup[2] == undefined){
			
		}else{
			document.querySelector('.title').textContent = currentGroup[2];
		}
}

