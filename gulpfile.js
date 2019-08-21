"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");

sass.compiler = require("node-sass"); // Necessario para funcionar gulp-sass

gulp.task("default", watch);

gulp.task("sass", compilaSass);

function compilaSass() {
  return (
    gulp
      .src("src/scss/**/*.scss")
      //Converte Sass para CSS mimificado com gulp-sass
      .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
      .pipe(gulp.dest("src/css"))
  );
}

function watch() {
  gulp.watch("src/scss/**/*.scss", compilaSass);
}
