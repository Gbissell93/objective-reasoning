// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

function isAdmin (user) {
    if (user.userRole === "ADMIN") {
        return true
    }

    else {
        return false
    }
}

//==================================================

function getEmail (user) {
    const email = `${user.firstName.toLowerCase()}.${user.lastName.toLowerCase()}@codeimmersives.com`;
    return email;}
//==================================================

function getPlaylistLength (playlist) {
    const playLength = playlist.songs.length;
    return playLength
}
//==================================================

function getHardestHomework (homework) {
let hardest = {};
if (homework.length === 0) {
    return ""
}

else{
hardest = homework.reduce((last, next) => last.averageScore < next.averageScore ? last : next);


return hardest.name
}

}
getHardestHomework([
    { name: 'hip-hip-array', averageScore: 12 },
    { name: 'wait-i-object', averageScore: 200 },
    { name: 'objective-reasoning', averageScore: 25 }
])

//===================================================
function createPhonebook (name, num) {
let phoneBook = {};
for (let i = 0; i < name.length; i++) {
    phoneBook[name[i]] = num[i]
}
console.log(phoneBook)
return phoneBook
}

createPhonebook(['Melissa', 'Andre'], ['206-111-2233', '321-123-2424'])
// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};