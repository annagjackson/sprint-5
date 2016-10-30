
//Looping a Triangle
for (i = "#"; i.length < 8; i += "#")
  console.log(i);

//FizzBuzz
//can't figure out why I'm not getting FizzBuzz here (works in Youtube example https://www.youtube.com/watch?v=NOb423mxSbE)
  for (var i = 1; i <=100; i++){
  var output = "";
if (i % 3 == 0)
  output += "Fizz";
  else if (i % 5 == 0)
    output += "Buzz";
 console.log(output || i);
}
