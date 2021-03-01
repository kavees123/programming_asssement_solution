export function isValidWalk(walk: string[]) {
 let pos = 0;
    for(let i in walk){
        if(walk[i] === 'n' || walk[i] === 'e'){
            pos = pos + 1;
        }
        else{
            pos = pos -1;
        }
    }
    
    return pos ==0;
}

