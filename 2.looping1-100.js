var laundry;
i = 1;
for (laundry=1; laundry<=100; laundry++){
    // console.log(laundry + ". masukkan pakaian ke mesin cuci");
    if (laundry % 3) {
        console.log('fizz')
    }else if (laundry % 5){
        console.log('buzz')
    }else if (laundry % 3 && 5){
        console.log('fizzbuzz')
    }
}

