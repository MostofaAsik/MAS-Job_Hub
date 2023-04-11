//add data to loacl storage
const addToDb = (id) => {
    let jobCart = {};
    //get priviousdata from local storage
    const storedJob = localStorage.getItem('job-cart')

    if (storedJob) {
        jobCart = JSON.parse(storedJob)
    }

    const quantity = jobCart[id]
    if (quantity) {
        const newQuantity = quantity + 1;
        jobCart[id] = newQuantity
    }
    else {
        jobCart[id] = 1;
    }
    localStorage.setItem('job-cart', JSON.stringify(jobCart))
}

//get StoredData from local storage

const getStoredJob = () => {
    let jobCart = {};

    const storedJob = localStorage.getItem('job-cart')

    if (storedJob) {
        jobCart = JSON.parse(storedJob)
    }

    return jobCart;

}


export { addToDb, getStoredJob }