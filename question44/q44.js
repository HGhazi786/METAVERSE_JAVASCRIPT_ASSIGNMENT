function desires()
{
    console.log("you have ordered a sandwich with following items:")
    for(let i=0;i<arguments.length;i++)
    {
        console.log(arguments[i])
    }
}
desires('ketchup','mayo','patty')
desires('ketchup','mayo','patty','olives')
desires('ketchup','mayo','patty','olives','cabege')
desires('ketchup','mayo','patty','olives','fried garlic','cabege','mustard')
