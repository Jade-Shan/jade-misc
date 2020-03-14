// #!/bin/bash
// # lessc -x style.less > style.css
// # lessc style.less > style.css

// gulp build-less：你会在目录下发现less目录下的less文件被编译成对应的css文件。
// gulp min-styles：会在css目录下输出all.css和all.min.css文件。
// gulp develop：会监听所有less文件，当有less文件改变时，会执行build-less和min-styles
const gulp      = require('gulp');
const less      = require('gulp-less');        //less编译
const minifycss = require('gulp-minify-css');  //css压缩
const jshint    = require('gulp-jshint');      //js检查
const uglify    = require('gulp-uglify');      //js压缩
const rename    = require('gulp-rename');      //重命名
const concat    = require('gulp-concat');      //合并文件
const clean     = require('gulp-clean');       //清空文件夹

const srcStylePath =      'src/css-themes/hobbit/styles/';
const tmpStylePath =      'tmp/css-themes/hobbit/styles/';
const tagStylePath = 'web-root/css-themes/hobbit/styles/';

const srcScriptPath =      'src/scripts/';
const tmpScriptPath =      'tmp/scripts/';
const tagScriptPath = 'web-root/scripts/';

// =======================
// css
// =======================

gulp.task('clean-styles', async (callback) => {
		await gulp.src([tmpStylePath, tagStylePath], 
			{read: false, allowEmpty: true}).pipe(clean());
		await callback();
});

gulp.task('build-less', gulp.series(/*'clean-styles',*/ async (callback) => {
	await gulp.src(srcStylePath + '**/*.less')
		.pipe(less({compress: true}))
		.on('error', (e) => {console.log(e)})
		.pipe(gulp.dest(tmpStylePath));
	await callback();
}));

gulp.task('min-styles', gulp.series(/* 'build-less',*/ async (callback) => {
	await gulp.src([tmpStylePath + '*.css'])
		.pipe(concat('all.css'))           // 合并文件为all.css
		.pipe(gulp.dest(tmpStylePath))     // 输出all.css文件
		.pipe(rename({suffix: '.min'}))    // 重命名all.css为 all.min.css
		.pipe(minifycss())                 // 压缩css文件
		.pipe(gulp.dest(tagStylePath));    // 输出all.min.css
	await callback();
}));


// =======================
// javascript
// =======================

gulp.task('clean-scripts', async (callback) => {
	await gulp.src([tmpScriptPath, tagScriptPath], 
		{read: false, allowEmpty: true}).pipe(clean());
	await callback();
});

// 检查javascript
gulp.task('check-scripts', gulp.series(/* 'clean-scripts',*/ async (callback) => {
	await gulp.src(srcScriptPath + '**/*.js').pipe(jshint())
		.pipe(jshint.reporter('default'));
	await callback();
}));

// 合并、压缩、重命名javascript
gulp.task('min-scripts', gulp.series(/*'check-scripts',*/ async (callback) => {
	await gulp.src(srcScriptPath + '**/*.js').pipe(concat('script.js'))
		.pipe(gulp.dest(tmpScriptPath))
		.pipe(rename({suffix: '.min'})).pipe(uglify())
		.pipe(gulp.dest(tagScriptPath));
	await callback();
}));


// // 清空图片、样式、js
// gulp.task('clean', function() {
// 		gulp.src([pathOutputScripts], 
// 			{read: false}).pipe(clean());
// });
// 
// // 检查javascript
// gulp.task('check-js', function() {
// 	gulp.src(pathSrcScripts + '**/*.js').pipe(jshint()) .pipe(jshint.reporter('default'));
// 	});
// 
// gulp.task('min-scripts', function() {
// 	gulp.src([pathSrcScripts + 'base.js', pathSrcScripts + 'dataStructure.js',
// 		pathSrcScripts + 'instance.js'
// 	])
// 		.pipe(concat('jadeutils.v2.js'))
// 		.pipe(gulp.dest(pathOutputScripts))
// 		.pipe(rename({suffix: '.min'}))
// 		.pipe(uglify())
// 		.pipe(gulp.dest(pathOutputScripts));
// 	});
// 
// // // 默认任务 清空图片、样式、js并重建 运行语句 gulp
// // gulp.task('default', ['build-less'], function(){
// //     gulp.start('min-styles','min-scripts');
// //     gulp.start();
// // });
// // 监控变化
// gulp.task('develop', function() {
// 	gulp.watch(
// 		[ pathSrcScripts + '**/*.js'], 
// 		['clean']);
// 		});
// 
