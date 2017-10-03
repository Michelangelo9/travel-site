var gulp = require("gulp"),
	watch = require("gulp-watch"),
	browserSync = require("browser-sync").create();

gulp.task("watch", function(){

	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		}
	});
	
	watch("./app/index.html", function(){
		browserSync.reload();
	});
	
	watch("./app/assets/css/**/*.css", function(){
		gulp.start("cssInject");
	});
		
});

gulp.task("cssInject", ["css"], function(){
	
	gulp.src("./app/temp/css/styles.src.css")
		.pipe(browserSync.stream());
		
});	