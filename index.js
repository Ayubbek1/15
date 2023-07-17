let unsorted = [9,2,1,7,3,2,6]

for (let i = 0; i < unsorted.length; i++) {
    const item = unsorted[i];
    for (let k = 0; k < unsorted.length - 1 - i; k++) {
        if(unsorted[k]>unsorted[k+1]){
            let tmp = unsorted[k]
            unsorted[k] = unsorted[k+1]
            unsorted[k+1] = tmp
        }
        
    }
    
}
console.log(unsorted);