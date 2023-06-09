const sort = require("./sort");

function sortByName(customers) {
  function compareLastName(a, b){
    const lastNameA = a.lastName.toUpperCase();
    const lastNameB = b.lastName.toUpperCase();

    if (lastNameA < lastNameB) {
      return -1;
    } else if (lastNameA > lastNameB) {
      return 1;
    } else {
      // If last names are the same, compare by first name
      const firstNameA = a.firstName.toUpperCase();
      const firstNameB = b.firstName.toUpperCase();

      if (firstNameA < firstNameB) {
        return -1;
      } else if (firstNameA > firstNameB) {
        return 1;
      } else {
        return 0;
      }
    }
  };
  return sort(compareLastName, customers);
}
