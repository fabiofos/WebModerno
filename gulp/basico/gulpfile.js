const gulp = require('gulp')

gulp.task('default', () =>{
    gulp.start('copiar', 'fim')
    // console.log('ok')
})

gulp.task('copiar', ['antes1', 'antes2'], () =>{
    gulp.src(['pastaA/Arquivo1.txt', 'pastaA/Arquivo2.txt'])
    .pipe(gulp.dest('pastaB'))
})

gulp.task('antes1', () => console.log('antes1'))
gulp.task('antes2', () => console.log('antes2'))

gulp.task('fim', () => console.log('fim'))