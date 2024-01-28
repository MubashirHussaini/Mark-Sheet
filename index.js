let phy = prompt ("enter your physics marks (0-100):");
let phy1 = parseInt (phy);
let chem = prompt ("enter your chem marks (0-100):");
let chem1 = parseInt (chem);
let math = prompt ("enter your math marks (0-100):");
let math1 = parseInt (math);
let urdu = prompt ("enter your urdu marks (0-100):");
let urdu1 = parseInt (urdu);
let eng = prompt ("enter your english marks (0-100):");
let eng1 = parseInt (eng);


let totalMarks = (phy1 + chem1 + math1 + urdu1 + eng1);
document.write(`Your Total Marks is  ${totalMarks}\n`);
let percentage = (totalMarks/500*100);

if(percentage >= 90 && percentage <= 100){
   document.write("\nYour Grade is A+");
} else if(percentage >=80 && percentage <90){
    document.write("\nYour Grade is A");
}else if (percentage >=70 && percentage <80){
    document.write("\nYour Grade is B");
} else {
    document.write("\nBetter luck next time");
};
