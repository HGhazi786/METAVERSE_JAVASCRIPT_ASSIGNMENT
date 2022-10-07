let guest_list=[];
for(i=0;i<3;i++)
{
    guest_list[i]=prompt("enter your guest:")
}
for(i=0;i<3;i++)
{
console.log("hello "+guest_list[i]+"how are you i wanted to invite you on my dinner party")
}
console.log(guest_list[2]+" will not be able to make it")
guest_list.splice(2,2,prompt("enter guest"))
for(i=0;i<3;i++)
{
console.log("hello "+guest_list[i]+"how are you i wanted to invite you on my dinner party")
}
console.log("we have found a bigger table it looks like we can invite more people")
let new_guest=prompt("enter new starting guest")
new_guest.concat(guest_list)//guest 4
guest_list.splice(3,0,prompt("enter new guest"))//guest 5
//guest 6
guest_list.push(prompt("enter new guest"))
for(i=0;i<guest_list.length;i++)
{
console.log("hello "+guest_list[i]+"how are you i wanted to invite you on my dinner party")
}
