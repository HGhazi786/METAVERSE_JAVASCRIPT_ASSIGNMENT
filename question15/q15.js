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
