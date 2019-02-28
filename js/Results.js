function showResults() {
    demo();
}

async function demo() {
    await sleep(1000);
    document.getElementById('score').click();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
