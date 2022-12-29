# updating-arrays-in-state

In this read, I learnt:

- just like objects, arrays too are `immutable too when set to state`
- to update a state array, `create a new array` or `make a new copy of the array` and then set it to state
- `avoid array mutations`: e.g. directly `reassigning array item values` (e.g. arr[i]=3) or using methods like `push()` & `pop()` which mutate an array
- when setting/updating state with an array, a new array should always be passed in, may it be a newly created array or a copy of the older array.
- you can `use non-mutating array` methods like `filter()` & `map()` to set/ update the array state variable
- `other array methods to avoid` when setting an array to state since they mutate the array: `unshift()`, `shift()`, `splice()`, `reverse()` & `sort()`
- other array methods to use that do not mutate the array: `concat()`, `spread syntax [...]` and `slice()`
- you can use any of the array methods above whether the mutate the array or not by using `Immer`
- to use the `spread syntax` to add an item to the array without mutating the old array. `You can also insert the new array item at the start `while using the spread syntax. Just insert it before you spread the other array items. This is similar to what unshift() does but without mutation. The normal spread syntax does the same job as push() but without mutation.
- to use `filter()`. Which creates a new array without the array item that didn't pass the condition
- that if you want to change all items of an array, use map() to create a new array with the function passed to map() modifying each array item as it wants.
- that you should use map() also if you want to replace a particular item in an array. Here, you should pass an extra argument (to make them 2) for the item's id. Using this is you can choose whether to use the old array item or replace it with a new one
- to insert an item into an array at a position which is neither at the beginning or at the end by using the `spread syntax and slice()` method
- to manually copy an array if the spread operator, filter() or map() are not enough. You can then use the new copied array with mutating methods like `reverse()` and `sort()`
- that, you CANNOT mutate the new copied array because it will mutate the existing state. This is because the original and copy array point to the same array object.
