
/*

This isn't from the TypeScript Handbook,
but I wanted to explore this behavior after
reading the StackOverflow question listed
below:

https://stackoverflow.com/questions/2745265/is-listdog-a-subclass-of-listanimal-why-are-java-generics-not-implicitly-po

*/

class MyList<T> {
    arr: T[] = [];

    push(item: T) {
        this.arr.push(item);
    }

    length() {
        return this.arr.length;
    }

    at(index: number) {
        return this.arr[index];
    }
};

const func = (arr: MyList<any>) => {
    arr.push("This is a string");
};

let arr = new MyList<number>();
arr.push(1);
arr.push(2);
arr.push(4);
func(arr);

let product = 1;
let sum = 0;
for (let i = 0; i < arr.length(); ++i) {
    console.log(arr.at(i));
    sum += arr.at(i);
    product *= arr.at(i);
}

console.log(`Sum: ${sum}`);
console.log(`Product: ${product}`);
