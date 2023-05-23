// code your solution here
function superbowlWin(arr){
    let w =  arr.find(record=>record.result === "W");
    return w !== undefined? w.year : undefined;
}