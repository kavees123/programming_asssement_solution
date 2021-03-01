export class Connect4 {
    arr: any[];
    turn: number;
    finshed: string;
    constructor() {
      this.turn = 1;
     this.arr = new Array(6);
     this.finshed = "";
     for (var i = 0; i < this.arr.length; i++) {
      this.arr[i] = new Array(7);
    }
    for (var i = 0; i < this.arr.length; i++) {
      for (var j = 0; j < this.arr[i].length; j++) {
        this.arr[i][j] = 0;
      }
    }
    console.log(this.arr);
    }
  
    play(col: number): string{
      if(this.finshed == "Game has finished!"){
        return "Game has finished!";
      }
      // Good luck
      let result = "";
      let curr_turn = this.turn;
    
      let not_full = false;

      for (var i = 0; i < this.arr.length; i++) { // filling in the board with the input
        if(this.arr[i][col] == 0 && curr_turn == 1){
          this.arr[i][col] = 1;
          not_full = true;
          break;
        }
        else if(this.arr[i][col] == 0 && curr_turn == 2){
          this.arr[i][col] = 2;
          not_full = true;
          break;
        }
      }

      if(!not_full){ //checking to see if column is full
      
        if(this.turn == 1){
          this.turn = 2;
        }
        else{
          this.turn = 1;
        }
        return "Column full!";
      }

      let same = 0;
      console.log("The turn is " + this.turn)
      for (var i = 1; i < this.arr.length; i++) { //this checks to see if there is a connect four vertically
          if(this.arr[i-1][col] == 1 && this.arr[i][col] == 1 && curr_turn == 1){
            same++;
          }
          else if(this.arr[i-1][col] == 2 && this.arr[i][col] == 2 && curr_turn == 2){
            same++;
          }
          else{
            same = 0;
          }
          if(same == 3){
            this.finshed = "Game has finished!";
            return "Player " + curr_turn + " wins!";
          }
      }
      same = 0;

      for(var i = 0; i< this.arr.length; i++){ // check to see if there is a connect four horinzontally
          for(var j = 1; j< this.arr[i].length; j++){
            if(this.arr[i][j-1] == 1 && this.arr[i][j] == 1 && curr_turn == 1){
              same++;
            }
            else if(this.arr[i][j-1] == 2 && this.arr[i][j] == 2 && curr_turn == 2){
              same++;
            }
            else{
              same = 0;
            }
            if(same == 3){
              this.finshed = "Game has finished!";
              return "Player " + curr_turn + " wins!";
            }
          }
      }

      same = 0;

      for(var i =0; i< this.arr[0].length-1; i++){ // checks to see if there is a connect four on the second half (diagaonlly) of the coard
        var temp = 0;
        for(var j = i; j< this.arr.length-1 && temp < this.arr.length -1; j++){
          if(this.arr[temp][j] == 1 && this.arr[temp+1][j+1] == 1 && curr_turn == 1){
            same++;
          }
          else if(this.arr[temp][j] == 2 && this.arr[temp+1][j+1] == 2 && curr_turn == 2){
            same++;
          }
          else{
            same = 0;
          }
          if(same == 3){
            this.finshed = "Game has finished!";
            return "Player " + curr_turn + " wins!";
          }
          temp++;
        }
        
      }


      for(var i =0; i< this.arr.length-1; i++){ // checks to see if there is a connect four on the first half (diagaonlly) of the coard
        var temp = i;
        for(var j = 0; j< this.arr.length-1 && temp < this.arr.length -1; j++){
          if(this.arr[temp][j] == 1 && this.arr[temp+1][j+1] == 1 && curr_turn == 1){
            same++;
          }
          else if(this.arr[temp][j] == 2 && this.arr[temp+1][j+1] == 2 && curr_turn == 2){
            same++;
          }
          else{
            same = 0;
          }
          if(same == 3){
            this.finshed = "Game has finished!";
            return "Player " + curr_turn + " wins!";
          }
          temp++;
        }
        
      }

        if(this.turn == 1){
        this.turn = 2;
        result = "Player 1 has a turn"
      }
      else{
        this.turn = 1;
        result = "Player 2 has a turn"
      }
      console.log("From the function " + this.arr);

      return result;
    }
  }