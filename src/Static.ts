export default class TestClass {
    counter: number = 0;
    static counterStatic: number = 0;

    static PI(): number {
        return Math.PI;
    }

    static ceil(num: number): number {
        return Math.ceil(num);
    }
}
