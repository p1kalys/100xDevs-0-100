let c=0;

function counter(){
    c+=1;
    console.log(c);

    setTimeout(counter, 1000);
}

counter();
