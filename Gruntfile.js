module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        jshint: {
            all: [
                "*.js",
                "!truncateFilename.min.js"
            ]
        },
        watch: {
            files: [
                "*.js",
                "!truncateFilename.min.js"
            ],
            tasks: ["test"]
        },
        jasmine: {
            src: "truncateFilename.min.js",
            options: {
                specs: "spec.js"
            }
        },
        uglify: {
            my_target: {
                files: {
                    "truncateFilename.min.js": [
                        "truncateFilename.js"
                    ]
                }
            },
            options: {
                banner: "/*!\n    " +
                        "<%= pkg.name %> (v<%= pkg.version %>) <%= grunt.template.today('dd-mm-yyyy') %>\n    " +
                        "(c) <%= pkg.author %>\n" +
                        "*/\n"
            }
        }
    });
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-jasmine");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.registerTask("test", ["jshint", "uglify", "jasmine"]);
};