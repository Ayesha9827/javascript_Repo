//reduce()
const myNums = [1, 2, 3, 4]

// const myTotal = myNums.reduce(function ( acc, currvalue ){
//     console.log(`acc: ${acc} and currval: ${currvalue}`);
//     return acc + currvalue
// },0)


const myTotal =  myNums.reduce( (acc,curr) => acc + curr,0)
console.log(myTotal);


const ShopCart = [
    {
        itemName: "js course",
        price:2999
    },
    {
        itemName: "mobile course",
        price:5999
    },
    {
        itemName: "python course",
        price:12999
    },
]

const bill = ShopCart.reduce((acc,item) => acc + item.price,0)
console.log(bill);
