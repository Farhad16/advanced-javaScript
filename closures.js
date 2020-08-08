function stopWatch() {
    let time = 1;
    console.log("Time" + time)
    return () => {
        console.log(time);
        time++;
    }
}

const clock1 = stopWatch()
const clock2 = stopWatch()

clock1();
clock1();
clock2();
clock2();
clock1();
clock2();
clock2();

// closure in loop 

for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    });
}

console.log("After the loop ")