function Person(name, title, evil, enemyOfKing) {
  this.name = name;
  this.title = title;
  this.evil = evil;
  this.enemyOfKing = enemyOfKing;

var that = this;

  return {
   
    getName: function() {
      return that.name;
    
    },

    setTitle: function(newTitle) {
      return that.title = newTitle;
    },


    setEvil: function(newEvil) {
      return that.evil = newEvil;
    
    },

    getEvil: function() {
      return that.evil;
    },
  

  
    setEnemyOfKing: function(enemyOfKing) {
      that.enemyOfKing = enemyOfKing
    },
  
    getEnemyOfKing: function() {
      return that.enemyOfKing;
    },
  };
  
}


var wil = new Person("Wil", "Watcher of the Wall", true, true);
var joker = new Person("Josh", "Joker", true, false);

function Castle() {
  this.people = [];
  var that = this;

    return {
      getPeople: function() {
        return that.people
      },

      addPerson: function(person) {
        if(person.getEnemyOfKing === true) {
          return "Brah GTFO before you get rekt"
        } else {
          that.people.push(person);
        }
        // If the person passed into the function is an enemy of the king return 'Go Away' else add to people property(from that)
      }
  }
}

console.log(wilsCastle.getPeople());

var wilsCastle = new Castle();

wilsCastle.addPerson(wil);

console.log(wilsCastle);
// People cannot change name and cannot enter Castle if they are an enemy of the enemyOfKing


