
class ButtonManager{

    constructor(buttons, x, y, w, h, r, b, justify){
        this.buttons = buttons;
        this.x = x;
        this.y = y;
        this.r = r;
        this.b = b;
        this.w = w;
        this.h = h;
        this.justify = justify; // True indicated a row layout, False is column layout.

        this.aspect_ratio = [1, 1];
        if(w < 1){
            this.aspect_ratio[0] = w;
        }else{
            this.w = w;
        }

        if(h < 1){
            this.aspect_ratio[1] = h;
        }else{
            this.h = h;
        }
    }

    updateWindowDimentions(width, height){
        if(this.aspect_ratio[0] < 1){
            this.w = width * this.aspect_ratio[0];
        }

        if(this.aspect_ratio[1] < 1){
            this.h = height * this.aspect_ratio[1];
        }
    }

    display(){

        let buffer = this.b;
        let current_x = this.x;
        let current_y = this.y;
        let current_w = this.w;
        let current_h = this.h;

        if(this.justify){
            current_w = this.w / this.buttons.length - (buffer * (this.buttons.length - 1)) / this.buttons.length;
            current_h = this.h;
        }else{
            current_w = this.w;
            current_h = this.h / this.buttons.length - (buffer * (this.buttons.length - 1)) / this.buttons.length
        }

        for(let b of this.buttons){
            b.display(current_x, current_y, current_w, current_h, this.r);

            if(this.justify){
                current_x += b.w + buffer;
                
            }else{
                current_y += b.h + buffer;
            }
        }
    }

    on_mouse_down(x, y){
        let button = this.bounds_check(x, y);
        if(button != null){
             button.isClicked = true;
             button.run_function();
             this.display();
        }
    }

    on_mouse_up(){
        for(let b of this.buttons){
            b.isClicked = false;
        }
        this.display();
    }

    bounds_check(x, y){
        for(let b of this.buttons){
            if(b.bounds_check(x, y)){
                return b
            }
        }
        return null;
    }
}

class Button {

    constructor(text, button_color, text_color, click_color, func) {

        this.text = text;
        this.button_color = button_color;
        this.text_color = text_color;
        this.click_color = click_color;
        this.func = func;
        this.isClicked = false;
    }

    display(x, y, w, h, r) {

        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.r = r;
        
        // Shape of Button
        ctx.beginPath();
        ctx.fillStyle = this.button_color;
        if(this.isClicked){
            ctx.fillStyle = this.click_color;
        }
        ctx.roundRect(this.x, this.y, this.w, this.h, this.r);
        ctx.fill();
        ctx.closePath();

        // Text for button 
        ctx.beginPath();

        let font = new FontFace(
            "pixel",
            "url(https://fonts.gstatic.com/s/vt323/v12/pxiKyp0ihIEF2isfFJU.woff2)" // CHange to the font you would like, this one is off Google Fonts
        );
        document.fonts.add(font);

        ctx.fillStyle = this.text_color;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = Math.min(this.w/5, this.h/2) + "px pixel";
        ctx.fillText(this.text, this.x + (this.w / 2), this.y + (this.h / 2));
        ctx.fill();
        ctx.closePath();
    }

    run_function(){
        this.func();
    }

    bounds_check(x, y){
        if(x >= this.x && x <= this.x + this.w && y >= this.y && y <= this.y + this.h){
            return true;
        }
        return false;
    }
}
