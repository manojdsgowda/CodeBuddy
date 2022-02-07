// level 2

function fibonacciSeries(value){
	if(value===1){
		return [0,1];
	}else{
		var series=fibonacciSeries(value-1);
		series.push(series[series.length-1]+series[series.length-2]);
		return series;
	}
}

function sum(value){
	let fibonacci=[];
	if(value<=0)
		return 0;
	
	fibonacci[0]=0;
	fibonacci[1]=1;
	
	let sum=fibonacci[0]+ fibonacci[1];
	
	for(let i=2;i<=value; i++)
	{
		fibonacci[i]=fibonacci[i-1]+fibonacci[i-2];
		sum+=fibonacci[i];
	}
	return sum;
}

let value=6;
fibonacciSeries(value);
document.write(`Sum: ${sum(value)}`;
