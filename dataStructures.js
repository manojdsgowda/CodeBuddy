// level 2
//1
function removeEvenNumbers(array){
	change=false;
	
	for(let i=0;i<array.length;i++){
		let value=array[i]%2===0
		if(value^change){
			array.splice(i--,1)
		}
	}
}


const array=[1, 3, 4, 6, 7, 8];
removeEvenNumbers(array);


//2
function vowelToUpperCase(str){
	
	for(var i=0;i<str.length;i++){
		if(str[i]==="a" || str[i]==="e" || str[i]==="i" || str[i]==="o" ||str[i]==="u"){
			document.write(str[i].toUpperCase());
		}
		else{
			document.write(str[i]);
		}
	}
}

var str="Elie";
vowelToUpperCase(str);

//3

function arrayMax(array){
	return Math.max.apply(null,array);
}

const array: [1, 3, 4, 6, 7, 8, 2, 5];
var maxValue= arrayMax(array);




