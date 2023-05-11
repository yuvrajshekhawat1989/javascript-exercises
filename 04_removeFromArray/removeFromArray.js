function removeItem(arr,element)
{
    let i = 0;
    while(i<arr.length)
    {
        if(arr[i]===element)
        arr.splice(i,1);
        i++;
    }
    return arr;
}

const removeFromArray = function () {
  array = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    itemToRemove = arguments[i];
    array = removeItem(array,itemToRemove)
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
