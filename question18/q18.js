let locs=[];
for(let r=0;r<5;r++)
{
    locs[r]=prompt("enter your fav locs")
}
console.log("my fav locs are:",locs)
console.log("ordered list ",locs.slice().sort())
console.log("orignal array:",locs)
console.log("reversed ordered list ",locs.slice().sort().reverse())
console.log("orignal array:",locs)
console.log("reversed ordered list ",locs.reverse())
console.log("back to ordered list ",locs.reverse().reverse())
locs=locs.sort()
console.log("saved sorted:",locs)
locs=locs.sort().reverse()
console.log("saved sorted:",locs)

