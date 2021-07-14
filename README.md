# Button-Manager
Use this in your javascript canvas projects to create dynamic buttons, that move, scale, and react together.

To install, download the file 
`buttonManager.js`
and include 
`<script  src="buttonManager.js"></script>`
in your html file.

## How to Create a new Button?
Below are the defined parameters to the class 'Button'
`button = new Button(t, bg, tc, cc);`

 - t - text that will show up inside of the button.
 - bg - background color of the button at rest.
 - tc - text color.
 - cc - color of the button when being clicked

## How to Create a new Button Manager?

Below are the defined parameters for a 'ButtonManager'
`header = new ButtonManager(L, x, y, w, h, r, b, j);`

 - L - a list of buttons created. Make sure to add the buttons you want in the same manager to a single list. 
 - x - starting x position (top left).
 - y - starting y position (top left).
 - w - width of 'container' housing the buttons. This can be given in 1 of 2 ways...
	  - If the value is less than 1 (for example 1/4 or .25), the button manager will be 1/4 the canvas width.
	 - If the value is greater than or equal to 1 (for example 500), the button manager will be 500 pixels in width 		from the starting x location.
	 - ***This property holds for the height of the container as well!***
 - h - height of 'container' housing the buttons. This can be given in the exact same way as above, but applied to height instead of width.
 - r - corner radius for a rounded rectangle effect. 0 indicates Sharp Corners (90 degrees), anything above 0 will round the corners.
 - b - the buffer in between buttons inside of the container.
 - j - Justify. If true, the buttons will be laid out in Row-Priority order, false is Column-Priority order.

## Displaying your Button Manager
Simply use `buttonManager.display();` where 'buttonManager' is the name of your manager.
	

