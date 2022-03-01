const createCloneObject = (Object) => {
    return JSON.parse(JSON.stringify(Object))
}

const calculateNumberOfPages = (totalCountItems, numberOfItemsPerPage) => {
    return Math.ceil(totalCountItems / numberOfItemsPerPage)
}

const convertNumbersToArrays = (countPage) => {
    const arrayNumber = []
    for (let numberPage=1; numberPage <= countPage; numberPage++){
        arrayNumber.push(numberPage)
    }
    return arrayNumber
}

export {createCloneObject, calculateNumberOfPages, convertNumbersToArrays}