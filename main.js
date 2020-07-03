// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')
// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)



function printKata(kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}
const greenEyes1 = users.filter(user => user.eyeColor === "green")
    .map(user => user.name)
printKata(0, greenEyes1)

//kata1
const isActive1 = users
    .filter(user => user.isActive).map(user => user.name)
printKata(1, isActive1)


//kata2
const userEmail = users
    .map(user => user.email)
printKata(2, userEmail)

//kata3
const findCompany1 = users
    .some(user => user.company === 'OVATION')

printKata(3, findCompany1)

//kata4
const firstuserOver38 = users
    .find(user => user.age > "38")
printKata(4, firstuserOver38.name)

//kata5

const activeOver38 = users
    .filter(user => user.isActive)
    .find(user => user.age > 38)
printKata(5, activeOver38)

//kata6
const gotBank = users
    .filter(user => user.company === "ZENCO")
    .map(user => user.balance)
printKata(6, gotBank)

//kata7
const agefugiatTag = users
    .filter(user => user.tags.includes('fugiat'))
    .map(user => user.age)




printKata(7, agefugiatTag)