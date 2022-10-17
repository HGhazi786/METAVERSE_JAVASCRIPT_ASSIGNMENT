function car_info(Manu,Modl)
{
    let info
        info=
        {
            manufacturer:Manu,
            model_no:Modl
        }
    let i=2
        for(i=2; i< arguments.length;i++)
        {
            info[i]=arguments[i]
        }
    return info
}
console.log(car_info('honda','1992','blue','alloy_wheels'))
console.log(car_info('honda','1992','red'))
console.log(car_info('honda','1992'))
