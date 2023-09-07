const a = 5; //const you cannot assign another variable
let b3 = "hej"; //let, normal assign, you can reassign
var c = null; //is not allowed because of scope, use let or const. Var and let have same properties
c = 8;

function testScope()
{
    let x = 5;
    let y = 6;

    if (y>x)
    {
     console.log("inside scope2");
     let a = 4;
     var b = 5;
     if (b>a)
     {
         let a1 = 10;
         var b1 = 11;
     }
    }
    console.log(b1);
    //console.log(a1); kan ikke printes da den er indenfor if-statement scopet
}
//vi burde ikke kunne printe b1 da den er indenfor scopet (if-statementet)
testScope();



