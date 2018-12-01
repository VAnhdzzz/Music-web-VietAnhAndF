const run = async () => {
    const dataAfterGet = await getDataFromJson('data.json');
    // Write Code JS here
    console.log(dataAfterGet);
    dataAfterGet.forEach(el => console.log(el))
    

    //____________________
}


run();  