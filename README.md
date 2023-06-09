# 42-final-searching-sorting

# 1. Sorting
In order to present the data in a meaningful way, it's necessary to sort the array. Implement a sorting algorithm of your choice. Your sorting function should be named sort() and should accept two parameters.

function sort(compare, elements) {}
Where:

compare: A function that compares two elements, so it takes two parameters: left and right. It returns one of the following:
0 if the left element is equal to the right element
A positive value if the left element is greater than the right element by the ordering criterion
A negative value if the left element is less than the right element by the ordering criterion
elements: The array to which the sorting algorithm is applied.
The sorting algorithm must be stable.

# 2. Sort by name
The company wants the entire array of customers sorted by last name and first name. That is, the entire array should be sorted by last name. But, if any people share the same last name, then they should be sorted by first name.

For example, Amy Bogan comes before Beatrice Bogan, who comes before Amy Crooks.

Write a function named nameSort() that accepts the array of elements to be sorted and returns the array sorted as described. The nameSort() function should use the sort() function defined in task 1 to accomplish the task. Hint: You may consider calling the sort() function twice.

# 3. Search by name
Write a function named searchByName() that accepts three parameters:

firstName: The first name of a customer
lastName: The last name of a customer
customers: The array of customers, sorted by first and last name
The function should implement a binary search and return the index of the customer with the given first and last names. If no customer with those names is found, then return -1.

# 4. Search by email
Write a function named searchByEmail() that accepts two parameters:

email: The email address to search for
customers: The array of customers sorted by first and last name
The function should return the index of the customer with the given email address. If no customer with that email address is found, return -1.
