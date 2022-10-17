function make_great(arr){for(let i=0;i<arr.length;i++){arr[i]='Great '+arr[i]}return arr}
function show_magician(arr=[]){for(let i=0;i<arr.length;i++){console.log("Magician: "+arr[i])}}//by default array will be empty
let Magi_arr=["a","b","c","d","e"]
make_great(Magi_arr)
show_magician(Magi_arr)
