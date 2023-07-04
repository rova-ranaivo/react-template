# Doc

## Installation 
```bash
# template typescript => To use Typescript in the project
npm create-react-app --template typescript 
```
## Boostrap added
```bash
npm install boostrap
```
## SCSS added
```bash
npm install sass
```

## Done 
- Scroll from one section to the next one
- load background image
- Use Scss to align css code
- Routing

## Todo
- Create simple form with bootstrap - Form component has already been created
- Menu
- Mobile version

## Best practices
### **CSS variables**
What ? 
To make use of css variable easier, we can add some property directly in the CSS root. 
```css
:root {
    --my-variable: 'my-variable-value' !important;
}
```
>### **!imporant ? Why ?**
>When you use Bootstrap, a file named '_reboot.css' (which is use to reset all css default value) override your custom variable. In this case, !important is mandatory. 
Otherwise, you will need to find a way to import '_reboot.css' before your custom css. 


Things that may be useful for the project: 

Simple syntax:
```css
@media (orientation: portrait) { // or landscape;
    .className {
        cssAttribute: cssValue;
    }
}
```
For media query, 
```css
// you can use 
@media (width >= 300px) {} 
or 
// not yet supported by safari
@media (100 <= width <= 300px) {} // If the screen size is between 100 & 300px
// instead of 
@media (min-width : 300px ) {}
```

ffmpeg - resize image file

