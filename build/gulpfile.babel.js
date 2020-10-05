/** Gulp modules */
import gulp from 'gulp';

/** Build modules */
import { clean_assets, clean_layouts_assets, clean_assets_CSS, clean_assets_JS } from './buildModules/helpers.js';
import images from './buildModules/images.js';
import fonts from './buildModules/fonts.js';
import scripts from './buildModules/scripts.js';
import styles from './buildModules/styles.js';
import server from './buildModules/server.js';

const compile = gulp.series(clean_assets_CSS, clean_assets_JS, clean_layouts_assets, gulp.parallel(styles, scripts, fonts, images));
const main = gulp.series(compile, server);

/** Gulp Tasks */
gulp.task('default', main); // "gulp"
gulp.task('compress-image', images); // "gulp compress-img"
gulp.task('convert-fonts', fonts); // "gulp convert-fonts"
