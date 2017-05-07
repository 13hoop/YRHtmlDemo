# YRHtmlDemo
just a test demo


# when get window visibale height
    Using `$(window).height()` will not give you the viewport size it will give you the size of the entire window, which is usually the size of the entire document though the document could be even larger.
  Solution
    To get the size of the actual viewport use `window.innerHeight and window.innerWidth`.

    Do not use the jQuery methods, e.g. `$(window).innerHeight()`, as these give the wrong numbers. They give you the window's height, not innerHeight.
