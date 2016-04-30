// #!/bin/bash
// # lessc -x style.less > style.css
// # lessc style.less > style.css

// gulp build-less：你会在目录下发现less目录下的less文件被编译成对应的css文件。
// gulp min-styles：会在css目录下输出all.css和all.min.css文件。
// gulp develop：会监听所有less文件，当有less文件改变时，会执行build-less和min-styles
var gulp = require('gulp'),
		less = require('gulp-less'),              //less编译
		minifycss = require('gulp-minify-css'),   //css压缩
		jshint = require('gulp-jshint'),          //js检查
		uglify  = require('gulp-uglify'),         //js压缩
		rename = require('gulp-rename'),          //重命名
		concat  = require('gulp-concat'),         //合并文件
		clean = require('gulp-clean');            //清空文件夹
		
var pathSrcScripts = "./src/javascript/";

var pathOutputScripts = "./web-root/scripts/";

// 清空图片、样式、js
gulp.task('clean', function() {
		gulp.src([pathOutputScripts], 
			{read: false}).pipe(clean());
});

// 检查javascript
gulp.task('check-js', function() {
	gulp.src(pathSrcScripts + '**/*.js').pipe(jshint()) .pipe(jshint.reporter('default'));
	});

gulp.task('min-scripts', function() {
	gulp.src(pathSrcScripts + '**/*.js')
		.pipe(concat('app.js'))
		.pipe(gulp.dest(pathOutputScripts))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.pipe(gulp.dest(pathOutputScripts));
	});

// // 默认任务 清空图片、样式、js并重建 运行语句 gulp
// gulp.task('default', ['build-less'], function(){
//     gulp.start('min-styles','min-scripts');
//     gulp.start();
// });
// 监控变化
gulp.task('develop', function() {
	gulp.watch(
		[ pathSrcScripts + '**/*.js'], 
		['clean']);
		});

