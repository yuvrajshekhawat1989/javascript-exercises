const getTheTitles = function(books) {
    let titlesArray=[]
    for(let i=0;i<books.length;i++)
    {
        titlesArray.push(books[i].title)
    }
    return titlesArray;
};

// Do not edit below this line
module.exports = getTheTitles;
