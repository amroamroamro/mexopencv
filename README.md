# mexopencv

This branch contains published mexopencv documentation and examples.

* [User documentation](./matlab/index.html)
* [Developer documentation](./cpp/index.html)
* Demos: [opencv](./opencv.html), [opencv_contrib](./opencv_contrib.html)

## Build

1. Generate [mexopencv documentation][1] in MATLAB, and move output dir to `./matlab/`:

       >> MDoc

2. Generate C++ docs (using [Doxygen][2]), and move the output dir to `./cpp/`:

       $ doxygen

3. Run and [publish][3] mexopencv samples in MATLAB, and move the output dirs to `./opencv/` and `./opencv_contrib/`.

       % do this for all samples
       >> publish('some_demo_file.m', 'html')

4. Build website (using [Node.js][4] and [npm][5] package manager):

       # download dependencies (Bootstrap, Gulp, etc.)
       $ npm install

       # build website
       $ npm run gulp

       # test site locally
       $ npm start


[1]: https://github.com/kyamagu/mexopencv/blob/master/utils/MDoc.m
[2]: http://www.stack.nl/~dimitri/doxygen/
[3]: https://www.mathworks.com/help/matlab/ref/publish.html
[4]: https://nodejs.org/
[5]: https://www.npmjs.com/
