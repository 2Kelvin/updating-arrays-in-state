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
