/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var number = document.getElementById("numbers").value
    var split = number.split(', ');
    console.log(split);

    
    document.getElementById("run").addEventListener("click", function() {
    
        split.sort((a, b)=>(a - b));
    
        alert(split); 
    
        });
    
})();
    