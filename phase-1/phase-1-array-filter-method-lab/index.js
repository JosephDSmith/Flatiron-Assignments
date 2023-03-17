  function findMatching(array, string) {
    const namesArray = array.filter(function(driver) {
      return driver.toLowerCase() === string.toLowerCase();
      
    })
   return namesArray
  }
  





  function fuzzyMatch(array, string){
    const namesArray = array.filter(function(driver){
        return driver.substring(0,1) === string.substring(0,1)
    }) 

    return namesArray 

  }

  


  function matchName (array, string){
    const namesArray = array.filter(function(driver){
        return driver.name === string || driver.hometown === string
    })
    return namesArray
  }

  console.log(matchName(drivers, "Cleveland"))
 