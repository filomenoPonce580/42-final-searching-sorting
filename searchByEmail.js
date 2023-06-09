function searchByEmail(email, customers) {
  if (Array.isArray(customers)) {
    for (let i = 0; i < customers.length; i++) {
      if (customers[i].email === email) {
        return i;
      }
    }
  }
  return -1;
}
