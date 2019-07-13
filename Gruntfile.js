module.exports = function(grunt) {

    grunt.initConfig({
        serve: {
        options: {
            port: 8000
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    './dist/assets/css/main.css': './src/assets/scss/main.scss'
                    //'./dist/assets/css/main-rtl.css': './src/assets/scss/main-rtl.scss'
                }
            }
        },

        browserify: {
            dist: {
                files: {
                    // destination for transpiled js : source js
                    './dist/assets/js/main.js': './src/assets/js/main.js'
                },
                options: {
                    transform: [
                        ['babelify', { presets: "es2015" }]
                    ],
                    browserifyOptions: {
                        debug: true
                    }
                }
            }
        },

        copy: {
            main: {
                files: [
                    { expand: true, cwd: 'src/assets/js', src: ['lib/**'], dest: 'dist/assets/js', filter: 'isFile' },
                    { expand: true, cwd: 'src/assets/scss', src: ['lib/**'], dest: 'dist/assets/css', filter: 'isFile' },
                    { expand: true, cwd: 'src/assets', src: ['fonts/**'], dest: 'dist/assets', filter: 'isFile' },
                    { expand: true, cwd: 'src/assets', src: ['img/**'], dest: 'dist/assets', filter: 'isFile' }
                ]
            }
        },

        clean: {
            build: ['dist']
        },
        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')({ browsers: ['last 5 version'] })
                ]
            },
            dist: {
                src: 'dist/assets/css/main.css'
            }
        },
        includes: {
            templates: {
                src: ['templates/*.html'], // Source files
                dest: 'dist', // Destination directory
                flatten: true,
                cwd: 'src/',
                options: {
                    silent: true,
                    includePath: 'src/'
                }
            },
            components: {
                src: ['components/**/*.html'], // Source files
                dest: 'dist/components', // Destination directory
                flatten: true,
                cwd: 'src/',
                options: {
                    silent: true,
                    includePath: 'src/'
                }
            }
        },
        watch: {
            scripts: {
                files: 'src/**',
                tasks: ['clean', 'sass', 'postcss', 'browserify:dist', 'copy:main', 'includes'],
                options: {
                    spawn: false,
                },
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-includes');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-serve');

    grunt.registerTask('default', ['clean', 'sass', 'postcss', 'browserify:dist', 'copy:main', 'includes', 'watch']);

};