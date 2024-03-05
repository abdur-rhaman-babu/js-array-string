// longest string
const friends = ['mubin','hadi','rubel','nahiduzzaman','abdullah']
const megaFriends = (friends) =>{
    let bestFriend = friends[0]
    for( let friend of friends ){
       if ( friend.length > bestFriend.length){
            bestFriend = friend
       }
    }
    return bestFriend;
}
// console.log(megaFriends(friends))

// indexOf and includs
if ( friends.indexOf('mubin') !== -1){
    console.log('It is ok')
}else{
    console.log('mubin nai')
}

if ( friends.includes('munna')){
    console.log('Munna is at home')
}else{ 
    console.log('se bari nai')
}

// concat 
const first = [1,2,3,4,5];
const second = [5,6,7,8,9,10];
const combined = first.concat(second);
// console.log(combined)




