const browserSync = require("browser-sync");
const server = browserSync.create();


exports.play = () => {
    console.log("GULP - running play function");
    browserSync.init({
        server: {
            baseDir: "."
        }
    });

}