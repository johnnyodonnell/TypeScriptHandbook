
const execute = function(func) {
    return func();
};

const o = {
    even: function(n) {
        if (n === 0) {
            return true;
        } else {
            return execute(() => {
                return this.odd(n - 1);
            });
        }
    },

    odd: function(n) {
        if (n === 0) {
            return false;
        } else {
            return execute(() => {
                return this.even(n - 1);
            });
        }
    },
};

console.log(o.even(10));
console.log(o.even(11));


// This object will throw a runtime error
const o2 = {
    even: function(n) {
        if (n === 0) {
            return true;
        } else {
            return execute(function() {
                return this.odd(n - 1);
            });
        }
    },

    odd: function(n) {
        if (n === 0) {
            return false;
        } else {
            return execute(function() {
                return this.even(n - 1);
            });
        }
    },
};

console.log(o2.even(10));
console.log(o2.even(11));
