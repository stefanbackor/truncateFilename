describe("truncateFilename", function() {

    it("should have a global truncateFilename object", function() {
        expect(truncateFilename).toBeDefined();
    });

    it("should not truncateFilename shorter string", function() {
        var original = "hello world";

        expect(truncateFilename(original, original.length)).toEqual(original);
        expect(truncateFilename(original, original.length).length).toEqual(original.length);
    });
    
    it("should truncateFilename string with ending", function() {
        var original = "hello world, what a beautifull day.";

        expect(truncateFilename(original, 12, "!")).toEqual("hello world!");
        expect(truncateFilename(original, 12, "!").length).toEqual(12);
    });
    
    it("should ignore trailing space", function() {
        var original = "  hello world, what a beautifull day.  ";

        expect(truncateFilename(original, 12, "!")).toEqual("hello world!");
        expect(truncateFilename(original, 12, "!").length).toEqual(12);
    });
    
    it("should truncateFilename filename in the middle while preserving extension", function() {
        var original = "helloWorld.minified.js";

        expect(truncateFilename(original, 15, "...")).toEqual("hello...fied.js");
        expect(truncateFilename(original, 15, "...").length).toEqual(15);
    });
});