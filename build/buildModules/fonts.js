/** Gulp modules */
import gulp from 'gulp';
import newer from 'gulp-newer';
import ttf2woff2 from 'gulp-ttf2woff2';

/** Config */
import config from '../pitconfig.json';

/**
 *  Fonts
 *  - Handle export of Assets TTF
 */
function convert_fonts() {

    return gulp
        .src(config.assets.src.fonts)

        /** Check only "newer" fonts files */
        .pipe(newer(config.assets.dist.fonts))

        /** Convert ttf to woff2 */
        .pipe(ttf2woff2())

        /** Export compressed images */
        .pipe(gulp.dest(config.assets.dist.fonts));
}

export default convert_fonts;
