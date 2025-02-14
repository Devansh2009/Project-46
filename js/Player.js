  class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = 0;
    this.score = 0

    this.posX = 0
    
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount:count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance,
      posX:this.posX,
      score:this.score
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })

  }

  getCarsAtEnd(){
    var carsAtEndInfo = database.ref('carsAtEnd')
    carsAtEndInfo.on("value",(data)=>{
      this.rank = data.val()
    })
  }

  static updateCarsAtEnd(rank) {
    database.ref('/').update({
      carsAtEnd:rank
    })
  }
}
