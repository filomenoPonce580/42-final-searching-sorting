function compare(left, right) {
  return left - right;
}

function sort(compare, elements) {
  if(Array.isArray(elements)){
    let inOrder;
    
    do{
      inOrder = true;
      
      for(let i = 0; i < elements.length - 1; i++){
        const leftElement = elements[i];
        const rightElement = elements[i+1];
        
        if(compare(leftElement, rightElement) > 0){
          elements[i] = rightElement;
          elements[i+1] = leftElement;
          inOrder = false;
        }
      }
    }while(inOrder === false);
  }
  return elements;
}
