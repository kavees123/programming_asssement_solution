export function findOutlier(integers: number[]): number {
  let result = -1;
  let odd =0;
  let even = 0;
    for(let i in integers){
     if(integers[i] %2 ==0){
       even++;
     }
     else{
       odd++;
     }
     if(even > 1 && integers[i] %2 != 0){
       return integers[i];
      
     }
     else if(odd > 1 && integers[i] %2 ==0){
       return integers[i];
      
     }
    }
    for(let i in integers){
      if(integers[i] %2 ==0 && odd > 1){
        return integers[i];
      }
      if(integers[i] %2 !=0 && even > 1){
        return integers[i];
      }
    }
    return 0;
  }