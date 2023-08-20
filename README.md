# prettierparensbreaklogic
Prettier VSCode extension breaks logic

# Examples #

````
  if (Math.pow(h, 2) > ( Math.pow(b, 2) + Math.pow(o, 2) ) ) {
            return true;
  }

IS NOT THE SAME AS

  if ( Math.pow(h, 2) > Math.pow(b, 2) + Math.pow(o, 2) ) {
            return true;
  }  
````

Prettier removes the parentheses and breaks the equation.

It's also harder to read. Prettier needs to add an option for this. I don't know why you guys are so resistant to it. 
