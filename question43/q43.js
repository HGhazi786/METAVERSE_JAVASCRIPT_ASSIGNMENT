function make_great(arr){for(let i=0;i<arr.length;i++){arr[i]='Great '+arr[i]}return arr}
function show_magician(arr=[]){for(let i=0;i<arr.length;i++){console.log("Magician: "+arr[i])}}//by default array will be empty
let Magi_arr=["a","b","c","d","e"]
let  new_arr=[]
new_arr=new_arr.concat(Magi_arr);
let sep_arr=make_great(new_arr)
show_magician(sep_arr)
console.log("orignal")
show_magician(Magi_arr)
