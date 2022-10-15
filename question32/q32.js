let current_user=['a','b','c','d','e']
let new_user=['m','k','l','d','e']
for(let i=0;i<5;i++)
{
    for(let j=0;j<5;j++){
        if(new_user[i]===current_user[j])
        {
            console.log("You need to enter a new user name")
            new_user[i]=prompt("enter new name")
        }
        else{
            console.log("username avaliable")
        }
    }
    
}
console.log(current_user)
console.log(new_user)
