function sortDiscordIds(usernames, ids) {
  const usernameToId = {};

  for (let i = 0; i < usernames.length; i++) {
    const username = usernames[i];
    const id = ids[i];

    usernameToId[username] = id;
  }

  usernames.sort((a, b) => usernameToId[a] - usernameToId[b]);

  return usernames;
}

const usernames = ['jessica', 'aaron', 'kevin', 'denice'];
const ids = [72, 11, 7, 0];

console.log(sortDiscordIds(usernames, ids));

function getBuckets(array) {
  const buckets = new Array(10).fill().map(el => []);

  for (const num of array) {
    buckets[num].push(num);
  }

  return buckets;
}

console.log(getBuckets([2, 3, 1, 4, 6, 4, 6, 7, 8, 9]));

function getBuckets2(nums) {
  const counter = {};

  for (const num of nums) {
    counter[num] = (counter[num] ?? 0) + 1;
  }

  const buckets = {};

  for (const [num, count] of Object.entries(counter)) {
    buckets[count] = (buckets[count] ?? []).concat(num);
  }

  return buckets;
}

console.log(getBuckets2([2, 3, 1, 4, 6, 4, 6, 7, 8, 9]));