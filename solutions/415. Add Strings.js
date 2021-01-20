        undefined: 0,
        '0': 0,
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9
    }
    let i=0
    let adv=0
    let sum=''
    while(num1a[i]||num2a[i]){
        let temp=dict[num1a[i]]+dict[num2a[i]]+adv
        if(temp>9){
            adv=1
            sum=(temp%10).toString() + sum
        }
        else{
            adv=0
            sum=temp.toString() + sum
        }
        i++
    }
    if(adv==1){
        return adv.toString()+sum
    }else{
        return sum
    }
};
