var Guest_List = ["MUSTAFA", "MANZOOR", "MUNWARZAMA"];
//for (let i = 0; i < Guest_List.length; i++){
//console.log("Dear Mr," + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
//}
var absent_Guest = 'MUSTAFA';
var new_Guest = 'KALEEMULLAH';
Guest_List[0] = "KALEEMULLAH";
for (var i = 0; i < Guest_List.length; i++) {
    console.log('Mr.' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n');
}
console.log("Mr.".concat(absent_Guest, "  is not coming to the party."));
console.log("GOOD NEWS! We Find Big Table So We Are Inviting Three More Guests.");
Guest_List.unshift("Sir Zia Khan");
Guest_List.splice(2, 0, "SANAULLAH");
Guest_List.push("Hidayatullah");
for (var i = 0; i < Guest_List.length; i++) {
    console.log('Mr.' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n');
}
