const categories = document.getElementsByClassName("categories")
const arrayCategories = Array.from(categories);
console.log('Number of Categories:', arrayCategories.length)
console.log('---')
arrayCategories.forEach(item => {
    console.log('Category:', item.children[0].innerText)
    console.log('Elements:', item.children.length-1)
    const arrayItem = Array.from(item.children)
    // console.log(arrayItem[0].innerText.length)
    let longestElement = ''
    let longestLength = 0
    arrayItem.forEach(elem => {
        if (elem.innerText.length > longestLength){
            longestLength = elem.innerText.length
            longestElement = elem.innerText
           } 
    })
    console.log('LongestElement:', longestElement )
    console.log('---')
})

