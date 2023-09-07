//der er 7 (3+2+2) primitive typer i js
//Number, String, Boolean
//Undefined, Null
//Symbol, BigInt.. dem bruger vi ikke

//Der er yderligere 2 typer:
//Object, Function
let b;

function out(any)
{
    console.log(any);
}

function outtype(any)
{
    console.log("type:" + typeof any);
    console.log(any);
}

function showTypes(lst)
{
    console.log("STARTER")
    for (const obj of lst)
    {
        console.log(obj + " er typen: " + typeof obj)
    }
}

let arr = [5, "hej", 5.6, 'a', b, null, [1, 2, 3], {"navn": "erik"}, out];
out(5)

//array har metoden foreach, der kan udføre funktionen out
//arr.forEach(out);

//arr.forEach(outtype);

showTypes(arr);