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

<h2>Solution 3: Recursive approach with Array.prototype.reduce</h2>
A recursion approach fits well here given the recursive and nesting nature of this question. And it will simplify our code a lot.<br><br>
Although a recursive approach always has the risk overflowing the call stack, as of this writing, in chrome, the number of recursive calls you can make is around 10 thousands and in Firefox it is 50 thousands, so this shouldn't be a problem in practice. However, when the cost of recursion becomes a concern, we can use a generator to lazily extract the flattened items from the array. We will see that solution later.<br><br>

<h2>Solution 4: Flatten the array in-place</h2>
All the solutions we have seen so far are returning a new flattened array without mutating the original input array. Again, this is normally what you want.<br><br>
However, the interviewer might ask you to implement an in-place solution that doesn't allocate extra memory. That is, a solution with a constant O(1) space complexity.<br><br>
n this case, you will need to leverage array methods that mutate. There are 9 methods in total that mutate arrays: pop, push, reverse, shift, sort, splice, unshift, copyWithin and fill.<br><br>