const repeatString = function(string,repititions) {
    if(repititions<0)
    return "ERROR";
    ans = "";
    for(let i =0;i<repititions;i++)
    {
        ans = ans.concat(string);
    }
    return ans;
};
repeatString('hey',3)
// Do not edit below this line
module.exports = repeatString;
