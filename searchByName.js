function searchByName(firstName, lastName, customers) {
  if(Array.isArray(customers)){
    let lowerIndex = 0;
    let upperIndex = customers.length - 1;
    
    while(lowerIndex <= upperIndex){
      const index = Math.floor((upperIndex + lowerIndex)/2);
      const customer = customers[index]
      if(customer.lastName === lastName && customer.firstName === firstName){
        return index
      }
      if(customer.lastName > lastName || (customer.lastName === lastName && customer.firstName > firstName)){
        upperIndex = index - 1
      }else{
        lowerIndex = index + 1
      }
    }
    
    return -1
  }
}
