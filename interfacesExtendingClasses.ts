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
