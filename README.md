mexopencv
=========

A collection and a development kit of MATLAB MEX-functions for OpenCV library.

The package provides MATLAB MEX functions that interface a hundred of
OpenCV APIs. Also the package contains C++ class that converts between
MATLAB's native data type and OpenCV data types. The package is suitable for
fast prototyping of OpenCV application in MATLAB, use of OpenCV as an external
toolbox in MATLAB, and development of a custom MEX function.

Documentation
=============

* [User documentation](./matlab/index.html)
* [Developer documentation](./cpp/index.html)

Getting Started
===============

Here is an example to detect faces in an image using the Haar Feature-based Cascade Classifier:

```matlab
% Load the classifier file
xmlfile = fullfile(mexopencv.root(),'test','haarcascade_frontalface_alt2.xml');
cascade = cv.CascadeClassifier(xmlfile);

% Load the source image
src = imread('people.jpg');

% Convert to grayscale
gray = cv.cvtColor(src, 'RGB2GRAY');
gray = cv.equalizeHist(gray);

% Perform the detection and draw the detected faces
faces = cascade.detect(gray, 'ScaleFactor',1.1, 'MinNeighbors',4);
for i=1:length(faces)
    src = cv.rectangle(src, faces{i}, 'Color',[0,255,0], 'Thickness',2);
end
imshow(src)
```

License
=======

The code may be redistributed under the
[BSD 3-Clause license](http://www.opensource.org/licenses/BSD-3-Clause).
