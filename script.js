// var friends = ['Kristen', 'Markus', 'Lance', 'Nequil', 'Dylan']
// var myLocations = ['bedroom', 'Sand Castle', 'Garage', 'a Rainbow', 'Vortex'];
// var weapons = ['knife', 'herring', 'bazooka', 'mallet', 'rope', 'religious faith'];
// document.addEventListener('DOMContentLoaded', function(){
//     for(var i = 1; i <= 100; i++){
//         var clueHead = document.createElement('h3');
//         document.body.appendChild(clueHead);
//         clueHead.innerHTML = 'Clue ' + [i];
//     clueHead.addEventListener('click', function(){
//          var r, rand, f, i;
//     f = friends.slice(0); // clone the array
//     w = weapons.slice(0); // clone the array
//     m = myLocations.slice(0); // clone the array
//     r = [];
//     i = 0;
//     while (f.length){
//     rand = Math.floor(Math.random()*f.length);
//     r.push(f.splice(rand,1));
//     var myNewFriend = (r[r.length-1]);
//     }
//     while (w.length){
//     rand = Math.floor(Math.random()*w.length);
//     r.push(w.splice(rand,1));
//     var myNewWeapon = (r[r.length-1]);
//     }
//     while (m.length){
//     rand = Math.floor(Math.random()*m.length);
//     r.push(m.splice(rand,1));
//     var myNewLocation = (r[r.length-1]);
//     }
//         console.log(i);
//       alert('it was ' + myNewFriend + ' in the ' + myNewLocation + ' with the ' + myNewWeapon);
//     });
//     }

// });

 document.addEventListener('DOMContentLoaded', function(){
    for(var i = 1; i <= 100; i++){
        var clueHead = document.createElement('h3');
        document.body.appendChild(clueHead);
        clueHead.innerHTML = 'Clue ' + [i];
    }

var friend = {
    friends: ['Kristen', 'Markus', 'Lance', 'Nequil', 'Dylan']
}

var myLocation = {
    locations: ['bedroom', 'Sand Castle', 'Garage', 'a Rainbow', 'Vortex'],
    random: function() { console.log(this[0]); }
}

var weapon = {
    weapons: ['knife', 'herring', 'bazooka', 'mallet', 'rope']
}



 });