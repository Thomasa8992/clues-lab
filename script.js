var friends = ['Kristen', 'Markus', 'Lance', 'Nequil', 'Dylan'],
    weapons =['knife', 'herring', 'bazooka', 'mallet', 'rope', 'brass knuckles', 'King Scepter', 'Fishing Rod', 'Fire Extinguisher', 'Mace'];
    locations = ['Bedroom', 'Sand Castle', 'Garage', 'Rainbow', 'Vortex', 'Kitchen', 'Ranch', 'Whale', 'Well','Fireplace'];
         

 document.addEventListener('DOMContentLoaded', function(){
    for(var i = 1; i <= 100; i++){
        var clueHead = document.createElement('h3');
        clueHead.innerHTML = 'Clue ' + [i];
        var newClue = { 
            newFriend: friends[Math.floor(Math.random() * friends.length)],
            newWeapon: weapons[Math.floor(Math.random() * weapons.length)],
            newLocation: locations[Math.floor(Math.random() * locations.length)]
        };
    
        clueHead.addEventListener('click', logs.bind(newClue));
        document.body.appendChild(clueHead);
    }
});

function logs() {
        alert(this.newFriend + ' with the ' + this.newWeapon + ' in the ' + this.newLocation);
}
var log = logs.bind(newClue); 