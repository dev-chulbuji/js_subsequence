const assert = require("assert");

const is_sub_seq = (a, b) => {
  if (b.length == 0) return true
  if (a.length == 0) return false

  if (a[a.length - 1] === b[b.length - 1]) 
    return is_sub_seq(removeLast(a), removeLast(b));

  return is_sub_seq(removeLast(a), b);
};

const removeLast = (list) => {
  return list.length == 1 ? [] : list.slice(0, list.length - 1);
}

//success cases
assert(is_sub_seq([3, 4, 1, 2, 1, 5, 9], [3, 1]));
assert(is_sub_seq([3, 4, 1, 2, 1, 5, 9], [1, 1, 5, 9]));
assert(is_sub_seq([3, 4, 1, 2, 1, 5, 9], [4, 1, 1, 5]));
assert(is_sub_seq([3, 4, 1, 2, 1, 5, 9], [3, 9]));
assert(is_sub_seq([3, 4, 1, 2, 1, 5, 9], [4, 5]));
assert(is_sub_seq([3, 4, 1, 2, 1, 5, 9], [9]));
assert(is_sub_seq([3, 4, 1, 2, 1, 5, 9], []));
assert(is_sub_seq([], []));

//fail cases
assert(!is_sub_seq([], [3, 9]))
assert(!is_sub_seq([1, 2, 9, 1, 3], [3, 9]))
assert(!is_sub_seq([1, 2, 9, 1, 3], [2, 2]))
assert(!is_sub_seq([1, 2, 9, 1, 3], [1, 9, 2]))
assert(!is_sub_seq([1, 2, 9, 1, 3], [2, 1, 9]))
assert(!is_sub_seq([1, 2, 9, 1, 3], [1, 2, 9, 1, 3, 1]))
assert(!is_sub_seq([1, 2, 9, 1, 3], [4, 1, 2, 9, 1, 3]))
