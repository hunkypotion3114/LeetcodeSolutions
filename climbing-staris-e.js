function distinctWays(n) {
    let distinctWays=[2,3]
    if(n > 3){
        let way = 0
        for(let i = 0 ; i< n-3; i++){
            way = distinctWays[0]+ distinctWays[1]
            distinctWays.shift()
            distinctWays.push(way)
        }
        return way
    }
    else{
        return n
    }
};

// interesting thing is that -->> fibonacci seriers is observed