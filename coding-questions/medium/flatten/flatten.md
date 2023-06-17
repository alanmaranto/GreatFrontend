<h1>
Flatten
</h1>

Implement a function flatten that returns a newly-created array with all sub-array elements concatenated recursively into a single level.

<h2>Solution 1: Iterative</h2>
First let's think through how we should check if a given value is an array or not. We can use Array.isArray or instanceof Array to achieve that. There are some nuances between these two. If you are interested you can check out this article by Jake Archibald.<br><br>
Then, we don't want to mutate the original input array, which is a good practice in general, so we will make a copy of the input array and return a new array with all the items extracted from the input array.<br><br>
Here is the solution. We loop through the array with a while loop and we take out an item from the array one at a time to check to see if that item is an array. If the item is not an array, we put it into the res array. If it is an array, we use a spread operator ... to get all the items out of it and put them back to the array.<br><br>

<h2>Solution 2: Iterative with Array.prototype.some</h2>
A more concise approach, compared to the previous one, is to use Array.prototype.some.<br><br>
