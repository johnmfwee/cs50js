const firstName = 'john';
const lastName = 'wee';
const arr = [
  'teaching',
  42,
  true,
  function() {console.log('hi')}
];

arr[3]()

// hi i am a comment
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}
