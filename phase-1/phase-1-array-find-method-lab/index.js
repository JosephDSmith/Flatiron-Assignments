function superbowlWin(array) {
    const winningYear = array.find(item => {
      if (item.result === "W"){
        return item.year;
      } 
    })
    return winningYear ? winningYear.year : undefined

  } 

 
 