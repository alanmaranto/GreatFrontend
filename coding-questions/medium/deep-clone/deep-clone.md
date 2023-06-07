<h1>
Deep Clone
</h1>

<h2>Solution 1</h2>
There are generally two ways we can traverse an object:<br>
<ul>

<li>
Loop through the keys with the old school for ... in statement.
</li>

<li>
Converting the object into an array of keys with <strong>Object.keys</strong>, or an array of a key-value tuple with <strong> Object.entries</strong>.
</li>
</ul>

With the for ... in statement, inherited enumerable properties are processed as well. On the other hand, Object.keys and Object.entries only care about the properties directly defined on the object, and this is usually what we want.

<h3><strong>Edge Cases</strong></h3>
Non-enumerable and symbol-keyed properties are ignored.
Property descriptors are not respected and copied into the cloned object. <br>
If the object has circular references, the current solution will break and cause a stack overflow by recursion into an infinite loop.
The prototype is not copied.
We will address these edge cases in Deep Clone II. <br><br>

<h2>Solution 2</h2>

Although this approach is acceptable given the input object only contains null, boolean, number, string, you should be aware of the downsides of this approach: <br>

<ul>
<li>We can only copy non-symbol-keyed properties whose values are supported by JSON. Unsupported data types are simply ignored.
</li>
<li><strong>JSON.stringify</strong> also has other a few surprising behaviors such as converting <strong>Date</strong> objects to ISO timestamp strings, <strong>NaN</strong> and <strong>
Infinity</strong> becoming <strong>null</strong> etc.</li>
</ul>
