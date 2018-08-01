// Intefaces Extending Classes
// https://www.typescriptlang.org/docs/handbook/interfaces.html

class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { }
}

// Error: Property 'state' is missing in type 'Image'.
class Image implements SelectableControl {
    select() { }
}

// Error: Types have separate declarations of a private property 'state'.
class Component implements SelectableControl {
    private state: any;
    select() { }
}

/*
Explanation (https://www.typescriptlang.org/docs/handbook/classes.html):

TypeScript is a structural type system. When we compare two different types,
regardless of where they came from, if the types of all members are compatible,
then we say the types themselves are compatible.

However, when comparing types that have private and protected members,
we treat these types differently. For two types to be considered compatible,
if one of them has a private member, then the other must have a private
member that originated in the same declaration. The same applies to
protected members.

*/
