console.log('script start'); 

setTimeout(function() {
  console.log('setTimeout'); 
}, 0);

new Promise((res,rej)=> {
 console.log('promise') 
 rej()
}).then(function() {
  console.log('promise1');
}).catch(function(){
  return 1;
}).then(function() {
  console.log('promise2'); 
});

console.log('script end'); 
