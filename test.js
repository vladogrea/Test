var arr = [4,5,7,8,14,45,76];

function even(a){
  var ar = [];

  for (var i=0; i<a.length;i++){
    if (a[i] % 2 === 0)
    {
      ar.push(a[i]);
    }

  }

return ar;
}

alert(even(arr));



var array = [3 , 6, 2, 56, 32, 5, 89, 32];
var largest= 0;

for (i=0; i<=largest;i++){
    if (array[i]>largest) {
        var largest=array[i];
    }
}

console.log(largest);


var method = function(a) {
    var counts = [];
    for(var i = 0; i <= a.length; i++) {
        if(counts[a[i]] === undefined) {
            counts[a[i]] = 1;
        } else {
            return true;
        }
    }
    return false;
}
