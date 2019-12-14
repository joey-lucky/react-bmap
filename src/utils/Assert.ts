export default class Assert {

    static isTrue(value:any, msg:string) {
        if (!value) {
            throw new Error(msg || "expect true but false " + value);
        }
    }

    static notNull(value:any, msg:string) {
        if (value === null || value === undefined) {
            throw new Error(msg || "expect not null but " + value);
        }
    }

    static notEmpty(value:Array<any>, msg:string) {
        if (!value || !Array.isArray(value) || value.length === 0) {
            throw new Error(msg || "expect not empty but not " + value);
        }
    }

    static hasText(value:any, msg:string) {
        if (!value || typeof value !== "string" || value.length === 0) {
            throw new Error(msg || "expect has text but not " + value);
        }
    }

    static equal(expect:string, realValue:string, msg:string) {
        msg = msg || `expect value equal ${expect} but ${realValue}`;
        if (expect !== realValue) {
            throw new Error(msg);
        }
    }
}
