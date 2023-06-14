// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber) {
    const headquartersLocation = 42; 
    return Math.abs(blockNumber - headquartersLocation);
  }

  function distanceFromHqInFeet(blockNumber) {
    const feetPerBlock = 264; 
    const distanceInBlocks = Math.abs(blockNumber - 42); 
    return distanceInBlocks * feetPerBlock;
  }

  function distanceTravelledInFeet(startBlock, endBlock) {
    const feetPerBlock = 264; 
    const distanceInBlocks = Math.abs(endBlock - startBlock);
    return distanceInBlocks * feetPerBlock;
  }

  function calculatesFarePrice(startBlock, destinationBlock) {
    const distance = Math.abs(destinationBlock - startBlock);
  
    if (distance === 1) {
      return 0; 
    }
  
  }

  function calculatesFarePrice(startBlock, destinationBlock) {
    const feetPerBlock = 264; 
    const distanceInBlocks = Math.abs(destinationBlock - startBlock);
    const totalFeet = distanceInBlocks * feetPerBlock;
  
    if (totalFeet <= 400) {
      return 0; 
    } else if (totalFeet > 400 && totalFeet <= 2000) {
      const feetBeyond400 = totalFeet - 400;
      const farePrice = feetBeyond400 * 0.02; 
      return farePrice;
    } else {
      
    }
  }

  function calculatesFarePrice(startBlock, destinationBlock) {
    const feetPerBlock = 264; 
    const distanceInBlocks = Math.abs(destinationBlock - startBlock);
    const totalFeet = distanceInBlocks * feetPerBlock;
  
    if (totalFeet <= 400) {
      return 0; 
    } else if (totalFeet > 400 && totalFeet <= 2000) {
      const feetBeyond400 = totalFeet - 400;
      const farePrice = feetBeyond400 * 0.02; 
      return farePrice;
    } else {
      return 25; 
    }
  }

  function calculatesFarePrice(startBlock, destinationBlock) {
    const feetPerBlock = 264; 
    const distanceInBlocks = Math.abs(destinationBlock - startBlock);
    const totalFeet = distanceInBlocks * feetPerBlock;
  
    if (totalFeet > 2500) {
      return 'cannot travel that far'; 
    } else if (totalFeet <= 400) {
      return 0; 
    } else if (totalFeet > 400 && totalFeet <= 2000) {
      const feetBeyond400 = totalFeet - 400;
      const farePrice = feetBeyond400 * 0.02; 
      return farePrice;
    } else {
      return 25; 
    }
  }
  